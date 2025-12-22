export function InputForm(props){
    const{
        className ='',
        name= '',
        autoComplete = 'off',
        placeholder = '',
        type = 'text',
        value,
        onChange,
        checked,
    } = props
    
    return(
        <input 
            className = {className}
            name = {name}
            autoComplete = {autoComplete}
            placeholder = {placeholder}
            type = {type}
            value={value}
            onChange={onChange}
            checked= {checked}
        />
    );
}