// vendor imports
import {useState} from 'react';
// components
import Input from '../ui/Input';

const Login = () => {
    const [form, setForm] = useState({
        username: '',
        password: ''
    });

    return (
        <div id='login'>
            <form>
                <Input type='text' placeholder='username' name='username'/>
                <Input type='password' placeholder='password' name='password'/>
            </form>
        </div>
    )
};

export default Login;