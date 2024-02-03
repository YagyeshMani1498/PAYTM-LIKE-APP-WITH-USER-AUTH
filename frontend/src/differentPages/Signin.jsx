import { BottomWarning } from "../components/BottomWarning";
import { ButtonComponent } from "../components/ButtonComponent";
import { Heading } from "../components/HeadingComponent";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export function Singin(){
    return (
        <>
        <div className="sign-up-in-box">
            <Heading textValue="Sign in"/>
            <SubHeading textValue="Enter your credentials to access your account"/>
            <InputBox label="Username" placeholder="xyz123@gmail.com" id="username"/>
            <InputBox label="Password" placeholder="123456" id="password"/>
            <ButtonComponent label={"Sign in"} onClick={(e)=>console.log(e.target)}/>
            <BottomWarning textValue={" Don't have an account? "} linkText={"Sign up"} to={"/signup"}/>
        </div>
        </>
    )
}