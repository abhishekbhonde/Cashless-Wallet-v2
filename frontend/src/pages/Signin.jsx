import { useNavigate } from "react-router-dom"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { HomeAppBar } from "../components/HomeAppBar"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios"
import { useState } from "react"
export const Signin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  return <div>
    <HomeAppBar/>
    <div className="bg-slate-900 h-screen flex justify-center">
      <div className="flex flex-col justify-center gap-5">
        <div className="rounded-lg hover:shadow-lg flex gap-2 flex-col  hover:shadow-white bg-white w-[450px]  text-center p-10 h-[450px] px-4">
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox onChange={(e)=>{
            setUsername(e.target.value)
          }} placeholder="abc@gmail.com" label={"Email"} />
          <InputBox onChange={(e)=>{
            setPassword(e.target.value)
          }} placeholder="password" label={"Password"} />
          <div className="pt-4">
            <Button onClick={async()=>{
              await axios.post("http://localhost:3002/api/v1/user/signin", JSON.stringify({
                username,
                password
              }), {
                headers: {
                  "Content-Type": "application/json"
                }
              });
              navigate("/dashboard")
            }} 
            label={"Sign in"} />
          </div>
          <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
        </div>
      </div>
    </div>
  </div>
}