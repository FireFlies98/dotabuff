import React from "react";
import "./ShowAllHeroes.scss";
import { AllHeroes } from "../../components";

class ShowAllHeroes extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         heroesFromBack: [],
         name: "",
         isLoading: true,
      };
   }

   componentDidMount = () => {
      fetch("https://api.opendota.com/api/heroStats")
         .then((res) => res.json())
         .then((result) => {
            this.setState((prevState) => {
               return {
                  ...prevState,
                  heroesFromBack: result,
                  isLoading: false,
               };
            });
         })
         .catch((e) => console.error(e));
   };

   render() {
      return (
         <>
            <AllHeroes
               heroesContainer={this.state.heroesFromBack}
               isLoading={this.state.isLoading}
            />
         </>
      );
   }
}

export default ShowAllHeroes;
