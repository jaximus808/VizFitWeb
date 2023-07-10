import Image from 'next/image'

function TitlePage()
{
  return(
    <div className='w-[100%] border-solid h-15 border-b-[1px] border-opacity-50 border-white bg-[#0b0e10] p-5  '>
      <div className='grid grid-cols-3'>
        <p className='col-start-2 text-center text-3xl font-raleway'>FormFit AI</p>
      </div>
      
    </div>
  )
}


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <TitlePage/>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        
      </div>
    </main>
  )
}
