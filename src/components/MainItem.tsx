
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
            <div className="flex flex-col items-center gap-[150px]">
                <div className="flex">
                    <div className="flex-1 h-[658px] relative">
                        <img src={props.img1} alt="" />
                        <div className="absolute z-10 w-[432px] top-[100px] right-[0px]">
                            <div className="text-[#51B0E8] text-[108px] leading-[108px]">{props.text1_main}</div>
                            <div className="text-white text-[27px] leading-[39px]">{props.text1_sub}<span className="text-[#51B0E8]">{props.text1_sub_col}</span></div>
                        </div>
                    </div>
                    <div className="flex-1 h-[658px] relative">
                        <img src={props.img2} alt="" />
                        <div
                            className="absolute z-10 w-[584px] bottom-[0px] left-[0px] text-white rounded-[8px]
                            text-[27px] leading-[39px] p-[40px] flex flex-col gap-[24px] border border-[#FFBE3F]"
                        >
                            <div >{props.text2_1} <span className="text-[#FFBE3F]">{props.text2_2}</span></div>
                            <div>{props.text2_1_col}</div>
                        </div>
                    </div>
                </div>
                <div className="w-[1192px] h-[692px]"><img src={props.imgV} alt="" /></div>
            </div>
        </>
    )
}

export default MainItem