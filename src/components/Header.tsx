import HeaderImg from "../assets/Header.svg"

function Header() {

    const scroll = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        })
    };

    return (
        <>
            <div className="bg-red-500 w-screen h-screen overflow-x-hidden relative">
                <div className="absolute inset-0"><img src={HeaderImg} alt="" className="w-full h-full object-cover" /></div>
                <div></div>
                <div className="absolute z-10 flex flex-col items-center inset-0 justify-center gap-[48px]">
                    <div className="flex flex-col items-center 2xl:gap-[36px]  gap-[24px]">
                        <div className="2xl:text-[72px]  2xl:leading-[90px]     xl:text-[48px] xl:leading-[60px] leading-[32px] text-[24px]     text-white font-semibold  text-center">Добро пожаловать <br /> во Вселенную ПравоТех</div>
                        <div className="2xl:text-[27px] 2xl:leading-[39px] 2xl:gap-[16px]     xl:text-[18px] xl:leading-[26px] xl:gap-[12px]          gap-[8px]  text-[16px] leading-[24px]     text-white text-center flex flex-col ">
                            <div>ПравоТех создал цифровую реальность, где работают технологии,<br /> а юристы развивают творческий потенциал.</div>
                            <div> Сделайте первый шаг в автоматизацию и узнайте,<br /> как получать удовольствие от работы.</div>
                        </div>
                    </div>
                    <button onClick={scroll} className="xl:px-[40px] xl:py-[22.5px] px-[24px] py-[15px]  bg-[#FFBE3F] text-[#0D0628] xl:text-[27px] text-[16px] xl:leading-[39px] leading-[24px] rounded-[12px]">Начать</button>
                </div>
            </div>
        </>
    )
}

export default Header
