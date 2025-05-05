
type MainItem = {
    img1: string
    img2: string
    imgV: string

    text1_main: string
    text1_sub: string
    text1_sub_col: string

    text2_1: string
    text2_2: string
    text2_1_col: string

}

function MainItem(props: MainItem) {


    return (
        <>
            <div className="flex flex-col items-center lg:gap-[120px] p-[20px] ">


                <div className="flex md:w-[2400px] w-full  md:flex-row h-[700px]  flex-col">
                    <div className="flex-1 h-[658px] relative ">
                        <img className="absolute z-10 md:right-[0px] right-[80px] lg:bottom-[-120px] bottom-[120px] 
                         lg:w-[1200px] lg:h-[800px] md:w-[720px] md:h-[480px]  w-[372px] h-[248px]  " src={props.img1}  alt="" />

                        <div className="absolute z-10 w-[432px] top-[200px] md:top-[100px] lg:right-[0px] md:right-[-120px] right-[-85px] flex flex-col gap-[8px] 2xl:gap-[12px]">
                            <div className="text-[#51B0E8] 2xl:text-[108px] text-[72px] 2xl:leading-[108px] leading-[72px]">{props.text1_main}</div>
                            <div className="text-white t2xl:text-[27px] xl:text-[18px] 2xl:leading-[39px] leading-[26px]">{props.text1_sub}<br/><span className="text-[#51B0E8]">{props.text1_sub_col}</span></div>
                        </div>
                    </div>

                    <div className="flex-1 h-[658px] relative">
                        <img className="absolute z-10 md:top-0 top-[-40px] right-[-100px] md:left-[-80px] lg:w-[1200px] lg:h-[800px] md:w-[720px] md:h-[480px]  w-[372px] h-[248px] " src={props.img2} alt="" />
                        <div
                            className="absolute z-10   bottom-[20px] left-[0px] text-white rounded-[8px]
                             flex flex-col 2xl:gap-[24px] gap-[16px] border border-[#FFBE3F]
                            2xl:text-[27px] xl:text-[18px] text-[16px] 2xl:w-[582px] md:w-[360px] w-[332px] 2xl:leading-[39px] xl:leading-[26px] leading-[24px  2xl:p-[40px] p-[28px]
                            "
                        >
                            <div >{props.text2_1} <span className="text-[#FFBE3F]">{props.text2_2}</span></div>
                            <div>{props.text2_1_col}</div>
                        </div>
                    </div>
                </div>






                <div className="2xl:w-[1192px] lg:w-[936px] md:w-[696px]  "><img src={props.imgV} alt="" /></div>
            </div>
        </>
    )
}

export default MainItem