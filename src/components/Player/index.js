import "./Player.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { MyLoader } from "../index";
import { useParams } from "react-router";
import { ThreeDots } from "react-loader-spinner";

export default function Player() {
   const [playerProfile, setPlayerProfile] = useState([]);
   //const [playerMmr, setPlayerMmr] = useState(0);
   const [playerCompetitiveRank, setPlayerCompetitiveRank] = useState(0);
   const [playerLeaderboardRank, setPlayerLeaderboardRank] = useState(0);
   const [playerRankTier, setPlayerRankTier] = useState(0);
   const [playerSoloCompetitiveRank, setPlayerSoloCompetitiveRank] =
      useState(0);
   const [winLose, setWinLose] = useState("");
   const [games, setGames] = useState(0);
   const [winrate, setWinrate] = useState(0);
   const [kills, setKills] = useState(0);
   const [deaths, setDeaths] = useState(0);
   const [assists, setAssists] = useState(0);
   const [kda, setKda] = useState(0);
   const [goldPerMin, setGoldPerMin] = useState(0);
   const [xpPerMin, setXpPerMin] = useState(0);
   const [lastHits, setLastHits] = useState(0);
   const [denies, setDenies] = useState(0);
   const [heroDamage, setHeroDamage] = useState(0);
   const [towerDamage, setTowerDamage] = useState(0);
   const [heroHealing, setHeroHealing] = useState(0);
   const [towerKills, setTowerKills] = useState(0);
   const [neutralKills, setNeutralKills] = useState(0);
   const [courierKills, setCourierKills] = useState(0);
   const [loader, setLoader] = useState(true);
   const params = useParams();

   const getPlayerData = async () => {
      const player = await axios(
         `https://api.opendota.com/api/players/${params.Id}`
      );
      setPlayerProfile(player.data.profile);
      //setPlayerMmr(player.data.mmr_estimate);
      setPlayerCompetitiveRank(player.data.competitive_rank);
      setPlayerLeaderboardRank(player.data.leaderboard_rank);
      setPlayerRankTier(player.data.rank_tier);
      setPlayerSoloCompetitiveRank(player.data.solo_competitive_rank);
      setLoader(false);
   };
   const getWinLose = async () => {
      const WL = await axios(
         `https://api.opendota.com/api/players/${params.Id}/wl`
      );
      setWinLose(WL.data);
      setGames(WL.data.win + WL.data.lose);
      setWinrate((WL.data.win * 100) / (WL.data.win + WL.data.lose));
      setLoader(false);
   };
   const getInfo = async () => {
      const totals = await axios(
         `https://api.opendota.com/api/players/${params.Id}/totals`
      );
      setKills(totals.data[0].sum / totals.data[0].n);
      setDeaths(totals.data[1].sum / totals.data[1].n);
      setAssists(totals.data[2].sum / totals.data[2].n);
      setKda(totals.data[3].sum / totals.data[3].n);
      setGoldPerMin(totals.data[4].sum / totals.data[4].n);
      setXpPerMin(totals.data[5].sum / totals.data[5].n);
      setLastHits(totals.data[6].sum / totals.data[6].n);
      setDenies(totals.data[7].sum / totals.data[7].n);
      setHeroDamage(totals.data[11].sum / totals.data[11].n);
      setTowerDamage(totals.data[12].sum / totals.data[12].n);
      setHeroHealing(totals.data[13].sum / totals.data[13].n);
      setTowerKills(totals.data[15].sum / totals.data[15].n);
      setNeutralKills(totals.data[16].sum / totals.data[16].n);
      setCourierKills(totals.data[17].sum);
      setLoader(false);
   };
   useEffect(() => {
      getPlayerData();
      getWinLose();
      getInfo();
   }, []);

   return (
      <>
         {loader ? (
            <MyLoader />
         ) : (
            <div className="main_wrapper">
               <div className="main_header_container">
                  <div className="main_header_player">
                     <div className="player_image_container">
                        <img
                           src={playerProfile.avatarfull}
                           className="player_image"
                        />
                     </div>
                     <div className="player_information_container">
                        <div className="player_name_block">
                           <h2 className="player_name">
                              {playerProfile.name} / {playerProfile.personaname}{" "}
                           </h2>
                           <p className="player_id">
                              ID: {playerProfile.account_id}
                              <a href={playerProfile.profileurl}>
                                 <svg
                                    className="sc-fjdhpX kwMXpV link_icon_steam_player"
                                    viewBox="0 0 110 110"
                                 >
                                    <path d="M55,0C25.881,0,2.062,22.634,0.14,51.267l28.525,11.507C31.172,61.029,34.214,60,37.5,60 c0.706,0,1.396,0.063,2.076,0.155l13.426-19.691C53.021,29.159,62.19,20,73.5,20C84.822,20,94,29.178,94,40.5S84.822,61,73.5,61 c-0.01,0-0.021-0.001-0.031-0.001L52.944,74.385C52.97,74.754,53,75.124,53,75.5C53,84.061,46.061,91,37.5,91 c-7.565,0-13.855-5.422-15.218-12.591L2.118,70.107C8.685,93.134,29.866,110,55,110c30.376,0,55-24.624,55-55 C110,24.625,85.376,0,55,0z M37.5,84c-0.915,0-1.795-0.148-2.621-0.416l-0.004,0.01l-0.252-0.104 c-0.243-0.087-0.48-0.185-0.712-0.293l-6.805-2.801C28.945,84.295,32.902,87,37.5,87C43.851,87,49,81.852,49,75.5 S43.851,64,37.5,64c-1.406,0-2.747,0.265-3.993,0.727l7.2,2.904c0.05,0.021,0.1,0.039,0.149,0.061l0.56,0.226l-0.015,0.037 C44.131,69.368,46,72.213,46,75.5C46,80.194,42.194,84,37.5,84z M88,40.5C88,32.492,81.508,26,73.5,26S59,32.492,59,40.5 S65.492,55,73.5,55S88,48.508,88,40.5z M63,40.5C63,34.701,67.701,30,73.5,30S84,34.701,84,40.5S79.299,51,73.5,51 S63,46.299,63,40.5z"></path>
                                 </svg>
                              </a>
                           </p>
                        </div>
                        <div className="player_games_block">
                           <div className="player_games">
                              <h4 className="player_games_title">GAMES</h4>
                              <span className="player_games_all">
                                 {games === 0 ? (
                                    <ThreeDots
                                       width="75"
                                       height="26"
                                       color="#ffffff99"
                                    />
                                 ) : (
                                    games
                                 )}
                              </span>
                           </div>
                           <div className="player_games">
                              <h4 className="player_games_title">WINS</h4>
                              <span className="player_games_win">
                                 {winLose.win === undefined ? (
                                    <ThreeDots
                                       width="75"
                                       height="26"
                                       color="#ffffff99"
                                    />
                                 ) : (
                                    winLose.win
                                 )}
                              </span>
                           </div>
                           <div className="player_games">
                              <h4 className="player_games_title">LOSSES</h4>
                              <span className="player_games_lose">
                                 {winLose.lose === undefined ? (
                                    <ThreeDots
                                       width="75"
                                       height="26"
                                       color="#ffffff99"
                                    />
                                 ) : (
                                    winLose.lose
                                 )}
                              </span>
                           </div>
                           <div className="player_games">
                              <h4 className="player_games_title">WINRATE</h4>
                              <span className="player_games_winrate">
                                 {winrate === 0 ? (
                                    <ThreeDots
                                       width="75"
                                       height="26"
                                       color="#ffffff99"
                                    />
                                 ) : (
                                    winrate.toFixed(2)
                                 )}
                                 %
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="main_player_rank">
                     <img
                        className="player_rank_icon"
                        src="https://www.opendota.com/assets/images/dota2/rank_icons/rank_icon_8.png"
                        alt="player_rank_icon"
                     />
                     <span className="player_rank">
                        {playerLeaderboardRank === null ? (
                           <p>-</p>
                        ) : (
                           playerLeaderboardRank
                        )}
                     </span>
                  </div>
               </div>
               <div className="main_content">
                  <div className="content_rank_block">
                     <div className="player_mmr_block dark_block">
                        <span className="player_mmr">
                           MMR:{" "}
                           {/* <p className="mmr_value">{playerMmr.estimate}</p> */}
                           <p className="mmr_value"> - </p>
                        </span>
                     </div>
                     <div className="player_mmr_block ligth_block">
                        <span className="player_mmr">
                           TIER:
                           {playerRankTier > 0 ? (
                              <p className="mmr_value">{playerRankTier}</p>
                           ) : (
                              <p className="mmr_value">-</p>
                           )}
                        </span>
                     </div>
                     <div className="player_mmr_block dark_block">
                        <span className="player_mmr">
                           SOLO RANK:{" "}
                           {playerSoloCompetitiveRank > 0 ? (
                              <p className="mmr_value">
                                 {playerSoloCompetitiveRank}
                              </p>
                           ) : (
                              <p className="mmr_value">-</p>
                           )}
                        </span>
                     </div>
                     <div className="player_mmr_block ligth_block">
                        <span className="player_mmr">
                           COMPETITIVE RANK:{" "}
                           {playerCompetitiveRank > 0 ? (
                              <p className="mmr_value">
                                 {playerCompetitiveRank}
                              </p>
                           ) : (
                              <p className="mmr_value">-</p>
                           )}
                        </span>
                     </div>
                  </div>
                  <div className="content_total_stats_block">
                     <div className="content_total_kda">
                        <div className="kda_block dark_block">
                           <h6 className="kda_title">KILLS PER GAME</h6>
                           <span className="kills_stats">
                              {kills === 0 ? (
                                 <ThreeDots
                                    width="50"
                                    height="26"
                                    color="#ffffff99"
                                 />
                              ) : (
                                 kills.toFixed(0)
                              )}
                           </span>
                        </div>
                        <div className="kda_block ligth_block">
                           <h6 className="kda_title">DEATHS PER GAME</h6>
                           <span className="deaths_stats">
                              {deaths === 0 ? (
                                 <ThreeDots
                                    width="50"
                                    height="26"
                                    color="#ffffff99"
                                 />
                              ) : (
                                 deaths.toFixed(0)
                              )}
                           </span>
                        </div>
                        <div className="kda_block dark_block">
                           <h6 className="kda_title">ASSISTS PER GAME</h6>
                           <span className="assists_stats">
                              {assists === 0 ? (
                                 <ThreeDots
                                    width="50"
                                    height="26"
                                    color="#ffffff99"
                                 />
                              ) : (
                                 assists.toFixed(0)
                              )}
                           </span>
                        </div>
                        <div className="kda_block ligth_block">
                           <h6 className="kda_title">KDA</h6>
                           <span className="kda_stats">
                              {kda === 0 ? (
                                 <ThreeDots
                                    width="50"
                                    height="26"
                                    color="#ffffff99"
                                 />
                              ) : (
                                 kda.toFixed(0)
                              )}
                           </span>
                        </div>
                     </div>
                     <div className="content_total_stats">
                        <div className="total_stats_first_section">
                           <div className="stats_block dark_block">
                              <h6 className="stats_title">GOLD PER MIN: </h6>
                              <span className="gpm_stats">
                                 {goldPerMin === 0 ? (
                                    <ThreeDots
                                       width="35"
                                       height="20"
                                       color="#ffffff99"
                                    />
                                 ) : (
                                    goldPerMin.toFixed(0)
                                 )}
                              </span>
                           </div>
                           <div className="stats_block ligth_block">
                              <h6 className="stats_title">XP PER MIN: </h6>
                              <span className="xpr_stats">
                                 {xpPerMin === 0 ? (
                                    <ThreeDots
                                       width="35"
                                       height="20"
                                       color="#ffffff99"
                                    />
                                 ) : (
                                    xpPerMin.toFixed(0)
                                 )}
                              </span>
                           </div>
                           <div className="stats_block dark_block">
                              <h6 className="stats_title">LAST HITS:</h6>
                              <span className="stats_value">
                                 {lastHits === 0 ? (
                                    <ThreeDots
                                       width="35"
                                       height="20"
                                       color="#ffffff99"
                                    />
                                 ) : (
                                    lastHits.toFixed(0)
                                 )}
                              </span>
                           </div>
                           <div className="stats_block ligth_block">
                              <h6 className="stats_title">DENIES:</h6>
                              <span className="stats_value">
                                 {denies === 0 ? (
                                    <ThreeDots
                                       width="35"
                                       height="20"
                                       color="#ffffff99"
                                    />
                                 ) : (
                                    denies.toFixed(0)
                                 )}
                              </span>
                           </div>
                           <div className="stats_block dark_block">
                              <h6 className="stats_title">COURIER KILLS:</h6>
                              <span className="stats_value">
                                 {courierKills === 0 ? (
                                    <ThreeDots
                                       width="35"
                                       height="20"
                                       color="#ffffff99"
                                    />
                                 ) : (
                                    courierKills
                                 )}
                              </span>
                           </div>
                        </div>
                        <div className="total_stats_second_section">
                           <div className="stats_block ligth_block">
                              <h6 className="stats_title">HERO DAMAGE:</h6>
                              <span className="stats_value">
                                 {heroDamage === 0 ? (
                                    <ThreeDots
                                       width="35"
                                       height="20"
                                       color="#ffffff99"
                                    />
                                 ) : (
                                    heroDamage.toFixed(0)
                                 )}
                              </span>
                           </div>
                           <div className="stats_block dark_block">
                              <h6 className="stats_title">TOWER DAMAGE:</h6>
                              <span className="stats_value">
                                 {towerDamage === 0 ? (
                                    <ThreeDots
                                       width="35"
                                       height="20"
                                       color="#ffffff99"
                                    />
                                 ) : (
                                    towerDamage.toFixed(0)
                                 )}
                              </span>
                           </div>
                           <div className="stats_block ligth_block">
                              <h6 className="stats_title">HERO HEALING:</h6>
                              <span className="stats_value">
                                 {heroHealing === 0 ? (
                                    <ThreeDots
                                       width="35"
                                       height="20"
                                       color="#ffffff99"
                                    />
                                 ) : (
                                    heroHealing.toFixed(0)
                                 )}
                              </span>
                           </div>
                           <div className="stats_block dark_block">
                              <h6 className="stats_title">TOWER KILLS:</h6>
                              <span className="stats_value">
                                 {towerKills === 0 ? (
                                    <ThreeDots
                                       width="35"
                                       height="20"
                                       color="#ffffff99"
                                    />
                                 ) : (
                                    towerKills.toFixed(0)
                                 )}
                              </span>
                           </div>
                           <div className="stats_block ligth_block">
                              <h6 className="stats_title">NEUTRAL KILLS:</h6>
                              <span className="stats_value">
                                 {neutralKills === 0 ? (
                                    <ThreeDots
                                       width="35"
                                       height="20"
                                       color="#ffffff99"
                                    />
                                 ) : (
                                    neutralKills.toFixed(0)
                                 )}
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </>
   );
}
