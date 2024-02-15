import "./AllHeroes.scss";
import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MyLoader } from "../index";

function AllHeroes(props) {
   const API = "https://api.opendota.com";
   const API2 = "https://cdn.cloudflare.steamstatic.com";

   return (
      <>
         {props.isLoading ? (
            <MyLoader />
         ) : (
            <main className="main">
               <div className="main_wrap">
                  <div className="main_header">
                     <h2 className="main_header_title">ALL HEROES</h2>
                     <div className="popular_rate">
                        <div className="note-sumbol_red">
                           <FaStar />
                        </div>
                        <p className="popular_rate_text">TURBO PICK</p>
                        <div className="note-sumbol_green">
                           <FaStar />
                        </div>
                        <p className="popular_rate_text">TURBO WIN</p>
                     </div>
                  </div>
                  <div className="heroes_container">
                     {props.heroesContainer.map((item) => {
                        return (
                           <Link
                              to={`/heroes/${item.localized_name}`}
                              className="heroes_nav"
                              key={item.localized_name}
                           >
                              <div className="hero_block">
                                 {console.log(API2 + item.img)}
                                 <img
                                    src={`${API2 + item.img}`}
                                    alt="hero"
                                    className="heroes_img"
                                 />
                                 <p className="hero_block_text">
                                    {item.localized_name}
                                 </p>
                                 {item.turbo_picks > 110000 && (
                                    <div className="note-sumbol_red turbo_pick">
                                       <FaStar />
                                    </div>
                                 )}
                                 {item.turbo_wins > 90000 && (
                                    <div className="note-sumbol_green turbo_wins">
                                       <FaStar />
                                    </div>
                                 )}
                              </div>
                           </Link>
                        );
                     })}
                  </div>
                  <div className="view_container">
                     <p className="view_title">
                        VIEW THE CHARACTERISTICS OF THE HEROES:
                     </p>
                     <Link className="equalize" to="/heroes/equalize">
                        EQUALIZE
                     </Link>
                  </div>
               </div>
            </main>
         )}
      </>
   );
}

export default AllHeroes;
