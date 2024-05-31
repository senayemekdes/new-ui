import React from 'react'
import House from '../assets/images/House.png'

const Home = () => {
  return (
    <>
    
    {/*nav container */}
   <nav className='relative container mx-auto p-10'>
      {/*flex container for all items*/}
     <div className="flex items-center justify-between">
         {/*flex container for logo/menu*/}
         <div className="felx items-center space-x-5">
                  {/*Logo*/}
             <h1 className='text-grayishViolet text-3xl hover:text-veryDarkViolet'>Shortly</h1>     
            {/*Left mainu*/}
            <div className="hidden space-x-10 font-bold mt-6 lg:flex">
                <a href="#" className='text-grayishViolet hover:text-veryDarkViolet'>Features</a>
                <a href="#" className='text-grayishViolet hover:text-veryDarkViolet'>Pricing</a>
                <a href="#" className='text-grayishViolet hover:text-veryDarkViolet'>Resource</a>
            </div>
         </div>
{/* right button mainu*/}
   <div className='hidden items-center space-x-6 font-bold text-grayisViolet lg:flex'>
     
   </div>

     </div>
   </nav>
    </>
  )
}

export default Home