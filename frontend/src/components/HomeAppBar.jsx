import { Button } from "../components/Button"
import { useNavigate } from "react-router-dom"

export const HomeAppBar = () => {
    const navigate = useNavigate();
    return <div className="shadow h-14 flex justify-around">
        <div className="flex flex-col justify-center h-full ml-4 text-lg">
                CaShLesS WaLLeT
            </div>
        <div className="flex gap-5 justify-center items-center align-center pt-2">
    
         <Button onClick={()=>{
             navigate("/signup")
         }} label={"signup"}/>
        <Button 
        onClick={()=>{
            navigate("/signin")
        }}
        label={"signin"}/>
        </div>
    </div>
}