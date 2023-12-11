import React from "react";
import "./App.scss";
import {
   Header,
   Footer,
   HomePage,
   HeroStats,
   Equalize,
   ProPlayers,
   UnderDevelopment,
   LogIn,
   Player,
} from "./components";
import ShowAllHeroes from "./containers/ShowAllHeroes/index,";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Header />
            <Routes>
               <Route path="/dotabuff" element={<HomePage />} />
               <Route path="/" element={<HomePage />} />
               <Route path="/login" element={<LogIn />} />
               <Route exact path="/heroes" element={<ShowAllHeroes />} />
               <Route exact path="heroes/:Id" element={<HeroStats />} />
               <Route path="/heroes/equalize" element={<Equalize />} />
               <Route path="proplayers" element={<ProPlayers />} />
               <Route path="proplayers/:Id" element={<Player />} />
               <Route
                  path="/under_development"
                  element={<UnderDevelopment />}
               />
            </Routes>
            <Footer />
         </BrowserRouter>
      </div>
   );
}

export default App;
