/* eslint-disable react/prop-types */
export function ButtonComponent({label,onClick}){
    return (
        <>
        <button onClick={onClick} type="button" className="btn">{label}</button>
        </>
    )
}