import { Form, Formik } from 'formik';
import { ItemInput } from './ItemInput';
import { ItemCheckBox } from './ItemCheckBox';
import { initialValues, validationSchema } from './valid';
import { useState } from 'react';
import tg from '../../assets/tg.svg';
import vk from '../../assets/vk.svg';
import copy from '../../assets/cope.svg';
import Logo from '../../assets/Logo.svg';
function Input(props: { setPopupLoading: (arg: boolean) => void }) {
  const [popup, setPopup] = useState(false);

  async function postData(data: { email: string; name: string; Post: string; agree: boolean }) {
    props.setPopupLoading(true);
    try {
      await new Promise((resolve) => {
        setTimeout(() => {
          console.log(data);
          setPopup(true);
          resolve('');
        }, 2000);
      });
    } finally {
      props.setPopupLoading(false);
    }
  }

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          postData(values);
          setSubmitting(false);
          resetForm();
        }}
      >
        {() => (
          <Form>
            <div className="flex w-full flex-col justify-center space-y-4 2xl:space-y-6">
              <ItemInput name={'name'} placeholder="ФИО" />
              <ItemInput name={'email'} placeholder="email" />
              <ItemInput name={'Post'} placeholder="Должность" />
              <ItemCheckBox name={'agree'} />
              <button
                type="submit"
                className="cursor-pointer rounded-[8px] bg-[#FFBE3F] px-[40px] py-[22.5px] text-[18px] leading-[26px] text-[#0D0628] transition-all duration-300 hover:-translate-y-1 2xl:text-[27px] 2xl:leading-[39px]"
              >
                Отправить
              </button>
            </div>
          </Form>
        )}
      </Formik>

      {popup && (
        <div className="fixed inset-0 z-50 flex h-screen w-screen flex-col items-center justify-between bg-black px-[20px] py-[50px]">
          <div>
            <img
              className="l:h-[30px] h-[26px] w-[120px] xl:w-[140px] 2xl:h-[40px] 2xl:w-[197px]"
              src={Logo}
              alt="Logo"
            />
          </div>

          <div className="flex flex-col gap-[36px]">
            <h1 className="text-center text-[21px] leading-[28px] font-medium text-white 2xl:text-[32px] 2xl:leading-[42px]">
              Мы рады, что вы решили присоединиться к цифровой Вселенной ПравоТех
            </h1>
            <h2 className="text-center text-[16px] leading-[24px] text-white 2xl:text-[27px] 2xl:leading-[39px]">
              Гайдбук уже отправлен на вашу почту.
            </h2>
            <a
              href="#"
              onClick={() => setPopup(false)}
              className="mx-auto w-[30%] rounded-[8px] bg-[#FFBE3F] p-4 text-center text-[20px] text-black max-md:p-2"
            >
              назад
            </a>
          </div>

          <div className="flex max-w-[472px] flex-col gap-4 text-white">
            <div className="flex gap-4">
              <a
                href="https://ya.ru/?npr=1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-pointer items-center justify-center gap-4 rounded-[8px] bg-[#292929]/40 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFBE3F]"
              >
                <img src={tg} alt="tg" />
                Поделиться
              </a>

              <a
                href="https://ya.ru/?npr=1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-pointer items-center justify-center gap-4 rounded-[8px] bg-[#292929]/40 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFBE3F]"
              >
                <img src={vk} alt="vk" />
              </a>
            </div>

            <div className="flex cursor-pointer items-center justify-center gap-4 rounded-[8px] bg-[#292929]/40 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFBE3F]">
              Скопировать ссылку
              <img src={copy} alt="copy" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Input;
