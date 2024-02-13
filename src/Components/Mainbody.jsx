import React from "react";
import ResultCard from "./ResultCard";
import Projects from "./Projects";

function Mainbody() {
  const jsondata=[
    {
      "image": "mojo.jpg",
      "name": " Mojo Tech",
      "link": " https://mojowebtech.com/ ",
      "heading": "Web Developer Intern (June 2023 - January 2024)...",
      "content": "Excelled in Software as a Service projects, skillfully leveraging Facebook, Shopify, Google, and OpenAI APIs to deliver exceptional products. Instrumental in crafting the official company website, resulting in a % increase in user engagement and a driving significant business growth and customer satisfaction..."
    },
    {
      "image": "sdc.jpg",
      "name": "Software Development Cell ,USS",
      "link": "https://sdc-usict.github.io/",
      "heading": "Lead Developer (May 2022 - December 2023)..." ,
      "content": "Project lead of Attendance Management App & Website for our university which resulted in Digitalizing attendance-taking procedure and reducing paperwork by 85%. Maintained and significantly improved the performance of the Online Student Feedback System for our university by promptly addressing 95% of reported issues and implementing iterative enhancements..."
    },
    
  ]
  
  return (
    <div className="flex flex-row md:flex-col-reverse md:mb-3 mb-5 w-[100vw]">
      <div className="w-[62vw] md:w-[100vw]">
      {jsondata.map((item, index) => (
        <ResultCard
          key={index}
          image={item.image}
          name={item.name}
          link={item.link}
          heading={item.heading}
          content={item.content}
        />
      ))}
      <Projects/>
      </div>

    

      <div class="vl ml-[1vw] md:hidden"></div>

      <div className="w-[36vw] md:w-[90vw] md:ml-[4%] ml-[1vw]  mt-[7vh] md:mt-[3.5vh] flex  flex-col">
        <div>
          <div className="flex flex-row ">
            <div className="pt-2 ">
              <img
                class="w-11 rounded  md:pl-1 md:w-8 cursor-pointer"
                src="ayush.jpeg"
                alt="..."
              ></img>
            </div>
            <div className="flex flex-col ml-3 ">
              <div className="text-3xl md:text-2xl sm:text-xl nma:text-lg  nmc:text-base font">Ayush Gupta</div>
              <div className="text-sm text-zinc-400	 nma:text-sm nmc:text-xs font">Full Stack Developer</div>
            </div>
            <div className="w-8 ml-[30%] pt-2 ">
            <a href="https://linktr.ee/NovusAyush" target="blank"> <svg
                focusable="false"
                className="border-2 border-black-600 rounded-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
              </svg>
              </a>
            </div>
           
          </div>
        </div>
        <hr className=" w-[screen]  mt-[3vh] dark:bg-gray-700  bg-gray-700"></hr>
        <div className="mt-[3vh] text-[0.9rem] md:text-[0.8rem]  nmd:text-[0.7rem] ">
          <div className="font">
            <b>University : </b> Guru Gobind Singh Indraprastha University
          </div>
         
          <div className="pt-[1vh] font">
            {" "}
            <b>Course : </b> Bachelor of Technology (2021 - 2025)
          </div>
          
          <div className="pt-[1vh] font">
            <b>Majors : </b> - Artificial Intelligence and Data Science
          </div>
          <br></br>
        </div>
        
        <p className="text-md font font-medium	">Skills Summary</p>
        <hr className=" w-[screen]  mt-[1vh] dark:bg-gray-800  bg-gray-800"></hr>
        <div className="mt-[2vh] text-[0.9rem] md:text-[0.8rem] nmd:text-[0.7rem]">
          <div className="font">
            <b>Programming Languages : </b>C,Java,Javascript,TypeScript,Python
          </div>
         
          <div className="pt-[1vh] font">
            {" "}
            <b>Frontend Development : </b>Next.js,React.js,TailwindCSS,Redux,Flutter
          </div>
          
          <div className="pt-[1vh] font">
            <b>Backend Development : </b>Node.js,Typescript,GraphQl,Express.js,Cargo,GoLang,Git,Github
          </div>
          <div className="pt-[1vh] font">
            <b>DevOps and Cloud : </b>CI/CD,Jenkins,Kubernetes,Docker,AWS,GCP
          </div>
          <br></br>
        </div>
        <p className="text-md font font-medium">Profiles</p>
        <hr className=" w-[screen]  mt-[1vh] dark:bg-gray-800  bg-gray-800"></hr>
        <div className="mt-[1vh] ml-5">
        <ul class="flex flex-row md:items-center gap-[2vw] md:gap-2 ">
          <li className="pt-3">
          <a href="https://www.linkedin.com/in/ayush-gupta-253092227/" target="blank">
          <img
              class="w-10 rounded  md:pl-1 md:w-8 cursor-pointer"
              src="linkedin.png"
              alt="..."
            ></img>
            </a>
          </li>
          <li className="items-center pt-3">
          <a href="https://twitter.com/Ayush3241" target="blank">
          <img
              class="w-10 rounded  md:pl-1 md:w-8 cursor-pointer"
              src="twiter.png"
              alt="..."
            ></img>
            </a>
          </li>
          <li className="items-center pt-3">
          <a href="https://www.instagram.com/_ayush_ftw/" target="blank">
            <img
              class="w-10 rounded  md:pl-1 md:w-8 cursor-pointer"
              src="insta.png"
              alt="..."
            ></img>
            </a>
          </li>
          <li className="items-center pt-3">
          <a href="https://github.com/ayushgupta4002" target="blank">
            <img
              class="w-10 rounded  md:pl-1 md:w-8 cursor-pointer"
              src="github.png"
              alt="..."
            ></img>
            </a>
          </li>
          <li className="items-center pt-3">
          <a href="mailto:ayush4002gupta@gmail.com" target="blank">
            <img
              class="w-12 rounded  md:pl-1 md:w-8 cursor-pointer"
              src="gmail.png"
              alt="..."
            ></img>
            </a>
          </li>
        </ul>
        </div>
       
      </div>
    </div>
  );
}

export default Mainbody;
