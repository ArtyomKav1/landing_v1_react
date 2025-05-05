import { Field, ErrorMessage as Error, useField } from "formik";
import check from "../../assets/check.png"
import warning from "../../assets/warning.png"
type ItemInputProps = {
    name: string
    placeholder: string
}
export const ItemInput = (props: ItemInputProps) => {
    const [field, meta] = useField(props.name);
    return (
        <>

            <div className="w-full 2xl:h-[84px] h-[56px] bg-[#171717] rounded-[8px]  2xl:px-[24px] px-[16px] 2xl:py-[22.5px] py-[15px] overflow-hidden border border-[#3A3A3A] relative">
                <Field
                    className="block text-[#FFFFFF] w-[88%] appearance-none focus:outline-none focus:ring-0 
                    peer  bg-transparent 2xl:text-[27px] text-[18px] 2xl:leading-[39px] leading-[26px]"
                    type="text"
                    name={props.name}
                    id={props.name}
                    autoComplete="off"
                    onBlur={field.onBlur}
                    placeholder={props.placeholder}

                />
                {meta.touched && !meta.error && (
                    <div className="group">
                        <img src={check} className="absolute right-[10px] 2xl:top-[20px] top-[17px] 2xl:w-[40px] w-[20px] 2xl:h-[40px] h-[20px]" alt="" />
                        <span
                            className="absolute right-[60px] pointer-events-none top-[22px] transition-all duration-300 bg-green-500 px-[10px] rounded-[8px] py-[5px] text-white opacity-0 
                                            invisible group-hover:opacity-80  group-hover:visible">
                            OK
                        </span>

                    </div>
                )}
                <Error name={props.name}>
                    {(error) => <div className="group ">
                        <img src={warning} className="absolute right-[10px] 2xl:top-[20px] top-[17px] 2xl:w-[40px] w-[20px] 2xl:h-[40px] h-[20px]" alt="" />
                        <span
                            className=" absolute right-[60px] top-[22px] transition-all pointer-events-none
                                        duration-300 bg-red-500 px-[15px] rounded-[8px] py-[5px] text-white opacity-0 group-hover:opacity-80">
                            {error}
                        </span>
                    </div>}
                </Error>
            </div>
        </>
    );
};

