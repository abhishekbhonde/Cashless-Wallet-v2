
export const HomeAppBar = () => {
    return <div className="shadow h-14 flex justify-between">
        <div className="flex flex-col justify-center h-full ml-4">
            PayTM App
        </div>
        <div className="flex gap-5 justify-center items-center">
        <button className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2  bg-green-500 text-white">
            signup 
        </button>
        <button className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2  bg-green-500 text-white">
            signin 
        </button>
        </div>
    </div>
}