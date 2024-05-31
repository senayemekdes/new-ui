import React, { useEffect, useState,  } from 'react';
import women from '../assets/images/women.png';
import graph from '../assets/images/graph.png'
import lamp from '../assets/images/lamp.png'
import diwali from '../assets/images/diwali.png'
import bfFooter from '../assets/images/pattern.png'
import fb from '../assets/images/fb.ico'
import ig from '../assets/images/instagram.png'
import pi from '../assets/images/pi.ico'
import tw from '../assets/images/tw.ico'
import ham from '../assets/images/ham.png'
import close from '../assets/images/close.png'
const NavBar = () => {
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to validate the URL
  const validateURL = (url) => {
    const urlPattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!urlPattern.test(url);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateURL(url)) {
      setMessage('The URL is correct.');
    } else {
      setMessage('The URL is incorrect.');
    }

};
const sectionStyle = {
  backgroundImage: `url(${bfFooter})`, // Background image
  backgroundSize: 'cover', // Ensures the image covers the whole section
  backgroundRepeat: 'no-repeat', // Prevents the image from repeating
};
const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};
/*function handle click*/
  return (
    <>
      {/*nav container */}
      <nav className='relative container mx-auto p-6'>
        {/*flex container for all items*/}
        <div className="flex items-center justify-between">
          {/*flex container for logo/menu*/}
          <div className="flex items-center space-x-20">
            {/*Logo*/}
            <h1 className='text-grayishViolet text-3xl hover:text-veryDarkViolet font-bold lg:flex'>Shortly</h1>
            {/*Left menu*/}
            <div className="hidden space-x-8 font-bold mt-6 lg:flex align-top">
              <a href="#" className='text-grayishViolet hover:text-veryDarkViolet'>Features</a>
              <a href="#" className='text-grayishViolet hover:text-veryDarkViolet'>Pricing</a>
              <a href="#" className='text-grayishViolet hover:text-veryDarkViolet'>Resource</a>
            </div>
          </div>
          {/* right button menu */}
          <div className='hidden items-center space-x-6 font-bold text-grayisViolet lg:flex'>
            <div className="text-grayishViolet hover:text-veryDarkViolet">Login</div>
            <a href="#" className='px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70'>Sign up</a>
          </div>
        </div>
        {/* hamburger menu */}

          {/* Hamburger button */}
          <div className="md:hidden items-left">
            { !isMenuOpen && (
              <button 
              className='block hamburger lg:hidden focus:outline-none h-8 w-10'
              type='button' 
              onClick={toggleMenu}
              >
              <img src={ham} alt="" />
              </button>
            )}
 { isMenuOpen &&(
  <button 
  className=' block close lg:hidden focus:outline-none h-50 w-10'
  type="button"
  onClick={toggleMenu}
  >
  <img src={close} alt="" />
  </button>

 )}      
  
            </div>
      </nav>
      {/* Mobile menu */}
      { isMenuOpen && (
        <div id="menu" className='absolute p-5 rounded-lg bg-darkViolet left-6 right-6 top-20 z-10 h-25 '>
        <div  className="flex flex-col self-end w-full min-h-screen py-1 pt-10 pl-12 space-y-3 text-lg text-white uppercase font-bold h-10">
      <a href="#" className='w-full text-center hover:text-red-400'>Features</a>
      <a href="#" className=' w-full text-center hover:text-red-400'>Pricing</a>
      <a href="#" className=' w-full text-center hover:text-red-400'>Resource</a>
      <a href="#" className=' w-full text-center pt-6 border-t hover:text-red-400'>Log in</a>
      <a href="#" className=' py-5 px-10 text-xl font-bold text-white bg-cyan rounded-full md:py-2 hover:opacity-70'>Sign up</a>
  
    </div> </div>

      )

      }
    
        

      <section id='hero'>
        {/* hero container */}
        <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
          {/* content container */}
          <div className="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52 lg:p-20">
            <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
              More than just shorter links
            </h1>
            <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
              Build your brand's recognition and get detailed insights on how your links are performing.
            </p>
            <div className="mx-auto lg:mx-0">
              <a href="#" className="py-5 px-10 text-2xl font-bold text-white bg-cyan rounded-full lg:py-4 hover:opacity-70">
                Get started
              </a>
            </div>
          </div>
          {/* image */}
          <div className="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2">
            <img src={women} alt="" />
          </div>
        </div>
      </section>

      {/* short section */}
      <section id="shorten" className='relative bg-gray-100'>
        {/* shorten container */}
        <div className="max-w-4xl mx-auto p-6 space-y-6">
          {/* form */}
          <form onSubmit={handleSubmit} 
          className="relative flex flex-col w-full p-10 mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3">
            <input
              className='flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none'
              onChange={(e) => setUrl(e.target.value)} 
              placeholder='Shorten a link here'
              
              value={url} 
            />
            <button
              type="submit"
              className='px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2'
            >
              Shorten It!
            </button>
          </form>
          {message && <p>{message}</p>}
          {/* Link 1 */}
          <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
            <p className="font-bold text-center text-veryDarkViolet md:text-left">
              http://frontendmentor.io
            </p>
            <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
              <div className="font-bold text-cyan">
                http://rel.ink/k4IKyk
              </div>
              <button className='p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none'>Copy</button>
            </div>
          </div>

          {/* Link 2 */}
          <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
            <p className="font-bold text-center text-veryDarkViolet md:text-left">
              http://twitter.com/frontendmentor
            </p>
            <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
              <div className="font-bold text-cyan">
                http://rel.ink/gx0xp9
              </div>
              <button className='p-2 px-8 text-white bg-veryDarkViolet rounded-lg hover:opacity-70 focus:outline-none'>Copy</button>
            </div>
          </div>

          {/* Link 3 */}
          <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
            <p className="font-bold text-center text-veryDarkViolet md:text-left">
              http://linkedin.com/frontend-mentor
            </p>
            <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
              <div className="font-bold text-cyan">
                http://rel.ink/gob3X9
              </div>
              <button className='p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none'>Copy</button>
            </div>
          </div>

        </div>
      </section>
      <section id="stats" className='py-24 bg-gray-100'>
         <div className="container mx-auto px-3">
          <h2 className="text-4xl mb-6 font-bold text-center">Advanced statics</h2>
          <p className="max-w-xs mx-auto text-center text-gray-400 md:max-w-md">
            Track how your link are performing across the web with our
            advanced statics dashboard
          </p>

         </div>
      </section>
      {/* feature box section */}
      <section id='features' className='pb-32 bg-gray-100'>
      <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
         {/* horizontal line */}
         <div className="hidden absolute top-24 left-16 w-10/12 h-3 bg-cyan md:block"></div>
         {/* vertical line */}
         <div className="absolute w-2 h-full left-1/2 -ml-2 bg-cyan md:hidden"></div>
      {/* box 1 */}

      <div className=' relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3'>
        {/* image  positioning */}
        <div className='absolute -ml-10 left-1/2 -top-10 md:left-16'>
          {/* image  container for background and center */}
          <div className='flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet'>
               <img src={graph} alt="" />
          </div>
        </div>
        <h5 className='pt-6 font-bold text-center text-xl capitalize md:text-left'>Brand Recogonition</h5>
         <p className='text-center text-gray-400 md:text-left'>
   Bost your brand recogonition with each click. generic link don't
   mean a thing. branded link help instil confidence in your content.
         </p>
      </div>

       {/* box 2 */}

       <div className=' relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:mt-8 md:w-1/3'>
        {/* image  positioning */}
        <div className='absolute -ml-10 left-1/2 -top-10 md:left-16'>
          {/* image  container for background and center */}
          <div className='flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet'>
               <img src={lamp} alt="" />
          </div>
        </div>
        <h5 className='pt-6 font-bold text-center text-xl capitalize md:text-left'>Brand Recogonition</h5>
         <p className='text-center text-gray-400 md:text-left'>
   Bost your brand recogonition with each click. generic link don't
   mean a thing. branded link help instil confidence in your content.
         </p>
      </div>

       {/* box 3 */}

       <div className=' relative flex flex-col mt-20 p-6 space-y-6 bg-white rounded-lg md:mt-8 md:w-1/3'>
        {/* image  positioning */}
        <div className='absolute -ml-10 left-1/2 -top-10 md:left-16'>
          {/* image  container for background and center */}
          <div className='flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet'>
               <img src={diwali} alt="" />
          </div>
        </div>
        <h5 className='pt-6 font-bold text-center text-xl capitalize md:text-left'>Brand Recogonition</h5>
         <p className='text-center text-gray-400 md:text-left'>
   Bost your brand recogonition with each click. generic link don't
   mean a thing. branded link help instil confidence in your content.
         </p>
      </div>
      </div>
      </section>

      {/* CTA section */}
      <section style={sectionStyle} className='py-24 bg-darkViolet'>
        <div className="flex flex-col p-2 space-y-6">
          <h5 className='mx-auto space-y-10 text-4xl font-bold text-white'>
            Boost your links today
          </h5>
          <button className='px-10 py-5 mx-auto text-2xl font-bold 
          text-white rounded-full bg-cyanLight hover:bg-cyanLight md:text-base md:py-3 focous:outline-none'>
            Get Started
          </button>
          {/* footer section */}
          <footer className='py-16 bg-veryDarkViolet mt-50 rounded-xl'>
            <div className="container flex flex-col items-center justify-between mx-auto space-y-6 md:flex-row 
            md:space-y-0 md:items-start">
              {/* Logo */}
              <h1 className='text-grayishViolet text-3xl hover:text-cyan font-bold lg:flex'>Shortly</h1>
            {/* Menu container */}
              <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
             {/* Menu 1 */}
            <div className="flex flex-col items-center w-full md:items-start">
              <div className="mb-5 font-bold text-white capitaliz">Features</div>
               <div className="flex flex-col items-center space-y-3 md:items-start">
                <a href="#" className='capitaliz text-grayishViolet hover:text-cyan'>Link shortening</a>
                <a href="#" className='capitaliz text-grayishViolet hover:text-cyan'>Branded link</a>
                <a href="#" className='capitaliz text-grayishViolet hover:text-cyan'>Analaytics</a>

               </div>
            </div>

             {/* Menu 2*/}
             <div className="flex flex-col items-center w-full md:items-start">
              <div className="mb-5 font-bold text-white capitaliz">Resource</div>
               <div className="flex flex-col items-center space-y-3 md:items-start">
                <a href="#" className='capitaliz text-grayishViolet hover:text-cyan'>Blog</a>
                <a href="#" className='capitaliz text-grayishViolet hover:text-cyan'>Developers</a>
                <a href="#" className='capitaliz text-grayishViolet hover:text-cyan'>Support</a>

               </div>
            </div>

             {/* Menu 3 */}
             <div className="flex flex-col items-center w-full md:items-start">
              <div className="mb-5 font-bold text-white capitaliz">Company</div>
               <div className="flex flex-col items-center space-y-3 md:items-start">
                <a href="#" className='capitaliz text-grayishViolet hover:text-cyan'>About</a>
                <a href="#" className='capitaliz text-grayishViolet hover:text-cyan'>Our Team</a>
                <a href="#" className='capitaliz text-grayishViolet hover:text-cyan'>careers</a>
                <a href="#" className='capitaliz text-grayishViolet hover:text-cyan'>Contact us</a>
               </div>
            </div>
            </div>

            {/* social link  */}
            <div className="flex space-x-6 p-6 ">
              <a href="#">  
              <img src={fb} alt="" className='ficon h-10 w-10' />
              </a>
              <a href="#"> 
              <img src={ig} alt="" className=' ficon h-10 w-10'/>
              </a>
              <a href="#"> 
              <img src={tw} alt="" className='ficon h-10 w-10' />
              </a>
              <a href="#"> 
              <img src={pi} alt=""  className='ficon h-10 w-10'/>
              </a>
            </div>
            </div>
          </footer>
        </div>

      </section>
    </>
  );
}

export default NavBar;
