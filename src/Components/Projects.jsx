import React from "react";

function Projects() {
  return (
    <div className="ml-[18.5%] md:ml-[2.5%] ">
      <div className="flex flex-row mt-[5vh] ">
        <div className="flex-col  ">
          <div className="text-2xl font md:text-xl">Projects</div>
          <div className="text-md md:text-sm text-zinc-500 mt-1 font	">
            Showing Results For Projects{" "}
          </div>
        </div>
      </div>
      <hr className="w-[98%] ml-[1%]  mt-[3vh] dark:bg-gray-800  bg-gray-800"></hr>
      <div  className="flex flex-row nmb:flex-col h-[fit] w-[95%] mt-[3vh] mr-[1vw]">
        <div className="w-[48%] nmb:flex-col  nmb:w-[90vw] ">
          <div className="flex flex-col mr-2">
            <div className="nmb:hidden">
              <img
                class=" w-[100%] p-2 rounded cursor-pointer"
                src="tetstify.png"
                alt="..."
              ></img>
            </div>
            <div>
              <div className="h-[50%]  pt-[1vh]  nmb:pt-[0.5vh] ">

                 <a href="https://testify-1-0.vercel.app/"  target="blank"> <div className="flex flex-col ml-3 nmb:ml-0  ">
                    <div className="text-xl md:text-lg font">Testify </div>
                    <div className="text-sm  pt-[1vh] text-[#1a0db3]  font-[450] font">
                    Testify, a powerful tool, simplifies unit testing for projects with a straightforward GET request. It eliminates the need for importing and managing testing packages, achieving an impressive 80% reduction in setup time. 
                    </div>
                  </div>
                  </a>
                </div>
            </div>
          </div>
        </div>
        <div class="v2 nmb:hidden"></div>

        <div className="flex flex-col w-[55%] nmb:w-[90vw] nmb:ml-[0vw] ml-[1vw]">
          <div className="h-[50%]">
            <div className="flex flex-row-reverse h-[100%] justify-between ">
              {/* <div className="pt-2 ">
                <img
                  class="w-[8vw] hrounded  md:pl-1 rounded md:w-8 cursor-pointer"
                  src="ayush.jpeg"
                  alt="..."
                ></img>
              </div> */}
              <a href="https://github.com/DevFeed404/DevFeed-1.0"  target="blank"><div className="flex flex-col ml-3 nmb:mt-1  nmb:ml-0 ">
                <div className="text-base font">DevFeed</div>
                <div className="text-sm text-[#1a0db3]  font-[450]	 font">
                  Devfeed is an Open-source Project which will never let you
                  miss out on an opportunity to connect with other tech
                  professionals in your community. Our newsletter provides you
                  with exclusive updates on the latest events.
                </div>
              </div>
              </a>
            </div>
          </div>
          <hr className="w-[98%]  nmb:hidden ml-[1%] mr-[1%] mt-[5vh] xmd:mt-[8vh] mb-[2vh] dark:bg-gray-800  bg-gray-800"></hr>

          <div className="h-[50%]">
            <div className="flex flex-row-reverse h-[100%] justify-between ">
              {/* <div className="pt-2 ">
           <img
             class="w-[8vw] hrounded  md:pl-1 rounded md:w-8 cursor-pointer"
             src="ayush.jpeg"
             alt="..."
           ></img>
         </div> */}
             <a href="https://www.npmjs.com/package/openai-assist"  target="blank"><div className="flex flex-col ml-3  nmb:mt-3  nmb:ml-0  ">
                <div className="text-base font">Openai-Assist </div>
                <div className="text-sm  text-[#1a0db3]  font-[450] font">
                  Openai-Assist is a game-changing Npm package for seamless
                  ChatGPT API integration. Experience the power of ChatGPT with
                  just 3 lines of code, reducing integration time by an
                  impressive 70%.
                </div>
              </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      


    </div>
  );
}

export default Projects;
