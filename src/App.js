import React, { Fragment } from 'react'
// Import Asset
import imgHeader from './images/image-header-desktop.jpg'

function App() {
  return (
    <Fragment>
      <div className='w-full h-full min-h-screen flex justify-center items-center bg-main-bg text-white font-inter'>
        <div className='flex flex-col-reverse w-12/12 md:flex-row justify-between bg-card-bg rounded-lg m-4'>
          <div
            className='w-full md:w-6/12 text-center md:text-left'
            style={{
              padding: '30px',
            }}
          >
            <h1 className=' font-700 text-lg md:text-4xl'>
              Get <span className='text-accent'>insights</span> that help your
              business grow.
            </h1>
            <p className='text-main-p text-fsz font-400 mt-6 opacity-80'>
              Discoverthe benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
            <div className='flex w-full '>
              <div className='w-full flex gap-2 flex-col md:flex-row md:flex-wrap mt-12 md:mt-24'>
                <div className='font-inter text-white flex-1'>
                  <h1 className='font-700 text-xl uppercase'>10k+</h1>
                  <p
                    className='font-lexend-deca font-400 uppercase'
                    style={{
                      fontSize: '12px',
                      letterSpacing: '1px',
                    }}
                  >
                    COMPANIES
                  </p>
                </div>
                <div className='font-inter text-white flex-1'>
                  <h1 className='font-700 text-xl uppercase'>314</h1>
                  <p
                    className='font-lexend-deca font-400 uppercase'
                    style={{
                      fontSize: '12px',
                      letterSpacing: '1px',
                    }}
                  >
                    COMPANIES
                  </p>
                </div>
                <div className='font-inter text-white flex-1'>
                  <h1 className='font-700 text-xl uppercase'>12M+</h1>
                  <p
                    className='font-lexend-deca font-400 uppercase'
                    style={{
                      fontSize: '12px',
                      letterSpacing: '1px',
                    }}
                  >
                    COMPANIES
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className='relative w-full md:w-6/12 h-full md:h-0'
            style={{
              backgroundImage: `url(${imgHeader})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <div className='absolute w-full h-full top-0 bg-accent opacity-70'></div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App
