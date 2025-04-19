import * as Yup from "yup";

const regx = {
    name: /^[а-яА-Яa-zA-Z]{2,20}$/,
    email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
};

export const validationSchema = Yup.object().shape({
    email: Yup.string()
        .matches(regx.email, "Некорректный email")
        .email("Некорректный email")
        .required("Обязательное поле"),
    name: Yup.string()
        .matches(regx.name, "Кириллица или латиница (2-20 символов)")
        .required("Обязательное поле"),
    Post: Yup.string()
        .matches(regx.name, "Кириллица или латиница (2-20 символов)")
        .required("Обязательное поле"),
    agree: Yup.boolean()
        .required("Обязательное поле")
});

export const initialValues = { email: '', name: '', Post: '', agree: false, }


