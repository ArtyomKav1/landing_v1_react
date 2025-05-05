import { Field } from "formik";
import type { ChangeEvent, FocusEvent } from "react";
type ItemCheckBoxProps = {
    name: string
    value: boolean
    handleChange: { (e: ChangeEvent<any>): void; <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any> ? void : (e: string | ChangeEvent<any>) => void; }
    handleBlur: { (e: FocusEvent<any, Element>): void; <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void; }
}
export const ItemCheckBox = (props: ItemCheckBoxProps) => {
    return (
        <>            
            <div className="inline-flex items-center relative">
                <Field
                    className="block absolute  w-[24px] h-[24px] bottom-[5px] text-[#FFFFFF]    appearance-none focus:outline-none focus:ring-0 peer rounded-[5px] border-black pt-[10px] bg-transparent"
                    type="checkbox"
                    name={props.name}
                    checked={props.value}
                    onChange={props.handleChange}
                />
                <div
                    className="shrink-0 w-[24px] h-[24px] border-[#3A3A3A] rounded-[4px]  border bg-[#171717]  flex items-center justify-center"
                >
                    {props.value && (
                        <div className="w-[14px] h-[14px] rounded-[4px] bg-white/50" />
                    )}
                </div>
                <div className="cursor-pointer ml-2 text-white 2xl:text-[27px] xl:text-[18px] ext-[16px]">
                    <p>Я согласен c <a href="#" className=" underline ">условиями обработки персональных данных</a></p>
                </div>
            </div>
        </>
    );
};
