import React from 'react'

function Gallery() {
  return (
    <div className='flex flex-row ml-[11%] mt-[1vh] '>

        <div className='pl-[1%] rounded flex flex-row'>
          <div className=' '>

          <img
              class="w-5  md:pl-1 md:w-8 cursor-pointer"
              src="4.jpg"
              alt="..."
            ></img>
          </div>
          <div className='flex flex-col'>
           <div> <img
              class="w-5  md:pl-1 md:w-8 cursor-pointer"
              src="4.jpg"
              alt="..."
            ></img></div>
           <div> <img
              class="w-5  md:pl-1 md:w-8 cursor-pointer"
              src="4.jpg"
              alt="..."
            ></img></div>
            
          </div>
            
        </div>

    </div>
  )
}

export default Gallery