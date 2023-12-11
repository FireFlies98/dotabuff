import "./ProPlayers.scss";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { MyLoader } from "../index";

export default function ProPlayers() {
   const [proPlayers, setProPlayers] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [playersPerPage] = useState(50);
   const [loader, setLoader] = useState(true);

   const upRef = useRef(null);

   const getProPlayers = async () => {
      const res = await axios("https://api.opendota.com/api/proPlayers");
      setProPlayers(res.data);
      setLoader(false);
   };
   useEffect(() => {
      getProPlayers();
   }, [currentPage]);

   const pageNumbers = [];
   const totalPlayers = proPlayers.length;
   const pagesCount = Math.ceil(totalPlayers / playersPerPage);

   if (pagesCount > 10) {
      if (currentPage > 5) {
         for (let i = currentPage - 4; i <= currentPage + 5; i++) {
            pageNumbers.push(i);
            if (i == pagesCount) break;
         }
      } else {
         for (let i = 1; i <= 10; i++) {
            pageNumbers.push(i);
            if (i == pagesCount) break;
         }
      }
   } else {
      for (let i = 1; i <= pagesCount; i++) {
         pageNumbers.push(i);
      }
   }

   const lastPlayerIndex = currentPage * playersPerPage;
   const firsPlayerIndex = lastPlayerIndex - playersPerPage;
   const currentPlayer = proPlayers.slice(firsPlayerIndex, lastPlayerIndex);

   const paginate = (pageNumbers) => {
      upRef.current.scrollIntoView();
      setCurrentPage(pageNumbers);
   };

   const nextPage = () => {
      upRef.current.scrollIntoView();
      setCurrentPage((prev) => (prev < pagesCount ? prev + 1 : prev));
   };
   const prevPage = () => {
      upRef.current.scrollIntoView();
      setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
   };

   const lastPage = () => {
      upRef.current.scrollIntoView();
      setCurrentPage(pagesCount);
   };
   const firstPage = () => {
      upRef.current.scrollIntoView();
      setCurrentPage(!!currentPage);
      console.log(currentPlayer);
   };

   return (
      <>
         {loader && <MyLoader />}
         <div className="body_wrap" ref={upRef}>
            <div className="body_header">
               <h2 className="body_header_title">Pro Players</h2>
               <h5 className="body_header_subtitle">Сonfirmation</h5>
            </div>
            <div className="body_main">
               <div className="body_main_titles">
                  <h3>Player</h3>
                  <h3 className="title_team_margin">Team</h3>
                  <h3 className="title_id_display">Steam ID</h3>
                  <h3>Country Code</h3>
               </div>
               {currentPlayer.map((player) => {
                  return (
                     <Link
                        to={`/proplayers/${player.account_id}`}
                        className="body_main_pleyers"
                        key={player.account_id}
                     >
                        <div className="players_block">
                           <img
                              src={player.avatarmedium}
                              alt="players_avatar"
                              className="players_avatar_img"
                           />
                           <div className="players_name_block">
                              <p className="players_name">
                                 {player.name} / {player.personaname}
                              </p>
                              <p className="players_id">
                                 ID: {player.account_id}
                              </p>
                           </div>
                        </div>
                        <div className="players_team_block">
                           <p className="players_team">
                              {player.team_name}, {player.team_tag}
                           </p>
                           <p className="players_team_id">
                              Team ID: {player.team_id}
                           </p>
                        </div>
                        <div className="players_steam_block">
                           <p className="player_steam_id">{player.steamid}</p>
                        </div>
                        <div className="players_country_block">
                           <p className="players_country_code">
                              {player.country_code}
                           </p>
                        </div>
                     </Link>
                  );
               })}
               <div className="body_footer">
                  <button
                     className={
                        currentPage > !!currentPage
                           ? "prev_page_btn"
                           : "disable"
                     }
                     onClick={firstPage}
                  >
                     « First
                  </button>
                  <button
                     className={
                        currentPage > !!currentPage
                           ? "prev_page_btn"
                           : "disable"
                     }
                     onClick={prevPage}
                  >
                     ‹ Prev
                  </button>
                  <ul className="pagination">
                     {pageNumbers.map((number) => (
                        <li
                           className={
                              number == currentPage
                                 ? "page_item_active"
                                 : "page_item"
                           }
                           key={number}
                        >
                           <p
                              className={
                                 number == currentPage
                                    ? "active_page_link"
                                    : "page_link"
                              }
                              onClick={() => paginate(number)}
                           >
                              {number}
                           </p>
                        </li>
                     ))}
                  </ul>
                  <button
                     className={
                        currentPage < pagesCount ? "next_page_btn" : "disable"
                     }
                     onClick={nextPage}
                  >
                     Next ›
                  </button>
                  <button
                     className={
                        currentPage < pagesCount ? "next_page_btn" : "disable"
                     }
                     onClick={lastPage}
                  >
                     Last »
                  </button>
               </div>
            </div>
         </div>
      </>
   );
}
