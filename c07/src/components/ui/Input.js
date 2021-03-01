const Input = (props) => {
    return (
        <p>
            <input
                type={props.type}
                placeholder={props.placeholder}
                name={props.name}
                /* value={ }
                onChange={ } */
            />
        </p>
    );
};

// prop types

export default Input;