import HeaderImg from "../assets/Header.svg"

function Header() {


    return (
        <>
            <div className="bg-red-500 w-screen h-screen overflow-x-hidden relative">
                <div className="absolute inset-0"><img src={HeaderImg} alt="" className="w-full h-full object-cover" /></div>
                <div></div>
                <div className="absolute z-10 flex flex-col items-center inset-0 justify-center gap-[48px]">
                    <div className="flex flex-col items-center gap-[36px]">
                        <div className="text-[72px] text-white font-semibold leading-[90px] text-center">Добро пожаловать <br/> во Вселенную ПравоТех</div>
                        <div className="text-[27px] text-white leading-[39px] text-center flex flex-col gap-[16px]">
                            <div>ПравоТех создал цифровую реальность, где работают технологии,<br /> а юристы развивают творческий потенциал.</div>
                            <div> Сделайте первый шаг в автоматизацию и узнайте,<br /> как получать удовольствие от работы.</div>
                        </div>
                    </div>
                    <div className="px-[40px] py-[22.5px] bg-[#FFBE3F] text-[#0D0628] text-[27px] leading-[39px] rounded-[12px]">Начать</div>
                </div>
            </div>
        </>
    )
}

export default Header
