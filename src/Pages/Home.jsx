import React from 'react';
import './Home.css';
import Navbar from '../Components/Navbar';
import Mainbar from '../Components/Mainbar';
import Mainbody from '../Components/Mainbody';

import { Helmet } from "react-helmet";


function Home() {

    return (
        <div className='flex flex-col'>
        <Helmet>
        <title>Ayush Gupta</title>
      </Helmet>
      <Navbar/>
     
      <div className='mt-2 ml-[12%] md:ml-[5%] text-zinc-500 font-[450]	sm:text-xs text-sm'>
        About O(nlogn) results (0.46 seconds)
      </div>
      <Mainbar/>
      {/* <Gallery/> */}
<Mainbody/>
      


        </div>
        
    );
}

export default Home;
