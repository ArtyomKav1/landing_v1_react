import { Field, ErrorMessage as Error, useField } from 'formik';

import warning from '../../assets/warning.png';

type ItemCheckBoxProps = {
  name: string;
};

export const ItemCheckBox = (props: ItemCheckBoxProps) => {
  const [field, meta] = useField(props.name);

  return (
    <>
      <div className="relative inline-flex items-center max-[514px]:items-start">
        <Field
          className="peer absolute bottom-[5px] block h-[24px] w-[24px] appearance-none rounded-[5px] border-black bg-transparent pt-[10px] text-[#FFFFFF] focus:ring-0 focus:outline-none"
          type="checkbox"
          name={props.name}
        />
        <div className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-[4px] border border-[#3A3A3A] bg-[#171717]">
          {field.value && <div className="h-[14px] w-[14px] rounded-[4px] bg-white/50" />}
        </div>
        <div className="ml-2 cursor-pointer text-[16px] text-white xl:text-[18px] 2xl:text-[27px]">
          <p>
            Я согласен c{' '}
            <a
              href="https://ya.ru/?npr=1"
              target="_blank"
              rel="noopener noreferrer"
              className="underline "
            >
              условиями обработки персональных данных
            </a>
          </p>
        </div>

        {meta.touched && meta.error && (
          <div className="group ml-2">
            <img
              src={warning}
              className="absolute top-0 right-[10px] h-[20px] w-[20px] 2xl:h-[40px] 2xl:w-[40px]"
              alt="warning"
            />
            <Error name={props.name}>
              {(error) => (
                <span className="pointer-events-none absolute top-1/2 right-[60px] -translate-y-1/2 rounded-[8px] bg-red-500 px-[15px] py-[5px] whitespace-nowrap text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                  {error}
                </span>
              )}
            </Error>
          </div>
        )}
      </div>
    </>
  );
};
