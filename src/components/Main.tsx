import MainItem from "./MainItem"
import item_1_img_1 from "../assets/item_1/1.svg"
import item_1_img_2 from "../assets/item_1/2.svg"
import item_1_img_V from "../assets/item_1/screen_video_1.png"
import item_2_img_1 from "../assets/item_2/1.svg"
import item_2_img_2 from "../assets/item_2/2.svg"
import item_2_img_V from "../assets/item_2/csreen_video_2.png"
import item_3_img_1 from "../assets/item_3/1.svg"
import item_3_img_2 from "../assets/item_3/2.svg"
import item_3_img_V from "../assets/item_3/creen_video_3.png"

const data = [
    {
        text1_main: "70%",
        text1_sub: "юристов чувствуют",
        text1_sub_col: " постоянную усталость",
        text2_1: "Но юрист Леонид выбрал Вселенную ПравоТех и теперь готовит типовой договор ",
        text2_1_col: "не за 2 дня, а за 10 минут.",
        text2_2: "Посмотрите, как автоматизация позволила ему уходить с работы вовремя.",
        img_1: item_1_img_1,
        img_2: item_1_img_2,
        img_V: item_1_img_V,
    },
    {
        text1_main: "25%",
        text1_sub: "юристов ощущают",
        text1_sub_col: " бессмысленность работы",
        text2_1: "А юрист Лика выбрала Вселенную ПравоТех и ",
        text2_1_col: " 90 % документов по судебным делам хранит в электронном виде.",
        text2_2: "Посмотрите, как ИТ - решения освобождают время для громких побед в судебных процессах.",
        img_1: item_2_img_1,
        img_2: item_2_img_2,
        img_V: item_2_img_V,
    },
    {
        text1_main: "21%",
        text1_sub: "юристов выгорают",
        text1_sub_col: " из-за монотонной работы",
        text2_1: "Но юрист Сергей выбрал Вселенную ПравоТех и  ",
        text2_1_col: "освободил 30% времени на себя и личную жизнь.",
        text2_2: "Посмотрите, как технологии помогают найти work-life balance.",
        img_1: item_3_img_1,
        img_2: item_3_img_2,
        img_V: item_3_img_V,
    }
]
function Main() {
    return (
        <>
            <div className="overflow-x-hidden">
                {data.map((item) => <div>
                    <MainItem
                        text1_main={item.text1_main} text1_sub={item.text1_sub} text1_sub_col={item.text1_sub_col}
                        text2_1={item.text2_1} text2_1_col={item.text2_1_col} text2_2={item.text2_2}
                        img1={item.img_1} img2={item.img_2} imgV={item.img_V}
                    /></div>)}
            </div>
        </>
    )
}
export default Main
