import React from "react";
import ResultCard from "./ResultCard";
import Projects from "./Projects";

function Mainbody() {
  const jsondata=[
    {
      "image": "mojo.jpg",
      "name": " Mojo Tech",
      "link": " https://mojowebtech.com/ ",
      "heading": "Web Developer Intern (May 2023 - Present)...",
      "content": "Worked On Software as a Service Projects using Facebook/Shopify/Google/OpenAI Apis to deliver Products.Worked on the official website of company..."
    },
    {
      "image": "sdc.jpg",
      "name": "Software Development Cell ,USS",
      "link": "https://example.com/profile/jane-smith",
      "heading": "Lead Developer (May 2022 - present)..." ,
      "content": "Project lead of Attendance Management App & Website for our university which resulted in Digitalizing attendance-taking procedure and reducing paperwork by 85%. Maintained and significantly improved the performance of the Online Student Feedback System for our university by promptly addressing 95% of reported issues and implementing iterative enhancements."
    },
    {
      "image": "acm1.jpg",
      "name": "GGSIP University USS ACM Student Chapter ",
      "link": "https://usict.acm.org/",
      "heading": "Developer and Vice Lead-Devsource (Sep 2022 - Present)..",
      "content": "Successfully developed ACM’s personalized Profile Management Software, streamlining the record-keeping process for all team members.Vice Lead for the DevSource Club under USS ACM to mentor and guide college students into Development. Collaborated on enhancing the official USS ACM website using React.js, successfully integrating new features to improve user experience and functionality"
    }
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

      <div className="w-[36vw] md:w-[90vw] md:ml-[4%] ml-[1vw]  mt-[7vh] md:mt-[3vh] flex  flex-col">
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
              <svg
                focusable="false"
                className="border-2 border-black-600 rounded-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
              </svg>
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
            <b>Frontend Development : </b>React.js,TailwindCSS,Redux,Flutter
          </div>
          
          <div className="pt-[1vh] font">
            <b>Backend Development : </b>Node.js,Express.js,Flask,GoLang,Git
          </div>
          <br></br>
        </div>
        <p className="text-md font font-medium">Profiles</p>
        <hr className=" w-[screen]  mt-[1vh] dark:bg-gray-800  bg-gray-800"></hr>
        <div className="mt-[1vh] ml-5">
        <ul class="flex flex-row md:items-center gap-[2vw] md:gap-2 ">
          <li className="pt-3">
          <img
              class="w-10 rounded  md:pl-1 md:w-8 cursor-pointer"
              src="linkedin.png"
              alt="..."
            ></img>
          </li>
          <li className="items-center pt-3">
          <img
              class="w-10 rounded  md:pl-1 md:w-8 cursor-pointer"
              src="twiter.png"
              alt="..."
            ></img>
          </li>
          <li className="items-center pt-3">
            <img
              class="w-10 rounded  md:pl-1 md:w-8 cursor-pointer"
              src="insta.png"
              alt="..."
            ></img>
          </li>
          <li className="items-center pt-3">
            <img
              class="w-10 rounded  md:pl-1 md:w-8 cursor-pointer"
              src="github.png"
              alt="..."
            ></img>
          </li>
          <li className="items-center pt-3">
            <img
              class="w-12 rounded  md:pl-1 md:w-8 cursor-pointer"
              src="gmail.png"
              alt="..."
            ></img>
          </li>
        </ul>
        </div>
       
      </div>
    </div>
  );
}

export default Mainbody;
