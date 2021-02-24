import { useState } from 'react';
import Input from './Input';

const Login = () => {
    const [form, setForm] = useState({
        username: '',
        usernameErrorMsg: '',
        password: '',
        passwordErrorMsg: '',
        fieldType: 'password'
    });

    const handleChange = (event) => {
        setForm(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        });
    };

    const changeFieldType = () => {
        setForm(prevState => {
            return {
                ...prevState,
                fieldType: prevState.fieldType === 'password' ? 'text' : 'password'
            }
        });
    };

    const submitForm = (event) => {
        event.preventDefault();
        setForm(prevState => {
            return {
                ...prevState,
                usernameErrorMsg: '',
                passwordErrorMsg: '',
            }
        });
        if(validateUsername() && validatePassword()) {
            console.table(form);
        } else {
            console.error('Invalid form input.');
        }
    };

    const validateUsername = () => {
        if (form.username === '') {
            setForm(prevState => {
                return {
                    ...prevState,
                    usernameErrorMsg: 'Username is required.'
                }
            });
            return false;
        }

        if (form.username.length < 2) {
            setForm(prevState => {
                return {
                    ...prevState,
                    usernameErrorMsg: 'Username should contain minimum 2 characters.'
                }
            });
            return false;
        }
        return true;
    };

    const validatePassword = () => {
        if (form.password === '') {
            setForm(prevState => {
                return {
                    ...prevState,
                    passwordErrorMsg: 'Password is required.'
                }
            });
            return false;
        }

        if (form.password.length < 2) {
            setForm(prevState => {
                return {
                    ...prevState,
                    passwordErrorMsg: 'Password should contain minimum 2 characters.'
                }
            });
            return false;
        }
        return true;
    }

    return (
        <div id='login'>
            <form onSubmit={submitForm}>
                <Input
                    type={'text'}
                    name={'username'}
                    placeholder={'Username'}
                    value={form.username}
                    onChange={handleChange}
                    error={form.usernameErrorMsg}
                />
                <Input
                    type={form.fieldType}
                    name={'password'}
                    placeholder={'Password'}
                    value={form.password}
                    onChange={handleChange}
                    togglePassword={changeFieldType}
                    error={form.passwordErrorMsg}
                />
                <button className='action-button'>Sign In</button>
            </form>
        </div>
    );
};

export default Login;