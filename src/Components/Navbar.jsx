import React from "react";

function Navbar() {

  return (
    <div className="flex flex-col sticky top-0 w-[screen]">
      <nav className="flex sticky top-0 items-center w-[screen]  border-bottom border-gray-600 flex-row sm:flex-col bg-white ">
        <div className="flex mt-[-1%] ml-[2vw] sm:ml-0">
          <img className="w-[97px] cursor-pointer" src="google.png" alt="..." />
        </div>
        <div className=" flex w-[59.5%] sm:w-[90%] mt-[1%]  flex-col ">
          <div>
            <input
              className="input ml-[3.5vw] sm:ml-[0%] mt-[2.3%] w-[100%] min-w-[30%] pt-[1.2%] text-lg xmd:text-base nma:text-sm nmb:text-xs nma:pb-[0.8%] nmb:text-xs nma:pt-[0.8%] pb-[1.2%] pl-5 pr-2 mb-2 flex flex-row justify-evenly"
              placeholder="Ayush Gupta"
            />
          </div>

          <div className="ml-[4.7%] sm:ml-[0%] mb-2  ">
            <button type="submit" className="button ">
              <span className="buttontext">
              <a href="https://www.linkedin.com/in/ayush-gupta-253092227/"  target="blank">Linkedin</a>
              </span>
            </button>
            <button type="submit" className="button">
              <span className="buttontext">
                <a href="https://linktr.ee/NovusAyush"  target="blank">Linktree</a>
              </span>
            </button>
            <button type="submit" className="button">
              <span className="buttontext">
              <a href="https://twitter.com/Ayush3241"  target="blank">Twitter</a>
              </span>
            </button>
            <button type="submit" className="button">
              <span className="buttontext">
                <a href="https://medium.com/@ayush4002gupta/a-comprehensive-guide-for-contributing-to-open-source-5e0c63f329bb"  target="blank">Blogs</a>
              </span>
            </button>
            <button type="submit" className="button">
              <span className="buttontext">
              <a href="mailto:ayush4002gupta@gmail.com" >Contact</a>
              </span>
            </button>
          </div>
        </div>
        <div class="flex sm:hidden pl-[27vw] xmd:pl-[23vw] mr-1 mt-[-1%] w-[40%]">
          <ul
            className="flex flex-row md:items-center gap-[2vw] md:gap-2" >
            <li className="pt-3">
              <svg
                class="w-7  md:pl-1 md:w-8 cursor-pointer"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z"></path>
                <circle cx="12" cy="12" r="3.5"></circle>
              </svg>
            </li>
            <li className="items-center pt-3">
              <svg
                class="w-7  md:pl-1 md:w-8 cursor-pointer"
                focusable="false"
                viewBox="0 0 24 24"
              >
                <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
              </svg>
            </li>
            <li className="items-center pt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                fill="currentColor"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
            </li>
          </ul>
        </div>
      </nav>
      <div className="bg-white">
        <hr className="w-[100vw]  mt-[1%] dark:bg-gray-700  bg-gray-700"></hr>
      </div>
    </div>
  );
}

export default Navbar;
