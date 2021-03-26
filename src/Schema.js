import * as yup from 'yup'

const Schema = yup.object().shape({
    firstname: yup.string()
    .trim()
    .required('name is required, please fill out.')
    .min(1, 'name must be 1 character long'),
    lastname: yup.string()
    .trim()
    .required('name is required, please fill out.')
    .min(1, 'name must be 1 character long'),
    email: yup.string()
    .email('Must be a valid email address')
    .required('Email is required'),

    role: yup.string()
    .oneOf(['ugly', 'cute', 'al pacino', 'miley cyrus'], 'Role is required'),
})

export default Schema