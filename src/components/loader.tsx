
type Props = {
  message:string,
}

export const Loader = ({message}:Props)=>{
  
  return(
    <>
      <div>
  <div className="bg-gray-100 w-fit p-3 ml-3 rounded my-1 flex flex-col max-w-[96%]">
    <span className="font-bold text-xs w-fit h-fit">user</span>
  <span className="">{message}</span>
  </div>
  
  <div className="bg-gray-100 w-fit p-3 ml-3 rounded my-1 flex flex-col max-w-[96%]">
    <span className="font-bold text-xs w-fit h-fit">assistant</span>
  <span className="animate-pulse">Loading...</span>
  </div>
  </div>
    </>
    )
}