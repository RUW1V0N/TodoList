function InputForm(props){
    const{
        className ='',
        autocompled = 'off',
        placeholder = '',
        type = 'text',
        value,
        onChange,
        checked,
    } = props
    
    return(
        <input 
            className = {className}
            autocompled = {autocompled}
            placeholder = {placeholder}
            type = {type}
            value={value}
            onChange={onChange}
            checked= {checked}
        />
    );
}

export default InputForm