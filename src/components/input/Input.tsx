import { Form, Formik, } from 'formik';
import { ItemInput } from "./ItemInput"
import { ItemCheckBox } from "./ItemCheckBox"
import { initialValues, validationSchema } from './valid';

function Input() {


    return (
        <>
            <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values)
                    setSubmitting(false);
                    // props.setConfirm(true)
                }}
            >
                {({ values,
                    handleChange,
                    handleBlur,
                    // handleSubmit,
                    // isSubmitting, 
                }) => (
                    <Form>
                        <div className='w-full space-y-6  flex flex-col  justify-center pb-[50px]'>

                            <ItemInput name={"name"} placeholder='ФИО' />
                            <ItemInput name={"email"} placeholder='email' />
                            <ItemInput name={"Post"} placeholder='Должность' />
                            <ItemCheckBox name={"agree"} value={values.agree} handleChange={handleChange} handleBlur={handleBlur} />
                            <button type="submit" className='px-[40px] rounded-[8px] py-[22.5px] bg-[#FFBE3F] text-[#0D0628] text-[27px] leading-[39px]'>
                                Отправить
                            </button>

                        </div>
                    </Form >
                )}
            </Formik >
        </>
    )
}
export default Input









