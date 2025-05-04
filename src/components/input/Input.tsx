import { Form, Formik, } from 'formik';
import { ItemInput } from "./ItemInput"
import { ItemCheckBox } from "./ItemCheckBox"
import { initialValues, validationSchema } from './valid';

function Input() {

    async function postData(data: { email: string, name: string, Post: string, agree: boolean, }) {
        try {
            const response = await fetch("http://localhost:3000/v1", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data), 
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();  
            console.log('Success:', result);
            return result;
        } catch (error) {
            // console.error('Error:', error.message);
            throw error;  
        }
    }

    return (
        <>
            <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values)
                    postData(values)
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









