/* eslint-disable react/prop-types */
export function InputBox({label,placeholder ,id}){
    const value = label==="Username"?"email":label==="Password"?'password':"text";
    return (
        <>
        <div className="input-box">
            <label htmlFor={id} className="label">{label}</label>
            <input type={value} name={id} id={id} placeholder={placeholder} className="input-field"/>
        </div>
        </>
    )
}