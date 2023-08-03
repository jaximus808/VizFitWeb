'use client'
import Image from 'next/image'

// import FinanceDesign from '@/components/financeDesign'
// import { ThreePieChart } from '@/components/threeChartDesign'
import { Suspense } from 'react'
import Link from 'next/link'
import {FitnessThree} from '@/components/FitnessThree'

import Footer from '@/components/footer';
import Header from '@/components/header'

//bg-[#0A0E28]
export default function Home() {

  const redirectButton = (location:string) =>
  {
    window.location.href = location;
  }

  return (
    <main className="items-center">
      
      <Header/>
      <div className='z-10 w-full text-center   '>
        <div className='bg-[#050505] border-[#DCB13C] grid grid-cols-2  border-b-2 w-screen h-[40rem]'>
            <div className='w-[150vw] relative right-full'>
              <Suspense>
                <FitnessThree  className={""}/>
              </Suspense>
            </div>
            <div className='h-full flex items-center justify-center relative z-20'>
              <div className='text-right pr-12 '>
                <h3 className='leading-snug text-8xl font-bold bg-gradient-to-t from-[#EBD14D] to-[#EB874D] bg-clip-text text-transparent'>
                  Unleash Your True Potential!
                </h3>
                <h3 className='mt-4 text-3xl'>Let VizFit <span className='font-bold'>maximize your workouts</span> and minimize injuries by giving real-time fitness feedback! From weight-lifting technique to workout routines, VizFit will help you reach new limits and beyond! </h3>
                <button onClick={()=>
            {
              redirectButton("register")
            }} className='mt-8 text-2xl font-bold bg-[#EBD14D] text-[black] p-4 rounded-xl hover:bg-[#DFAD55] hover:rounded-lg duration-100 hover:text-[#1c1c1c] '>Get Started for Free!</button>
              </div>
            </div>
        </div>
        <div className='border-[#DCB13C] grid grid-cols-2 bg-[#171717] w-screen h-[35rem]'>
            
            <div className='h-full flex items-center justify-center relative z-20'>
              <div className='text-left p-12'>
                <h3 className='leading-snug text-7xl text-[#eaa80c] font-bold text-white'>
                    Real Time Form Feed Back
                </h3>
                <h3 className='mt-4 text-2xl'>
                VizFit harnesses the power of cutting-edge computer vision with your smartphone's camera and provides real-time feedback on your exercise form, helping you achieve perfect movements and prevent injuries.
                </h3>
              </div>
            </div>
            <div>

            </div>
        </div>
        <div className='border-[#DCB13C] grid grid-cols-2 bg-[#121212] w-screen h-[35rem]'>
            <div>

            </div>
            <div className='h-full flex items-center justify-center relative z-20'>
              <div className='text-left p-12'>
                <h3 className='leading-snug text-6xl text-[#eaa80c] font-bold text-white'>
                    Everything You Need From a Fitness App
                </h3>
                <h3 className='mt-4 text-2xl'>
                  VizFit is everything you need when maximizing the gym. VizFit allows you to choose from different workout plans that suits your goals. VizFit also allows you to track your calories along side your workout plan and automatically calculates your target calorie goal.
                </h3>
              </div>
          </div>
          
          
        </div>
        <div className='border-[#DCB13C] grid grid-cols-2 bg-[#171717] w-screen h-[35rem]'>
            
          <div className='h-full flex items-center justify-center relative z-20'>
            <div className='text-left p-12'>
              <h3 className='leading-snug text-6xl text-[#eaa80c] font-bold text-white'>
                Automatic Budgeting at Your Finger Tips
              </h3>
              <h3 className='mt-4 text-2xl'>
                Tsant Finances will attempt to best categorize each expidenture into its budget category! Allowing you to track your spending and budget effortlessly!
              </h3>
            </div>
          </div>
          <div>

          </div>
            
        </div>
        

        <div className='border-[#DCB13C] bg-gradient-to-br from-[#EBD14D] to-[#EB874D] w-screen h-[30rem]'>
            
          <div className='h-full flex items-center justify-center relative z-20'>
            <div className='text-center p-12'>
              <h3 className='leading-snug text-6xl text-[#171717] font-bold'>
                Ready To Start Your Financial Journey?
              </h3>
              <button className='mt-4 text-4xl font-bold bg-black  px-[16px] py-[24px] rounded-xl duration-100  hover:shadow-2xl hover:text-[#EBD14D] hover:-translate-y-[2px] ' onClick={()=>
              {
                redirectButton("register")
              }}>
                
                  Get Started For Free Now!
              
              </button>
              <h3 className='text-2xl mt-4 text-black  '>or</h3>
              <Link href={"pricing"}>
                <h3 className='underline mt-4 text-2xl text-black'>
                    View Our Different Pricings Here!
                  </h3>
              </Link>
            </div>
          </div>
          
         
            
        </div>
      </div>
      <Footer/>
      
      
      
    </main>
  )
}

// <!-- HTML !-->
// <button class="button-27" role="button">Button 27</button>

/* CSS */
// .button-27 {
//   appearance: none;
//   background-color: #000000;
//   border: 2px solid #1A1A1A;
//   border-radius: 15px;
//   box-sizing: border-box;
//   color: #FFFFFF;
//   cursor: pointer;
//   display: inline-block;
//   font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
//   font-size: 16px;
//   font-weight: 600;
//   line-height: normal;
//   margin: 0;
//   min-height: 60px;
//   min-width: 0;
//   outline: none;
//   padding: 16px 24px;
//   text-align: center;
//   text-decoration: none;
//   transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
//   width: 100%;
//   will-change: transform;
// }

// .button-27:disabled {
//   pointer-events: none;
// }

// .button-27:hover {
//   box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
//   transform: translateY(-2px);
// }

// .button-27:active {
//   box-shadow: none;
//   transform: translateY(0);
// }