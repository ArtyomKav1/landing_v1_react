
import { useState } from "react"
import Logo from "../../assets/Logo.svg"
import Input from "./Input"
import Loader from "../../assets/Loader.svg"

function InputWrapper() {
    const [popupLoading, setPopupLoading] = useState(false)
    return (
        <>
            <div className="sm:py-[100px] py-[50px] flex flex-col items-center sm:gap-[100px] gap-[50px] xl:max-w-[888px] sm:max-w-[554px] min-w-[332px] sm:px-[0px] px-[20px]  mx-auto relative">
                <div><img className="2xl:w-[197px] xl:w-[140px] w-[120px] 2xl:h-[40px] l:h-[30px] h-[26px]" src={Logo} alt="" /></div>
                <div className="flex flex-col gap-[48px] w-full">
                    <div className="flex flex-col gap-[36px]">
                        <div className="2xl:text-[32px]  text-[21px] text-white 2xl:leading-[42px]  leading-[28px] font-medium text-center">
                            Право — ваш выбор. Выберите технологии <br /> и получайте удовольствие от работы.
                        </div>
                        <div className="2xl:text-[27px] text-[16px] text-white 2xl:leading-[39px] leading-[24px] text-center">
                            Заполните форму и <span className="text-[#FFBE3F]">заберите гайдбук</span> <br /> по автоматизации процессов.
                        </div>
                    </div>
                    <Input setPopupLoading={setPopupLoading} />
                </div>
                <div className="2xl:text-[27px] text-[16px]  text-white/50 2xl:leading-[39px] leading-[24px] underline hover:no-underline text-center">
                    Статья про причины выгорания у юристов
                </div>


                {popupLoading && <div className="bg-black/80 absolute inset-0 w-full h-full z-50 flex flex-col items-center justify-between py-[50px]">
                    {/* <div><img className="2xl:w-[197px] xl:w-[140px] w-[120px] 2xl:h-[40px] l:h-[30px] h-[26px]" src={Logo} alt="" /></div> */}
                    <div className="absolute  top-[50%]"><div className="h-[90%] w-full flex items-center justify-center animate-spin" ><img src={Loader} alt="" /></div></div>

                </div>}
            </div>
        </>
    )
}

export default InputWrapper


