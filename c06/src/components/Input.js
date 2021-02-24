import PropTypes from 'prop-types';

const Input = (props) => {
    return (
        <p>
            <input
                type={props.type}
                placeholder={props.placeholder}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                className={`${props.error !== '' ? 'invalid' : 'valid'}`}
            />
            {props.error.length > 0 && <span className='errorMsg'>{props.error}</span>}
            {props.name === 'password' &&
                <button onClick={props.togglePassword} className='eye-button' type='button'>
                    <i className={'fa ' + (props.type === 'password' ? 'fa-eye-slash' : 'fa-eye')} ></i>
                </button>
            }
        </p>
    );
};

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
    togglePassword: PropTypes.func
};

export default Input;