import { useState } from 'react';
import Logo from '../../assets/Logo.svg';
import Input from './Input';
import Loader from '../../assets/Loader.svg';

function InputWrapper() {
  const [popupLoading, setPopupLoading] = useState(false);
  return (
    <>
      <section className="relative mx-auto flex min-w-[332px] flex-col items-center gap-[50px] px-[20px] py-[50px] sm:max-w-[554px] sm:gap-[100px] sm:px-[0px] sm:py-[100px] xl:max-w-[888px]">
        <img
          className="l:h-[30px] h-[26px] w-[120px] xl:w-[140px] 2xl:h-[40px] 2xl:w-[197px]"
          src={Logo}
          alt="Logo"
        />
        <div className="flex w-full flex-col gap-[48px]">
          <div className="flex flex-col gap-[36px]">
            <h2 className="text-center text-[21px] leading-[28px] font-medium text-white 2xl:text-[32px] 2xl:leading-[42px]">
              Право — ваш выбор. Выберите технологии <br /> и получайте удовольствие от работы.
            </h2>
            <h3 className="text-center text-[16px] leading-[24px] text-white 2xl:text-[27px] 2xl:leading-[39px]">
              Заполните форму и <span className="text-[#FFBE3F]">заберите гайдбук</span> <br /> по
              автоматизации процессов.
            </h3>
          </div>
          <Input setPopupLoading={setPopupLoading} />
        </div>
        <h1 className="text-center text-[16px] leading-[24px] text-white/50 underline hover:no-underline 2xl:text-[27px] 2xl:leading-[39px]">
          Статья про причины выгорания у юристов
        </h1>

        {popupLoading && (
          <div className="absolute inset-0 z-50 flex h-full w-full flex-col items-center justify-between bg-black/80 py-[50px]">
            <div className="absolute top-[50%]">
              <div className="flex h-[90%] w-full animate-spin items-center justify-center">
                <img src={Loader} alt="Loader" />
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default InputWrapper;
