import "../../styles/mixins.scss";
import "./Header.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import axios from "axios";
import Modal from "react-modal";

const styleModalWindow = {
   content: {
      position: "fixed",
      width: "100%",
      height: "8%",
      top: "13%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      padding: "0",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      background: "#2e3740",
      display: "flex",
      "justify-content": "center",
      "align-items": "center",
      "z-index": "100",
   },
};

export default function Header() {
   const [heroes, setHeroes] = useState([]);
   const [value, setValue] = useState("");
   const [isOpen, setIsOpen] = useState(false);
   const [error, setError] = useState(false);
   const [modalIsOpen, setModalIsOpen] = useState(false);
   const navigate = useNavigate();

   const upRef = useRef(null);

   const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;

   const getHeroes = async () => {
      const result = await axios("https://api.opendota.com/api/heroStats");
      setHeroes(result.data);
   };
   useEffect(() => {
      getHeroes();
   }, []);

   useLayoutEffect(() => {
      upRef.current.scrollIntoView();
   }, []);

   const API = "https://cdn.cloudflare.steamstatic.com";

   const filteredHeroes = heroes.filter((hero) => {
      return hero.localized_name.toLowerCase().includes(value.toLowerCase());
   });

   const itemClickHandler = (e) => {
      setValue(e.target.textContent);
      setIsOpen(false);
      setValue("");
      setError(false);
   };

   const inputClickHandler = () => {
      setIsOpen(true);
   };

   const handleKeyEnter = (event) => {
      if (event.key === "Enter") {
         event.preventDefault();
         filteredHeroes.map((item) => {
            return value.toLowerCase() === item.localized_name.toLowerCase()
               ? (navigate(`/heroes/${value}`), setValue(""), setError(false))
               : setError(true);
         });
      }
   };

   const setActive = ({ isActive }) =>
      isActive ? "active_link" : "header_nav";

   const showingTheModalWindow = () => {
      setModalIsOpen(!modalIsOpen);
   };

   return (
      <>
         <header className="header" ref={upRef}>
            <div className="header_wrap">
               <div className="header_container_nav">
                  <div>
                     <input id="menu__toggle" type="checkbox" />
                     <label className="navigation__btn" htmlFor="menu__toggle">
                        <span></span>
                     </label>
                     <ul className="mobile--navigation menu__box">
                        <Link to="/heroes" className="navigation-menu__item">
                           <li>Heroes</li>
                        </Link>
                        <Link
                           to="/proplayers"
                           className="navigation-menu__item"
                        >
                           <li>Pro Players</li>
                        </Link>
                        <Link
                           to="/under_development"
                           className="navigation-menu__item"
                        >
                           <li>Teams</li>
                        </Link>
                        <Link
                           to="/under_development"
                           className="navigation-menu__item"
                        >
                           <li>Leagues</li>
                        </Link>
                     </ul>
                  </div>
                  <Link to="/">
                     <div className="navigation_logo_block">
                        <p className="nav_logo">DOTABUFF</p>
                     </div>
                  </Link>
                  <div>
                     <ul className="header_navigation">
                        <NavLink
                           to="/heroes"
                           className={setActive}
                           onClick={!!isOpen}
                        >
                           <li>Heroes</li>
                        </NavLink>
                        <NavLink
                           to="/proplayers"
                           className={setActive}
                           onClick={!!isOpen}
                        >
                           <li>Pro Players</li>
                        </NavLink>
                        <NavLink
                           to="/under_development"
                           className={setActive}
                           onClick={!!isOpen}
                        >
                           <li>Teams</li>
                        </NavLink>
                        <NavLink
                           to="/under_development"
                           className={setActive}
                           onClick={!!isOpen}
                        >
                           <li>Leagues</li>
                        </NavLink>
                     </ul>
                  </div>
               </div>
               <div className="navigation_form">
                  <div className="search_icon_block">
                     <img
                        src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png"
                        alt="search"
                        className="search_icon"
                        onClick={showingTheModalWindow}
                     />
                  </div>
                  <Modal
                     style={styleModalWindow}
                     ariaHideApp={false}
                     onRequestClose={showingTheModalWindow}
                     isOpen={modalIsOpen}
                     overlayClassName="overplay"
                  >
                     <form className="form">
                        <input
                           type="text"
                           placeholder="Search your hero"
                           className="input"
                           value={value}
                           onClick={inputClickHandler}
                           onKeyDown={handleKeyEnter}
                           pattern={regName}
                           onChange={(event) => setValue(event.target.value)}
                        />
                     </form>
                  </Modal>
                  <form className="search_form">
                     <input
                        type="text"
                        placeholder="Search your hero"
                        className="search_input"
                        value={value}
                        onClick={inputClickHandler}
                        onKeyDown={handleKeyEnter}
                        pattern={regName}
                        onChange={(event) => setValue(event.target.value)}
                     />
                     {error && (
                        <div className="search_error">
                           Such a hero does not exist !
                        </div>
                     )}
                     <ul className="autocomplete">
                        {value && isOpen
                           ? filteredHeroes.map((item) => {
                                return (
                                   <Link
                                      to={`/heroes/${item.localized_name.toLowerCase()}`}
                                      className="autocomplete_item"
                                      onClick={itemClickHandler}
                                      key={item.localized_name}
                                   >
                                      <img
                                         src={`${API + item.img}`}
                                         alt="hero"
                                         className="autocomplete_item_img"
                                      />
                                      <div className="autocomplete_item_container">
                                         <h3 className="autocomplete_item_name">
                                            {item.localized_name.toLowerCase()}{" "}
                                            /
                                            <p className="autocomplete_item_attribute">
                                               {item.primary_attr}
                                            </p>
                                         </h3>
                                         <p className="autocomplete_item_role">
                                            {item.roles + " "}
                                         </p>
                                      </div>
                                   </Link>
                                );
                             })
                           : null}
                     </ul>
                  </form>
               </div>
               <div className="header_log_in">
                  <NavLink
                     to="/login"
                     className={({ isActive }) =>
                        isActive
                           ? "active_link active_login"
                           : "header_nav login"
                     }
                  >
                     Log In
                  </NavLink>
               </div>
            </div>
         </header>
      </>
   );
}
