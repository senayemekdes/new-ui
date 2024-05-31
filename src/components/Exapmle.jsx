import React, { useEffect, useRef } from 'react';
import House from '../assets/images/House.png';
import women from '../assets/images/women.png';

const NavBar = () => {
  const linkInputRef = useRef(null);
  const linkFormRef = useRef(null);
  const errMsgRef = useRef(null);

  useEffect(() => {
    const formsubmit = (e) => {
      e.preventDefault();
      if (linkInputRef.current) {
        console.log(linkInputRef.current.value);
      }
    };

    if (linkFormRef.current) {
      linkFormRef.current.addEventListener('submit', formsubmit);
    }

    // Cleanup the event listener on component unmount
    return () => {
      if (linkFormRef.current) {
        linkFormRef.current.removeEventListener('submit', formsubmit);
      }
    };
  }, []);

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
        {/* mobile menu */}
      </nav>

      <section id='hero'>
        {/* hero container */}
        <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
          {/* content container */}
          <div className="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
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
          <form ref={linkFormRef} id="link-form" className="relative flex flex-col w-full p-10 mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3">
            <input
              ref={linkInputRef}
              id='link-input'
              className='flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none'
              placeholder='Shorten a link here'
              type="text"
            />
            <button
              type='submit'
              className='px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2'
            >
              Shorten It!
            </button>

            {/* error message */}
            <div ref={errMsgRef} id="err-msg" className="absolute left-7 bottom-3 text-red text-sm italic">
            </div>
          </form>
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
    </>
  );
}

export default NavBar;
