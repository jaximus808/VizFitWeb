import Image from 'next/image'
import workoutImage1 from '../src/images/AIFormTrack_1.png';
import deadliftMuscleAct from '../src/images/Deadlift_Muscle_Activation.png';
import Link from 'next/link';

function TitlePage()
{
  return(
    <div className='w-[100%] border-solid h-15  p-5 bg-[#0b0e10]  '>
      <div className='w-full grid grid-cols-3 justify-center' >
        <p className='col-start-1 text-2xl text-left  font-raleway'>Tsant</p>
        <p className='col-start-2 text-center text-3xl font-bold font-raleway'>FormFit A.I.</p>
        <div className='text-2xl  col-start-3 text-center '>
          <div className=' grid grid-cols-3 relative left-1/2 translate-x-[-30%]  w-4/5' >
            <a className=' ' href='/info'>Info</a>
            <a className=''href='/info'>About Us</a>
            <a className=''href='/info'>Pricing</a>
          </div>
        </div>
      </div>
      
    </div>
  )
}

function Section1()
{
  return (
    <div className="z-10 h-auto w-4/5 h-4/5 p-24 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-center ">
    <div className='text-5xl font-raleway font-bold'>
      Use Computer Vision to Maximize Your Workout
    </div>
    <div className='mt-20 text-2xl font-raleway font-bold'>
       If you are new and looking into workouting the right way, let FormFit A.I. be there for you. Become stronger and optimize your gains with cutting edge A.I. that offers form tracking software and workout program suggestions to achieve your goals.
    </div>
    <div className='mt-20 text-2xl font-raleway font-bold'>
      FormFit AI uses computer vision technology to track your form as you exercise and then gives feedback to improve and maximize your gains.
    </div>
    <div className='mt-20 text-2xl font-raleway font-bold grid grid-cols-2 '>
      <div>
        <button className='bg-[#3c7de6] col-start-1 p-5 rounded-xl'>
          Join Now!
        </button>
      </div>
      <div>
        <button className='bg-white text-black col-start-1 p-5 rounded-xl'>
          Learn More
        </button>
        
      </div>
    </div>
  </div>
  )
}

function MultiplyYourProgress()
{
  return (
    <div className='border-t-[1px] border-opacity-50 w-full p-24 bg-[#0b0e10]'>
        <div className='grid grid-cols-2 gap-x-8'>

          <div className='col-start-1 bg-[rgba(54,69,79,0.4)] p-8 rounded-xl'>
            <Image
              src={deadliftMuscleAct}
              alt='deadlifting form'
              className='relative left-1/2 top-1/2 translate-x-[-62.5%] translate-y-[-50%]'
            />
          </div>

         
          <div className='col-start-2 text-center '>
            <div className='relative top-1/2 translate-y-[-50%]'>
              <h1 className='text-5xl leading-tight font-bold'>Let FormFit A.I. help <span  className='px-2 rounded-xl  bg-blue-500'>Fully Reduce Injuries</span> and <span className='px-2 rounded-xl  bg-blue-500'>Target Correct Muscles Areas</span> with Effective Form</h1>
              <p className='mt-4 text-xl'>Learn the different ways how proper form boosts your growth <Link
                href={'./info'}
                className='underline'
              >here</Link></p>
            </div>
            
          </div>

        </div>
      </div>
  )
}



export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between ">
      <TitlePage/>
      <div className='h-screen overflow-hidden'>
        <Image
            src={workoutImage1}
            alt='workoutImage'
            className='object-cover brightness-[0.5]'
          />
      </div>
      <MultiplyYourProgress/>
      

      <Section1></Section1>

     
    </main>
  )
}
