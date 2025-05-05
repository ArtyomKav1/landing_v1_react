import { Form, Formik, } from 'formik';
import { ItemInput } from "./ItemInput"
import { ItemCheckBox } from "./ItemCheckBox"
import { initialValues, validationSchema } from './valid';
import { useState } from 'react';
import tg from "../../assets/tg.svg"
import vk from "../../assets/vk.svg"
import copy from "../../assets/cope.svg"
import Logo from "../../assets/Logo.svg"
function Input(props: { setPopupLoading: (arg: boolean) => void }) {

    const [popup, setPopup] = useState(false)


    async function postData(data: { email: string, name: string, Post: string, agree: boolean, }) {
        props.setPopupLoading(true)
        try {
            const response = await fetch("http://212.23.211.54:3000/v1", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            } else {
                props.setPopupLoading(false)
                setPopup(true)
            }

            const result = await response.json();
            console.log('Success:', result);
            return result;
        } catch (error) {
            // console.error('Error:', error.message);
            throw error;
        } finally {
            props.setPopupLoading(false)
        }
    }

    return (
        <>

            <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values)
                    postData(values)
                    setSubmitting(false);

                    // props.setConfirm(true)
                }}
            >
                {({ values,
                    handleChange,
                    handleBlur,
                    // handleSubmit,
                    // isSubmitting, 
                }) => (
                    <Form>
                        <div className='w-full 2xl:space-y-6 space-y-4 flex flex-col  justify-center '>

                            <ItemInput name={"name"} placeholder='ФИО' />
                            <ItemInput name={"email"} placeholder='email' />
                            <ItemInput name={"Post"} placeholder='Должность' />
                            <ItemCheckBox name={"agree"} value={values.agree} handleChange={handleChange} handleBlur={handleBlur} />
                            <button type="submit" className='px-[40px] rounded-[8px] py-[22.5px] bg-[#FFBE3F] text-[#0D0628] 2xl:text-[27px] text-[18px] 2xl:leading-[39px] leading-[26px]'>
                                Отправить
                            </button>

                        </div>
                    </Form >
                )}
            </Formik >



            {popup && <div className="bg-black fixed inset-0 w-screen h-screen z-50 flex flex-col items-center justify-between py-[50px] px-[20px]">
                <div><img className="2xl:w-[197px] xl:w-[140px] w-[120px] 2xl:h-[40px] l:h-[30px] h-[26px]" src={Logo} alt="" /></div>

                <div className="flex flex-col gap-[36px]">
                    <div className="2xl:text-[32px]  text-[21px] text-white 2xl:leading-[42px]  leading-[28px] font-medium text-center">
                        Мы рады, что вы решили присоединиться к цифровой Вселенной ПравоТех
                    </div>
                    <div className="2xl:text-[27px] text-[16px] text-white 2xl:leading-[39px] leading-[24px] text-center">
                        Гайдбук уже отправлен на вашу почту.
                    </div>
                </div>
                <div className='text-white max-w-[472px] flex flex-col'>
                    <div className='flex flex-1'>
                        <div className='flex bg-[#292929]/40 flex-1 py-[15px] px-[24px] items-center justify-center w-full'><img src={tg} alt="" />Поделиться</div>
                        <div className='bg-[#292929]/40'><img src={vk} alt="" /></div>
                    </div>
                    <div className='flex flex-1 bg-[#292929]/40'>Скопировать ссылку<img src={copy} alt="" /></div>
                </div>
            </div>}
        </>
    )
}
export default Input









