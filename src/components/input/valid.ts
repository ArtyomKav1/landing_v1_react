import * as Yup from "yup";

const regx = {
    email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
};

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(regx.email, 'Некорректный email')
    .email('Некорректный email')
    .required('Обязательное поле'),
  name: Yup.string().required('Обязательное поле'),
  Post: Yup.string().required('Обязательное поле'),
  agree: Yup.boolean().oneOf([true], 'Необходимо согласие'),
});

export const initialValues = { email: '', name: '', Post: '', agree: false, }


