import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { HomeAppBar } from "../components/HomeAppBar"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"

export const Signin = () => {
    return <div>
      <HomeAppBar/>
       <div className="bg-slate-900 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg hover:shadow-lg  hover:shadow-white bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox placeholder="abc@gmail.com" label={"Email"} />
        <InputBox placeholder="password" label={"Password"} />
        <div className="pt-4">
          <Button label={"Sign in"} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
    </div>
}