import Link from 'next/link'
import React, { useRef, useState } from "react";

function Navbar({ contactScrollCallback, projectScrollCallback, skillsScrollCallback }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center mx-20 justify-between py-8 text-blue text-xl font-semibold font-Switzer">
      <p>ali.</p>
      <nav>
        <section className="flex lg:hidden">
          <div
            className="space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 bg-blue"></span>
            <span className="block h-0.5 w-8 bg-blue"></span>
            <span className="block h-0.5 w-8 bg-blue"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-blue"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="my-8 uppercase">
                <button onClick={() => {
                    skillsScrollCallback()
                    setIsNavOpen(false)
                  }}>Skillset</button>
              </li>
              <li className="my-8 uppercase">
                <button onClick={() => {
                    projectScrollCallback()
                    setIsNavOpen(false)
                  }}>Projects</button>
              </li>
              <li className="my-8 uppercase">
                <button onClick={() => {
                    contactScrollCallback()
                    setIsNavOpen(false)
                  }}>Contact</button>
              </li>
            </ul>
          </div>
        </section>

        <ul className="hidden space-x-8 lg:flex">
          <li>
            <button onClick={() => skillsScrollCallback()}>Skillset</button>
          </li>
          <li>
            <button onClick={() => projectScrollCallback()}>Projects</button>
          </li>
          <li>
            <button onClick={() => contactScrollCallback()}>Contact</button>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 70%;
        height: 100vh;
        top: 0;
        right: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  )
}

export default Navbar