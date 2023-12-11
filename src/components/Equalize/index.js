import "./Equalize.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";

export default function Equalize() {
   const [allHeroes, setAllHeroes] = useState([]);
   const [strHeroes, setStrHeroes] = useState([]);
   const [agiHeroes, setAgiHeroes] = useState([]);
   const [intHeroes, setIntHeroes] = useState([]);
   const [firstModalOpen, setFirstModalOpen] = useState(false);
   const [secondModalOpen, setSecondModalOpen] = useState(false);
   const [firstHero, setFirstHero] = useState({});
   const [secondHero, setSecondHero] = useState({});

   const API = "https://api.opendota.com";

   const getHeroes = async () => {
      const res = await axios("https://api.opendota.com/api/heroStats");
      setAllHeroes(res.data);
      setStrHeroes(res.data.filter((e) => e.primary_attr === "str"));
      setAgiHeroes(res.data.filter((e) => e.primary_attr === "agi"));
      setIntHeroes(res.data.filter((e) => e.primary_attr === "int"));
   };
   useEffect(() => {
      getHeroes();
   }, []);

   const showingTheFirstModalWindow = () => {
      setFirstModalOpen(!firstModalOpen);
   };

   const showingTheSecondModalWindow = () => {
      setSecondModalOpen(!secondModalOpen);
   };

   const findFirstHero = (e) => {
      const heroID = e.target.id;
      const res = allHeroes.find((e) => e.localized_name === heroID);
      setFirstHero(res);
      console.log(res);
      setFirstModalOpen(false);
   };

   const findSecondHero = (e) => {
      const heroID = e.target.id;
      const res = allHeroes.find((e) => e.localized_name === heroID);
      setSecondHero(res);
      console.log(res);
      setSecondModalOpen(false);
   };

   return (
      <>
         <div className="equalize_content">
            <div className="equalize_hero_block">
               <div className="firs_hero_block">
                  <div
                     className="hero_border"
                     onClick={showingTheFirstModalWindow}
                  >
                     <Modal
                        className="first_modal"
                        ariaHideApp={false}
                        isOpen={firstModalOpen}
                        overlayClassName="overplay"
                     >
                        <div className="modal_content_wrap">
                           <div className="modal_subheader">
                              <img
                                 src="https://cdnb.artstation.com/p/assets/images/images/012/438/897/large/alexandra-bisson-001-str.jpg?1534811821&dl=1"
                                 alt="str"
                                 className="hero_attr_icon"
                              />
                              <h2 className="title_attr_heroes">STR</h2>
                           </div>
                           <div className="heroes_wrap">
                              {strHeroes.map((hero) => {
                                 return (
                                    <div
                                       key={hero.localized_name}
                                       className="modal_all_heroes"
                                       onClick={findFirstHero}
                                    >
                                       <img
                                          src={`${API + hero.img}`}
                                          alt="hero_image"
                                          className="modal_all_heroes_img"
                                          id={hero.localized_name}
                                       />
                                    </div>
                                 );
                              })}
                           </div>
                           <div className="modal_subheader">
                              <img
                                 src="https://cdnb.artstation.com/p/assets/images/images/012/438/899/large/alexandra-bisson-002-agi.jpg?1534811827&dl=1"
                                 alt="agi"
                                 className="hero_attr_icon"
                              />
                              <h2 className="title_attr_heroes">AGI</h2>
                           </div>
                           <div className="heroes_wrap">
                              {agiHeroes.map((hero) => {
                                 return (
                                    <div
                                       key={hero.localized_name}
                                       className="modal_all_heroes"
                                       onClick={findFirstHero}
                                    >
                                       <img
                                          src={`${API + hero.img}`}
                                          alt="hero_image"
                                          className="modal_all_heroes_img"
                                          id={hero.localized_name}
                                       />
                                    </div>
                                 );
                              })}
                           </div>
                           <div className="modal_subheader">
                              <img
                                 src="https://i.imgur.com/hy4drbj.png"
                                 alt="int"
                                 className="hero_attr_icon"
                              />
                              <h2 className="title_attr_heroes">INT</h2>
                           </div>
                           <div className="heroes_wrap">
                              {intHeroes.map((hero) => {
                                 return (
                                    <div
                                       key={hero.localized_name}
                                       className="modal_all_heroes"
                                       onClick={findFirstHero}
                                    >
                                       <img
                                          src={`${API + hero.img}`}
                                          alt="hero_image"
                                          className="modal_all_heroes_img"
                                          id={hero.localized_name}
                                       />
                                    </div>
                                 );
                              })}
                           </div>
                        </div>
                     </Modal>
                     {firstHero.localized_name === undefined ? (
                        <p className="hero_plus">+</p>
                     ) : (
                        <img
                           src={`${API + firstHero.img}`}
                           alt="hero_img"
                           className="equalize_hero_img"
                        />
                     )}
                  </div>
               </div>
               <div className="second_hero_block">
                  <div
                     className="hero_border"
                     onClick={showingTheSecondModalWindow}
                  >
                     <Modal
                        className="second_modal"
                        ariaHideApp={false}
                        isOpen={secondModalOpen}
                        overlayClassName="overplay"
                     >
                        <div className="modal_content_wrap">
                           <div className="modal_subheader">
                              <img
                                 src="https://cdnb.artstation.com/p/assets/images/images/012/438/897/large/alexandra-bisson-001-str.jpg?1534811821&dl=1"
                                 alt="str"
                                 className="hero_attr_icon"
                              />
                              <h2 className="title_attr_heroes">STR</h2>
                           </div>
                           <div className="heroes_wrap">
                              {strHeroes.map((hero) => {
                                 return (
                                    <div
                                       key={hero.localized_name}
                                       className="modal_all_heroes"
                                       onClick={findSecondHero}
                                    >
                                       <img
                                          src={`${API + hero.img}`}
                                          alt="hero_image"
                                          className="modal_all_heroes_img"
                                          id={hero.localized_name}
                                       />
                                    </div>
                                 );
                              })}
                           </div>
                           <div className="modal_subheader">
                              <img
                                 src="https://cdnb.artstation.com/p/assets/images/images/012/438/899/large/alexandra-bisson-002-agi.jpg?1534811827&dl=1"
                                 alt="agi"
                                 className="hero_attr_icon"
                              />
                              <h2 className="title_attr_heroes">AGI</h2>
                           </div>
                           <div className="heroes_wrap">
                              {agiHeroes.map((hero) => {
                                 return (
                                    <div
                                       key={hero.localized_name}
                                       className="modal_all_heroes"
                                       onClick={findSecondHero}
                                    >
                                       <img
                                          src={`${API + hero.img}`}
                                          alt="hero_image"
                                          className="modal_all_heroes_img"
                                          id={hero.localized_name}
                                       />
                                    </div>
                                 );
                              })}
                           </div>
                           <div className="modal_subheader">
                              <img
                                 src="https://i.imgur.com/hy4drbj.png"
                                 alt="int"
                                 className="hero_attr_icon"
                              />
                              <h2 className="title_attr_heroes">INT</h2>
                           </div>
                           <div className="heroes_wrap">
                              {intHeroes.map((hero) => {
                                 return (
                                    <div
                                       key={hero.localized_name}
                                       className="modal_all_heroes"
                                       onClick={findSecondHero}
                                    >
                                       <img
                                          src={`${API + hero.img}`}
                                          alt="hero_image"
                                          className="modal_all_heroes_img"
                                          id={hero.localized_name}
                                       />
                                    </div>
                                 );
                              })}
                           </div>
                        </div>
                     </Modal>
                     {secondHero.localized_name === undefined ? (
                        <p className="hero_plus">+</p>
                     ) : (
                        <img
                           src={`${API + secondHero.img}`}
                           alt="hero_img"
                           className="equalize_hero_img"
                        />
                     )}
                  </div>
               </div>
            </div>
            <div className="equalize_heroes_container">
               <div className="equalize_block">
                  <h5 className="equalize_block_title">STRENTH</h5>
                  <div className="equalize_stats">
                     <div>
                        {firstHero.base_str === undefined ? (
                           <p className="undefined">?</p>
                        ) : (
                           <p
                              className={
                                 secondHero.base_str === undefined ||
                                 secondHero.base_str === firstHero.base_str
                                    ? "equalize_stat"
                                    : firstHero.base_str > secondHero.base_str
                                    ? "big"
                                    : "low"
                              }
                           >
                              {firstHero.base_str}
                              <span
                                 className={
                                    secondHero.str_gain === undefined ||
                                    secondHero.str_gain === firstHero.str_gain
                                       ? "equalize_stat"
                                       : firstHero.str_gain >
                                         secondHero.str_gain
                                       ? "big"
                                       : "low"
                                 }
                              >
                                 {" "}
                                 + {firstHero.str_gain}
                              </span>
                           </p>
                        )}
                     </div>
                     <div>
                        {secondHero.base_str === undefined ? (
                           <p className="undefined">?</p>
                        ) : (
                           <p
                              className={
                                 firstHero.base_str === undefined ||
                                 firstHero.base_str === secondHero.base_str
                                    ? "equalize_stat"
                                    : secondHero.base_str > firstHero.base_str
                                    ? "big"
                                    : "low"
                              }
                           >
                              {secondHero.base_str}
                              <span
                                 className={
                                    firstHero.str_gain === undefined ||
                                    firstHero.str_gain === secondHero.str_gain
                                       ? "equalize_stat"
                                       : secondHero.str_gain >
                                         firstHero.str_gain
                                       ? "big"
                                       : "low"
                                 }
                              >
                                 {" "}
                                 + {secondHero.str_gain}
                              </span>
                           </p>
                        )}
                     </div>
                  </div>
               </div>
               <span className="line"></span>
               <div className="equalize_block">
                  <h5 className="equalize_block_title">AGILITY</h5>
                  <div className="equalize_stats">
                     <div>
                        {firstHero.base_agi === undefined ? (
                           <p className="undefined">?</p>
                        ) : (
                           <p
                              className={
                                 secondHero.base_agi === undefined ||
                                 secondHero.base_agi === firstHero.base_agi
                                    ? "equalize_stat"
                                    : firstHero.base_agi > secondHero.base_agi
                                    ? "big"
                                    : "low"
                              }
                           >
                              {firstHero.base_agi}
                              <span
                                 className={
                                    secondHero.agi_gain === undefined ||
                                    secondHero.agi_gain === firstHero.agi_gain
                                       ? "equalize_stat"
                                       : firstHero.agi_gain >
                                         secondHero.agi_gain
                                       ? "big"
                                       : "low"
                                 }
                              >
                                 {" "}
                                 + {firstHero.agi_gain}
                              </span>
                           </p>
                        )}
                     </div>
                     <div>
                        {secondHero.base_agi === undefined ? (
                           <p className="undefined">?</p>
                        ) : (
                           <p
                              className={
                                 firstHero.base_agi === undefined ||
                                 firstHero.base_agi === secondHero.base_agi
                                    ? "equalize_stat"
                                    : secondHero.base_agi > firstHero.base_agi
                                    ? "big"
                                    : "low"
                              }
                           >
                              {secondHero.base_agi}
                              <span
                                 className={
                                    firstHero.agi_gain === undefined ||
                                    firstHero.agi_gain === secondHero.agi_gain
                                       ? "equalize_stat"
                                       : secondHero.agi_gain >
                                         firstHero.agi_gain
                                       ? "big"
                                       : "low"
                                 }
                              >
                                 {" "}
                                 + {secondHero.agi_gain}
                              </span>
                           </p>
                        )}
                     </div>
                  </div>
               </div>
               <span className="line"></span>
               <div className="equalize_block">
                  <h5 className="equalize_block_title">INTELLECT</h5>
                  <div className="equalize_stats">
                     <div>
                        {firstHero.base_int === undefined ? (
                           <p className="undefined">?</p>
                        ) : (
                           <p
                              className={
                                 secondHero.base_int === undefined ||
                                 secondHero.base_int === firstHero.base_int
                                    ? "equalize_stat"
                                    : firstHero.base_int > secondHero.base_int
                                    ? "big"
                                    : "low"
                              }
                           >
                              {firstHero.base_int}
                              <span
                                 className={
                                    secondHero.int_gain === undefined ||
                                    secondHero.int_gain === firstHero.int_gain
                                       ? "equalize_stat"
                                       : firstHero.int_gain >
                                         secondHero.int_gain
                                       ? "big"
                                       : "low"
                                 }
                              >
                                 {" "}
                                 + {firstHero.int_gain}
                              </span>
                           </p>
                        )}
                     </div>
                     <div>
                        {secondHero.base_int === undefined ? (
                           <p className="undefined">?</p>
                        ) : (
                           <p
                              className={
                                 firstHero.base_int === undefined ||
                                 firstHero.base_int === secondHero.base_int
                                    ? "equalize_stat"
                                    : secondHero.base_int > firstHero.base_int
                                    ? "big"
                                    : "low"
                              }
                           >
                              {secondHero.base_int}
                              <span
                                 className={
                                    firstHero.int_gain === undefined ||
                                    firstHero.int_gain === secondHero.int_gain
                                       ? "equalize_stat"
                                       : secondHero.int_gain >
                                         firstHero.int_gain
                                       ? "big"
                                       : "low"
                                 }
                              >
                                 {" "}
                                 + {secondHero.int_gain}
                              </span>
                           </p>
                        )}
                     </div>
                  </div>
               </div>
               <span className="line"></span>
               <div className="equalize_block">
                  <h5 className="equalize_block_title">ATTACK</h5>
                  <div className="equalize_stats">
                     <div>
                        {firstHero.base_attack_min === undefined ? (
                           <p className="undefined">?</p>
                        ) : (
                           <p
                              className={
                                 secondHero.base_attack_min === undefined ||
                                 secondHero.base_attack_min ===
                                    firstHero.base_attack_min
                                    ? "equalize_stat"
                                    : firstHero.base_attack_min >
                                      secondHero.base_attack_min
                                    ? "big"
                                    : "low"
                              }
                           >
                              {firstHero.base_attack_min}
                           </p>
                        )}
                     </div>
                     <div>
                        {secondHero.base_attack_min === undefined ? (
                           <p className="undefined">?</p>
                        ) : (
                           <p
                              className={
                                 firstHero.base_attack_min === undefined ||
                                 firstHero.base_attack_min ===
                                    secondHero.base_attack_min
                                    ? "equalize_stat"
                                    : secondHero.base_attack_min >
                                      firstHero.base_attack_min
                                    ? "big"
                                    : "low"
                              }
                           >
                              {secondHero.base_attack_min}
                           </p>
                        )}
                     </div>
                  </div>
               </div>
               <span className="line"></span>
               <div className="equalize_block">
                  <h5 className="equalize_block_title">RANGE</h5>
                  <div className="equalize_stats">
                     <div>
                        {firstHero.attack_range === undefined ? (
                           <p className="undefined">?</p>
                        ) : (
                           <p
                              className={
                                 secondHero.attack_range === undefined ||
                                 secondHero.attack_range ===
                                    firstHero.attack_range
                                    ? "equalize_stat"
                                    : firstHero.attack_range >
                                      secondHero.attack_range
                                    ? "big"
                                    : "low"
                              }
                           >
                              {firstHero.attack_range}
                           </p>
                        )}
                     </div>
                     <div>
                        {secondHero.attack_range === undefined ? (
                           <p className="undefined">?</p>
                        ) : (
                           <p
                              className={
                                 firstHero.attack_range === undefined ||
                                 firstHero.attack_range ===
                                    secondHero.attack_range
                                    ? "equalize_stat"
                                    : secondHero.attack_range >
                                      firstHero.attack_range
                                    ? "big"
                                    : "low"
                              }
                           >
                              {secondHero.attack_range}
                           </p>
                        )}
                     </div>
                  </div>
               </div>
               <span className="line"></span>
               <div className="equalize_block">
                  <h5 className="equalize_block_title">RATE</h5>
                  <div className="equalize_stats">
                     <div>
                        {firstHero.attack_rate === undefined ? (
                           <p className="undefined">?</p>
                        ) : (
                           <p
                              className={
                                 secondHero.attack_rate === undefined ||
                                 secondHero.attack_rate ===
                                    firstHero.attack_rate
                                    ? "equalize_stat"
                                    : firstHero.attack_rate >
                                      secondHero.attack_rate
                                    ? "big"
                                    : "low"
                              }
                           >
                              {firstHero.attack_rate}
                           </p>
                        )}
                     </div>
                     <div>
                        {secondHero.attack_rate === undefined ? (
                           <p className="undefined">?</p>
                        ) : (
                           <p
                              className={
                                 firstHero.attack_rate === undefined ||
                                 firstHero.attack_rate ===
                                    secondHero.attack_rate
                                    ? "equalize_stat"
                                    : secondHero.attack_rate >
                                      firstHero.attack_rate
                                    ? "big"
                                    : "low"
                              }
                           >
                              {secondHero.attack_rate}
                           </p>
                        )}
                     </div>
                  </div>
               </div>
               <span className="line"></span>
               <div className="equalize_block">
                  <h5 className="equalize_block_title">HEALTH</h5>
                  <div className="equalize_stats">
                     <div>
                        {firstHero.base_health === undefined ? (
                           <p className="undefined">?</p>
                        ) : (
                           <p
                              className={
                                 secondHero.base_health === undefined ||
                                 secondHero.base_health ===
                                    firstHero.base_health
                                    ? "equalize_stat"
                                    : firstHero.base_health >
                                      secondHero.base_health
                                    ? "big"
                                    : "low"
                              }
                           >
                              {firstHero.base_health}
                           </p>
                        )}
                     </div>
                     <div>
                        {secondHero.base_health === undefined ? (
                           <p className="undefined">?</p>
                        ) : (
                           <p
                              className={
                                 firstHero.base_health === undefined ||
                                 firstHero.base_health ===
                                    secondHero.base_health
                                    ? "equalize_stat"
                                    : secondHero.base_health >
                                      firstHero.base_health
                                    ? "big"
                                    : "low"
                              }
                           >
                              {secondHero.base_health}
                           </p>
                        )}
                     </div>
                  </div>
               </div>
               <span className="line"></span>
               <div className="equalize_block">
                  <h5 className="equalize_block_title">MANA</h5>
                  <div className="equalize_stats">
                     <div>
                        {firstHero.base_mana === undefined ? (
                           <p className="undefined">?</p>
                        ) : (
                           <p
                              className={
                                 secondHero.base_mana === undefined ||
                                 secondHero.base_mana === firstHero.base_mana
                                    ? "equalize_stat"
                                    : firstHero.base_mana > secondHero.base_mana
                                    ? "big"
                                    : "low"
                              }
                           >
                              {firstHero.base_mana}
                           </p>
                        )}
                     </div>
                     <div>
                        {secondHero.base_mana === undefined ? (
                           <p className="undefined">?</p>
                        ) : (
                           <p
                              className={
                                 firstHero.base_mana === undefined ||
                                 firstHero.base_mana === secondHero.base_mana
                                    ? "equalize_stat"
                                    : secondHero.base_mana > firstHero.base_mana
                                    ? "big"
                                    : "low"
                              }
                           >
                              {secondHero.base_mana}
                           </p>
                        )}
                     </div>
                  </div>
               </div>
               <span className="line"></span>
               <div className="equalize_block">
                  <h5 className="equalize_block_title">ARMOR</h5>
                  <div className="equalize_stats">
                     <div>
                        {firstHero.base_armor === undefined ? (
                           <p className="undefined">?</p>
                        ) : (
                           <p
                              className={
                                 secondHero.base_armor === undefined ||
                                 secondHero.base_armor === firstHero.base_armor
                                    ? "equalize_stat"
                                    : firstHero.base_armor >
                                      secondHero.base_armor
                                    ? "big"
                                    : "low"
                              }
                           >
                              {firstHero.base_armor}
                           </p>
                        )}
                     </div>
                     <div>
                        {secondHero.base_armor === undefined ? (
                           <p className="undefined">?</p>
                        ) : (
                           <p
                              className={
                                 firstHero.base_armor === undefined ||
                                 firstHero.base_armor === secondHero.base_armor
                                    ? "equalize_stat"
                                    : secondHero.base_armor >
                                      firstHero.base_armor
                                    ? "big"
                                    : "low"
                              }
                           >
                              {secondHero.base_armor}
                           </p>
                        )}
                     </div>
                  </div>
               </div>
               <span className="line"></span>
               <div className="equalize_block">
                  <h5 className="equalize_block_title">SPEED</h5>
                  <div className="equalize_stats">
                     <div>
                        {firstHero.move_speed === undefined ? (
                           <p className="undefined">?</p>
                        ) : (
                           <p
                              className={
                                 secondHero.move_speed === undefined ||
                                 secondHero.move_speed === firstHero.move_speed
                                    ? "equalize_stat"
                                    : firstHero.move_speed >
                                      secondHero.move_speed
                                    ? "big"
                                    : "low"
                              }
                           >
                              {firstHero.move_speed}
                           </p>
                        )}
                     </div>
                     <div>
                        {secondHero.move_speed === undefined ? (
                           <p className="undefined">?</p>
                        ) : (
                           <p
                              className={
                                 firstHero.move_speed === undefined ||
                                 firstHero.move_speed === secondHero.move_speed
                                    ? "equalize_stat"
                                    : secondHero.move_speed >
                                      firstHero.move_speed
                                    ? "big"
                                    : "low"
                              }
                           >
                              {secondHero.move_speed}
                           </p>
                        )}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
