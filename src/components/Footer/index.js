import "./Footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
   return (
      <>
         <footer className="footer">
            <div className="footer_wrap">
               <div className="footer_wrapper">
                  <div className="footer_link">
                     <div className="link_container">
                        <a href="/" className="link_up hover">
                           DOTABUFF
                        </a>
                        <a href="https://github.com/FireFlies98/myDotaBuff.git ">
                           <svg
                              aria-hidden="true"
                              viewBox="0 0 300 300"
                              className="link_icon_git hover"
                           >
                              <path d="M150,4C67.3,4,0.3,71,0.3,153.7c0,66.1,42.9,122.2,102.4,142c7.5,1.4,10.2-3.2,10.2-7.2c0-3.6-0.1-13-0.2-25.5 c-41.6,9-50.4-20.1-50.4-20.1c-6.8-17.3-16.6-21.9-16.6-21.9c-13.6-9.3,1-9.1,1-9.1c15,1.1,22.9,15.4,22.9,15.4 c13.4,22.9,35,16.3,43.6,12.4c1.4-9.7,5.2-16.3,9.5-20c-33.2-3.8-68.2-16.6-68.2-74c0-16.3,5.8-29.7,15.4-40.2 c-1.5-3.8-6.7-19,1.5-39.6c0,0,12.6-4,41.2,15.3c11.9-3.3,24.7-5,37.5-5c12.7,0.1,25.5,1.7,37.5,5c28.6-19.4,41.1-15.3,41.1-15.3 c8.2,20.6,3,35.8,1.5,39.6c9.6,10.5,15.4,23.8,15.4,40.2c0,57.5-35,70.2-68.4,73.9c5.4,4.6,10.2,13.8,10.2,27.7 c0,20-0.2,36.2-0.2,41.1c0,4,2.7,8.7,10.3,7.2c59.4-19.8,102.3-75.9,102.3-142C299.7,71,232.7,4,150,4z"></path>
                           </svg>
                        </a>
                     </div>
                     <div>
                        <a
                           href="https://play.google.com/store/apps/details?id=com.opendota.mobile&hl=en"
                           className="hover"
                        >
                           <img
                              alt="google play"
                              src="https://www.opendota.com/assets/images/google_play_store.png"
                              className="google"
                           />
                        </a>
                     </div>
                     <div>
                        <a
                           href="https://apps.apple.com/us/app/opendota/id1354762555?ls=1"
                           className="hover"
                        >
                           <img
                              alt="app store"
                              src="https://www.opendota.com/assets/images/apple_app_store.png"
                              className="apple"
                           />
                        </a>
                     </div>
                  </div>
                  <div className="footer_text_border">
                     <p className="footer_text">
                        Open source Dota 2 data platform - powered by{" "}
                        <a
                           href="https://store.steampowered.com/"
                           className="hover"
                        >
                           <svg
                              className="sc-fjdhpX kwMXpV link_icon_steam"
                              viewBox="0 0 110 110"
                              width="15"
                           >
                              <path d="M55,0C25.881,0,2.062,22.634,0.14,51.267l28.525,11.507C31.172,61.029,34.214,60,37.5,60 c0.706,0,1.396,0.063,2.076,0.155l13.426-19.691C53.021,29.159,62.19,20,73.5,20C84.822,20,94,29.178,94,40.5S84.822,61,73.5,61 c-0.01,0-0.021-0.001-0.031-0.001L52.944,74.385C52.97,74.754,53,75.124,53,75.5C53,84.061,46.061,91,37.5,91 c-7.565,0-13.855-5.422-15.218-12.591L2.118,70.107C8.685,93.134,29.866,110,55,110c30.376,0,55-24.624,55-55 C110,24.625,85.376,0,55,0z M37.5,84c-0.915,0-1.795-0.148-2.621-0.416l-0.004,0.01l-0.252-0.104 c-0.243-0.087-0.48-0.185-0.712-0.293l-6.805-2.801C28.945,84.295,32.902,87,37.5,87C43.851,87,49,81.852,49,75.5 S43.851,64,37.5,64c-1.406,0-2.747,0.265-3.993,0.727l7.2,2.904c0.05,0.021,0.1,0.039,0.149,0.061l0.56,0.226l-0.015,0.037 C44.131,69.368,46,72.213,46,75.5C46,80.194,42.194,84,37.5,84z M88,40.5C88,32.492,81.508,26,73.5,26S59,32.492,59,40.5 S65.492,55,73.5,55S88,48.508,88,40.5z M63,40.5C63,34.701,67.701,30,73.5,30S84,34.701,84,40.5S79.299,51,73.5,51 S63,46.299,63,40.5z"></path>
                           </svg>
                        </a>
                     </p>
                  </div>
               </div>
               <ul className="footer_navigation">
                  <Link to="/under_development" className="footer_nav">
                     <li>About</li>
                  </Link>
                  <Link to="/under_development" className="footer_nav">
                     <li>Privacy and Terms</li>
                  </Link>
                  <Link to="/under_development" className="footer_nav">
                     <li>Blog</li>
                  </Link>
                  <Link to="/under_development" className="footer_nav">
                     <li>API Docs</li>
                  </Link>
               </ul>
            </div>
         </footer>
      </>
   );
}
