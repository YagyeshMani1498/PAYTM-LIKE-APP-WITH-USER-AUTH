/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

export function BottomWarning({textValue , linkText ,to}){
    return (
        <>
        <p className="bottom-warning">{textValue}
        <Link className="link" to={to}>{linkText}</Link>
        </p>
        </>
    )
}