
import Logo from "../../assets/Logo.svg"
import Input from "./Input"

function InputWrapper() {
    return (
        <>
            <div className="py-[100px] flex flex-col items-center gap-[100px] w-[888px] mx-auto">
                <div><img src={Logo} width={197} height={40} alt="" /></div>
                <div className="flex flex-col gap-[48px] w-full">
                    <div className="flex flex-col gap-[36px]">
                        <div className="text-[32px] text-white leading-[42px] font-medium text-center">
                            Право — ваш выбор. Выберите технологии <br /> и получайте удовольствие от работы.
                        </div>
                        <div className="text-[27px] text-white leading-[39px]  text-center">
                            Заполните форму и <span className="text-[#FFBE3F]">заберите гайдбук</span> <br /> по автоматизации процессов.
                        </div>
                    </div>
                    <Input/>
                </div>
                <div className="text-[27px] text-white/50 leading-[39px] underline hover:no-underline">
                    Статья про причины выгорания у юристов
                </div>


            </div>
        </>
    )
}

export default InputWrapper


