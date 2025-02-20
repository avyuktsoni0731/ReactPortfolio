"use client";
import React from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import "../app/static/App.css";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="flex flex-col md:items-start md:justify-normal items-center justify-center h-auto"
      >
        <div className="px-16 xl:px-80 items-center">
          <Reveal>
            <h1
              id="about"
              className="text-2xl font-Montserrat md:text-5xl font-bold text-[#ccd6f6]"
            >
              About Me<span className="text-webGreen fadeAnimate mx-1">.</span>
            </h1>
          </Reveal>
          <div className="flex text-semiWhite flex-col md:flex-row justify-center items-center space-x-4">
            <Reveal>
              <div className="text-base font-Mono space-y-6 pt-8">
                <p>
                  Hey there! My name is{" "}
                  <span className="text-webGreen">Avyukt</span>, and I{" "}
                  <span className="text-webRed">
                    <u
                      className="no-underline tooltip tooltip-error"
                      data-tip="❤️"
                    >
                      love
                    </u>
                  </span>{" "}
                  creating things that live on the internet. My interest in
                  technology started back in my school life, when I was in my
                  5th grade. I used to mod Grand Theft Auto using{" "}
                  <span className="text-[#d2b94b] hover:text-[#e8e8e8] transition duration-200">
                    <a href="https://openiv.com/">OpenIV</a>
                  </span>{" "}
                  by modifying it&apos;s original source code my own way - Well,
                  lets just say I like experimenting and creating things in my
                  own way and turning ideas into reality!
                </p>
                <p>
                  Fast-forward to today, I am currently a 1st year undergrad
                  student pursuing my Bachelors of Technology, majoring in
                  <span className="text-webGreen">
                    {" "}
                    Computer Engineering
                  </span> @{" "}
                  <span className="text-[#d2b94b] hover:text-[#e8e8e8] transition duration-200">
                    <a
                      href="https://amu.ac.in/colleges/zakir-husain-college-of-engineering-and-technology"
                      target="_blank"
                    >
                      Zakir Husain College of Engineering & Technology, AMU.
                    </a>
                  </span>{" "}
                </p>
                <p>
                  My main focus these days is learning something new and
                  building accessable and inclusive things that make a
                  differnce. I&apos;ve been so much into talking to new people,
                  making new friends, and building an inclusive community around
                  me. This is what I{" "}
                  <span className="text-webRed">
                    <u
                      className="no-underline tooltip tooltip-error"
                      data-tip="❤️"
                    >
                      love
                    </u>
                  </span>{" "}
                  doing.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <Image
                src="/aboutPic.jpg"
                alt="profile-picture"
                width={350}
                height={350}
                className="rounded-sm border-webRed grayscale transition duration-300 hover:grayscale-0 pt-8 md:pt-0"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

// "use client";
// import React from "react";
// import Image from "next/image";
// import Reveal from "./Reveal";
// import "../app/static/App.css";

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="flex flex-col md:flex-row items-center justify-between h-auto px-8 md:px-16 xl:px-40 gap-12"
//     >
//       {/* Text Content */}
//       <div className="flex-1 max-w-2xl">
//         <Reveal>
//           <h1 className="text-2xl font-Montserrat md:text-5xl font-bold text-[#ccd6f6]">
//             About Me<span className="text-webGreen fadeAnimate mx-1">.</span>
//           </h1>
//         </Reveal>
//         <Reveal>
//           <div className="text-semiWhite text-lg font-Mono space-y-6 pt-6 leading-relaxed">
//             <p>
//               Hey there! My name is{" "}
//               <span className="text-webGreen">Avyukt</span>, and I{" "}
//               <span className="text-webRed">
//                 <u className="no-underline tooltip tooltip-error" data-tip="❤️">
//                   love
//                 </u>
//               </span>{" "}
//               creating things that live on the internet. My interest in
//               technology started back in my school life, when I was in my 5th
//               grade. I used to mod Grand Theft Auto using{" "}
//               <span className="text-[#d2b94b] hover:text-[#e8e8e8] transition duration-200">
//                 <a href="https://openiv.com/">OpenIV</a>
//               </span>{" "}
//               by modifying it&apos;s original source code my own way - Well,
//               lets just say I like experimenting and creating things in my own
//               way and turning ideas into reality!
//             </p>
//             <p>
//               Fast-forward to today, I am currently a 1st year undergrad student
//               pursuing my Bachelors of Technology, majoring in
//               <span className="text-webGreen">
//                 {" "}
//                 Computer Engineering
//               </span> @{" "}
//               <span className="text-[#d2b94b] hover:text-[#e8e8e8] transition duration-200">
//                 <a
//                   href="https://amu.ac.in/colleges/zakir-husain-college-of-engineering-and-technology"
//                   target="_blank"
//                 >
//                   Zakir Husain College of Engineering & Technology, AMU.
//                 </a>
//               </span>{" "}
//             </p>
//             <p>
//               My main focus these days is learning something new and building
//               accessable and inclusive things that make a differnce. I&apos;ve
//               been so much into talking to new people, making new friends, and
//               building an inclusive community around me. This is what I{" "}
//               <span className="text-webRed">
//                 <u className="no-underline tooltip tooltip-error" data-tip="❤️">
//                   love
//                 </u>
//               </span>{" "}
//               doing.
//             </p>
//           </div>
//         </Reveal>
//       </div>

//       {/* Image Section */}
//       <Reveal>
//         <div className="flex-none">
//           <Image
//             src="/aboutPic.jpg"
//             alt="profile-picture"
//             width={350}
//             height={350}
//             className="rounded-lg border-webRed grayscale transition duration-300 hover:grayscale-0"
//           />
//         </div>
//       </Reveal>
//     </section>
//   );
// };

// export default About;
