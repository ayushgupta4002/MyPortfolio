import React from 'react';
import { useState, useEffect } from 'react';
import './Home.css';
import Navbar from '../Components/Navbar';
import Mainbar from '../Components/Mainbar';
import Mainbody from '../Components/Mainbody';
import Gallery from '../Components/Gallery';
import ResultCard from '../Components/ResultCard';
import Footer from '../Components/Footer';


function Home() {
    const [login, setLogin] = useState(true);

    return (
        <div className='flex flex-col'>
      <Navbar/>
     
      <div className='mt-2 ml-[12%] text-zinc-500 font-[450]	 text-sm'>
        About O(nlogn) results (0.46 seconds)
      </div>
      <Mainbar/>
      {/* <Gallery/> */}
<Mainbody/>
<Footer/>
      


        </div>
        
    );
}

export default Home;
