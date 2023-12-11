import "./HomePage.scss";
import React from "react";

export default function HomePage() {
   return (
      <>
         <main className="home_main">
            <div className="home_main_content_wrap">
               <div className="home_title_container">
                  <h1 className="home_title">DOTABUFF</h1>
                  <h2 className="home_subtitle"> Dota 2 data platform</h2>
               </div>
               <div className="home_information_container">
                  <div className="home_information_block">
                     <svg viewBox="0 0 300 300" className="svg_icon">
                        <rect
                           x="81.8"
                           y="13.6"
                           width="54.5"
                           height="272.7"
                        ></rect>
                        <rect y="204.5" width="54.5" height="81.8"></rect>
                        <rect
                           x="163.6"
                           y="150"
                           width="54.5"
                           height="136.4"
                        ></rect>
                        <rect
                           x="245.5"
                           y="95.5"
                           width="54.5"
                           height="190.9"
                        ></rect>
                     </svg>
                     <h3 className="home_information_title">Hero Stats</h3>
                     <p className="home_information_text">
                        Detailed statistics of heroes <br />
                        and objects.
                     </p>
                  </div>
                  <div className="home_information_block">
                     <svg viewBox="0 0 300 300" className="svg_icon">
                        <path d="M278.6,42.9c0-23.6-19.2-42.9-42.9-42.9s-42.9,19.2-42.9,42.9c0,15.8,8.6,29.7,21.4,37.1v35.4L150,147.5 l-64.3-32.1V79.9c12.8-7.4,21.4-21.3,21.4-37.1C107.1,19.2,87.9,0,64.3,0S21.4,19.2,21.4,42.9c0,15.8,8.6,29.7,21.4,37.1v61.9 l85.7,42.9v35.4c-12.8,7.4-21.4,21.3-21.4,37.1c0,23.6,19.2,42.9,42.9,42.9s42.9-19.2,42.9-42.9c0-15.8-8.6-29.7-21.4-37.1v-35.4 l85.7-42.9V79.9C269.9,72.5,278.6,58.7,278.6,42.9z M64.3,21.4c11.8,0,21.4,9.6,21.4,21.4s-9.6,21.4-21.4,21.4s-21.4-9.6-21.4-21.4 S52.5,21.4,64.3,21.4z M150,278.6c-11.8,0-21.4-9.6-21.4-21.4c0-11.8,9.6-21.4,21.4-21.4s21.4,9.6,21.4,21.4 C171.4,269,161.8,278.6,150,278.6z M235.7,64.3c-11.8,0-21.4-9.6-21.4-21.4s9.6-21.4,21.4-21.4s21.4,9.6,21.4,21.4 S247.5,64.3,235.7,64.3z"></path>
                     </svg>
                     <h3 className="home_information_title">
                        Procommands and promoters
                     </h3>
                     <p className="home_information_text">
                        All Dota 2 game events, <br />
                        top teams and leagues.
                     </p>
                  </div>
                  <div className="home_information_block">
                     <svg viewBox="0 0 300 300" className="svg_icon">
                        <rect
                           x="138"
                           y="116.5"
                           transform="matrix(0.7071 0.7071 -0.7071 0.7071 145.5402 -72.8379)"
                           width="45.5"
                           height="45.5"
                        ></rect>
                        <rect
                           x="52.3"
                           y="141.6"
                           transform="matrix(0.7071 0.7071 -0.7071 0.7071 181.0483 12.848)"
                           width="45.5"
                           height="166.7"
                        ></rect>
                        <rect x="150" y="0" width="21.4" height="42.8"></rect>
                        <rect
                           x="233.3"
                           y="34.5"
                           transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 377.0973 268.0186)"
                           width="21.4"
                           height="42.8"
                        ></rect>
                        <rect
                           x="66.6"
                           y="34.5"
                           transform="matrix(0.7071 -0.7071 0.7071 0.7071 -16.9125 71.0886)"
                           width="21.4"
                           height="42.8"
                        ></rect>
                        <rect
                           x="233.3"
                           y="201.2"
                           transform="matrix(0.7071 -0.7071 0.7071 0.7071 -85.918 237.758)"
                           width="21.4"
                           height="42.8"
                        ></rect>
                        <rect
                           x="257.2"
                           y="128.5"
                           width="42.8"
                           height="21.4"
                        ></rect>
                     </svg>
                     <h3 className="home_information_title">News</h3>
                     <p className="home_information_text">
                        Game-related news <br />
                        and new events.
                     </p>
                  </div>
               </div>
               <div className="home_footer">
                  <div className="home_footer_border">
                     <img
                        src="https://www.opendota.com/assets/images/dotaCoachLogo.svg"
                        alt="dota_image"
                        width="100"
                     />
                  </div>
                  <div>
                     <img
                        src="https://www.opendota.com/assets/images/openai-logo.png"
                        alt="dota_image"
                        width="100"
                     />
                  </div>
               </div>
            </div>
         </main>
      </>
   );
}
