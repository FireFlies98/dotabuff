import "./HeroStats.scss";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { MyLoader } from "../index";
import { Link } from "react-router-dom";

export default function HeroStats() {
   const [heroStat, setHeroStat] = useState({});
   const [loader, setLoader] = useState(true);

   const params = useParams();
   const API = "https://api.opendota.com";

   useEffect(() => {
      getHeroStats();
   }, [params]);

   const getHeroStats = async () => {
      const result = await axios("https://api.opendota.com/api/heroStats");
      setLoader(false);
      const res = result.data.find(
         (e) => e.localized_name.toLowerCase() === params.Id.toLowerCase()
      );
      setHeroStat(res);
   };

   return (
      <>
         {loader ? (
            <MyLoader />
         ) : (
            <main className="hero_stat_main">
               <div className="hero_wrap">
                  <div className="hero_header_wrap">
                     <img
                        alt="hero_background"
                        src={`${API + heroStat.img}`}
                        className="hero_header_background"
                     />
                     <div className="hero_header">
                        <img
                           src={`${API + heroStat.img}`}
                           alt="hero_image"
                           className="hero_image"
                        />
                        <div className="hero_name_block">
                           <h2 className="hero_name">
                              {heroStat.localized_name}
                           </h2>
                           <p className="hero_roles">
                              Roles:{" "}
                              <span className="role">
                                 {heroStat.roles + " "}
                              </span>
                           </p>
                        </div>
                        <div className="hero_base_stats_container">
                           <div className="hero_base_stats_block">
                              <img
                                 src="https://cdnb.artstation.com/p/assets/images/images/012/438/897/large/alexandra-bisson-001-str.jpg?1534811821&dl=1"
                                 alt="str"
                                 width="30"
                                 className="base_stat_icon"
                              />
                              <span className="base_stat_value str">
                                 {heroStat.base_str} + {heroStat.str_gain}
                              </span>
                           </div>
                           <div className="hero_base_stats_block">
                              <img
                                 src="https://cdnb.artstation.com/p/assets/images/images/012/438/899/large/alexandra-bisson-002-agi.jpg?1534811827&dl=1"
                                 alt="agi"
                                 width="30"
                                 className="base_stat_icon"
                              />
                              <span className="base_stat_value agi">
                                 {heroStat.base_agi} + {heroStat.agi_gain}
                              </span>
                           </div>
                           <div className="hero_base_stats_block">
                              <img
                                 src="https://i.imgur.com/hy4drbj.png"
                                 alt="int"
                                 width="30"
                                 className="base_stat_icon"
                              />
                              <span className="base_stat_value int">
                                 {heroStat.base_int} + {heroStat.int_gain}
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="hero_stats_wrap">
                     <div className="hero_stats_container">
                        <div className="hero_stat_block_light">
                           <p className="stat_description">BASE ATTACK:</p>
                           <span className="stat_value">
                              {heroStat.base_attack_min} -{" "}
                              {heroStat.base_attack_max}
                           </span>
                        </div>
                        <div className="hero_stat_block_dark">
                           <p className="stat_description">ATTACK RANGE:</p>
                           <span className="stat_value">
                              {heroStat.attack_range}
                           </span>
                        </div>
                        <div className="hero_stat_block_light">
                           <p className="stat_description">ATTACK RATE:</p>
                           <span className="stat_value">
                              {heroStat.attack_rate}
                           </span>
                        </div>
                        <div className="hero_stat_block_dark">
                           <p className="stat_description">ATTACK TYPE:</p>
                           <span className="stat_value">
                              {heroStat.attack_type}
                           </span>
                        </div>
                     </div>
                     <div className="hero_stats_container">
                        <div className="hero_stat_block_light">
                           <p className="stat_description">BASE HEALTH:</p>
                           <span className="stat_value">
                              {heroStat.base_health}
                           </span>
                        </div>
                        <div className="hero_stat_block_dark">
                           <p className="stat_description">HEALTH REGEN:</p>
                           <span className="stat_value">
                              {heroStat.base_health_regen}
                           </span>
                        </div>
                        <div className="hero_stat_block_light">
                           <p className="stat_description">BASE MANA:</p>
                           <span className="stat_value">
                              {heroStat.base_mana}
                           </span>
                        </div>
                        <div className="hero_stat_block_dark">
                           <p className="stat_description">MANA REGEN:</p>
                           <span className="stat_value">
                              {heroStat.base_mana_regen}
                           </span>
                        </div>
                     </div>
                     <div className="hero_stats_container">
                        <div className="hero_stat_block_light">
                           <p className="stat_description">BASE ARMOR:</p>
                           <span className="stat_value">
                              {heroStat.base_armor}
                           </span>
                        </div>
                        <div className="hero_stat_block_dark">
                           <p className="stat_description">MAGIC RESISTANCE:</p>
                           <span className="stat_value">
                              {heroStat.base_mr}%
                           </span>
                        </div>
                        <div className="hero_stat_block_light">
                           <p className="stat_description">MOVE SPEED:</p>
                           <span className="stat_value">
                              {heroStat.move_speed}
                           </span>
                        </div>
                        {heroStat.turn_rate > 0 && (
                           <div className="hero_stat_block_dark">
                              <p className="stat_description">TURN SPEED:</p>
                              <div className="stat_value">
                                 {heroStat.turn_rate}
                              </div>
                           </div>
                        )}
                     </div>
                     <div className="hero_stats_container">
                        <div className="hero_stat_block_light">
                           <p className="stat_description">PRIMARY ATTRIBUT:</p>
                           <span className="stat_value">
                              {heroStat.primary_attr}
                           </span>
                        </div>
                        <div className="hero_stat_block_dark">
                           <p className="stat_description">NUMBER OF LEGS:</p>
                           <span className="stat_value">{heroStat.legs}</span>
                        </div>
                        <div className="hero_stat_block_light">
                           <p className="stat_description">CM ENABLED:</p>
                           <span className="stat_value">
                              {heroStat.cm_enabled ? "YES" : "NO"}
                           </span>
                        </div>
                        <div className="hero_stat_block_dark">
                           <p className="stat_description">PROJECTILE SPEED:</p>
                           <span className="stat_value">
                              {heroStat.projectile_speed}
                           </span>
                        </div>
                     </div>
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
