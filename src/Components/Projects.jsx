import React from "react";

function Projects() {
  return (
    <div className="ml-[18.5%]">
      <div className="flex flex-row mt-[5vh]">
        <div className="flex-col ">
          <div className="text-2xl font">Projects</div>
          <div className="text-md text-zinc-500 mt-1 font	">
            Showing Results For Projects{" "}
          </div>
        </div>
      </div>
      <hr className="w-[98%] ml-[1%] mt-[3vh] dark:bg-gray-800  bg-gray-800"></hr>
      <div className="flex flex-row h-[36vh] w-[95%] mt-[3vh] mr-[1vw]">
        <div className="w-[48%]">
          <div className="flex flex-col mr-2">
            <div className="30%">
              <img
                class=" w-[100%] p-2 rounded cursor-pointer"
                src="tetstify.png"
                alt="..."
              ></img>
            </div>
            <div>
              <div className="h-[50%] pt-[1vh]">

                  <div className="flex flex-col ml-3  ">
                    <div className="text-xl font">Testify </div>
                    <div className="text-sm  pt-[1vh] text-[#1a0db3]  font-[450] font">
                    Testify, a powerful tool, simplifies unit testing for projects with a straightforward GET request. It eliminates the need for importing and managing testing packages, achieving an impressive 80% reduction in setup time. 
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div class="v2"></div>

        <div className="flex flex-col w-[55%] ml-[1vw]">
          <div className="h-[50%]">
            <div className="flex flex-row-reverse h-[100%] justify-between ">
              {/* <div className="pt-2 ">
                <img
                  class="w-[8vw] hrounded  md:pl-1 rounded md:w-8 cursor-pointer"
                  src="ayush.jpeg"
                  alt="..."
                ></img>
              </div> */}
              <div className="flex flex-col ml-3  ">
                <div className="text-base font">DevFeed</div>
                <div className="text-sm text-[#1a0db3]  font-[450]	 font">
                  Devfeed is an Open-source Project which will never let you
                  miss out on an opportunity to connect with other tech
                  professionals in your community. Our newsletter provides you
                  with exclusive updates on the latest events.
                </div>
              </div>
            </div>
          </div>
          <hr className="w-[98%] ml-[1%] mr-[1%] mt-[5vh] mb-[2vh] dark:bg-gray-800  bg-gray-800"></hr>

          <div className="h-[50%]">
            <div className="flex flex-row-reverse h-[100%] justify-between ">
              {/* <div className="pt-2 ">
           <img
             class="w-[8vw] hrounded  md:pl-1 rounded md:w-8 cursor-pointer"
             src="ayush.jpeg"
             alt="..."
           ></img>
         </div> */}
              <div className="flex flex-col ml-3  ">
                <div className="text-base font">Openai-Assist </div>
                <div className="text-sm  text-[#1a0db3]  font-[450] font">
                  Openai-Assist is a game-changing Npm package for seamless
                  ChatGPT API integration. Experience the power of ChatGPT with
                  just 3 lines of code, reducing integration time by an
                  impressive 70%.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      


    </div>
  );
}

export default Projects;
