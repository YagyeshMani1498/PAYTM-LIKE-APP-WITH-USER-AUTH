import { BottomWarning } from "../components/BottomWarning";
import { ButtonComponent } from "../components/ButtonComponent";
import { Heading } from "../components/HeadingComponent";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export function Singup(){
    return (
        <>
        <div className="sign-up-in-box">
            <Heading textValue="Sign up"/>
            <SubHeading textValue="Enter your information to create an account"/>
            <InputBox label="First Name" placeholder="Nihal" id="firstName"/>
            <InputBox label="Last Name" placeholder="Tripathi" id="lastName"/>
            <InputBox label="Username" placeholder="xyz123@gmail.com" id="username"/>
            <InputBox label="Password" placeholder="123456" id="password"/>
            <ButtonComponent label={"Sign up"} onClick={(e)=>console.log(e.target)}/>
            <BottomWarning textValue={" Already have an account? "} linkText={"Sign in"} to={"/signin"}/>
        </div>
        </>
    )
}