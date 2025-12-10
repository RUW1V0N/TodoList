function InputForm(props){
    const{
        className ='',
        autocompled = 'off',
        placeholder = '',
        type = 'text',
        checked,
    } = props
    
    return(
        <input 
            className = {className}
            autocompled = {autocompled}
            placeholder = {placeholder}
            type = {type}
            checked = {checked}
        />
    );
}

export default InputForm