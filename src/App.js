import './App.css';
import { Helmet } from "react-helmet";

import Footer from './Components/Footer';
import './index.css';
import './Pages/Home'
import Home from './Pages/Home';
function App() {
  return (
    <div className='App' >
     <Helmet>
        <title>Ayush Gupta</title>
      </Helmet>
    <Home/>
    <Footer/>
   
  </div>
  );
}

export default App;
