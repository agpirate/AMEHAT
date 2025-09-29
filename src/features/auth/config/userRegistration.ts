import { RegAuthForm } from '../types/RegAuthForms';

export const RegLoginForm : RegAuthForm['login'] ={
        email: '',
        password: '',
        rememberMe: false,
        errors: {}
}


export const RegSignupForm : RegAuthForm['signup']  ={
    email: 'saytotsegay@gmail.com',
    username: 'sayto',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
    errors: {}
}

export const RegResetForm : RegAuthForm['reset']  ={
    email: '',
    errors: {}
}

export const confirmationForm ={
    email: '',
    password: '',
    rememberMe: false,
    errors: {}
}
