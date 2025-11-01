import { Field, ErrorMessage as Error, useField } from 'formik';
import check from '../../assets/check.png';
import warning from '../../assets/warning.png';
type ItemInputProps = {
  name: string;
  placeholder: string;
};
export const ItemInput = (props: ItemInputProps) => {
  const [field, meta] = useField(props.name);
  return (
    <>
      <div className="relative h-[56px] w-full overflow-hidden rounded-[8px] border border-[#3A3A3A] bg-[#171717] px-[16px] py-[15px] 2xl:h-[84px] 2xl:px-[24px] 2xl:py-[22.5px]">
        <Field
          className="peer block w-[88%] appearance-none bg-transparent text-[18px] leading-[26px] text-[#FFFFFF] focus:ring-0 focus:outline-none 2xl:text-[27px] 2xl:leading-[39px]"
          type="text"
          name={props.name}
          id={props.name}
          autoComplete="off"
          onBlur={field.onBlur}
          placeholder={props.placeholder}
        />
        {meta.touched && !meta.error && (
          <div className="group">
            <img
              src={check}
              className="absolute top-[17px] right-[10px] h-[20px] w-[20px] 2xl:top-[20px] 2xl:h-[40px] 2xl:w-[40px]"
              alt=""
            />
            <span className="pointer-events-none invisible absolute top-[22px] right-[60px] rounded-[8px] bg-green-500 px-[10px] py-[5px] text-white opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-80">
              OK
            </span>
          </div>
        )}
        <Error name={props.name}>
          {(error) => (
            <div className="group">
              <img
                src={warning}
                className="absolute top-[17px] right-[10px] h-[20px] w-[20px] 2xl:top-[20px] 2xl:h-[40px] 2xl:w-[40px]"
                alt="warning"
              />
              <span className="pointer-events-none absolute top-[22px] right-[60px] rounded-[8px] bg-red-500 px-[15px] py-[5px] text-white opacity-0 transition-all duration-300 group-hover:opacity-100 max-2xl:top-[10px]">
                {error}
              </span>
            </div>
          )}
        </Error>
      </div>
    </>
  );
};
