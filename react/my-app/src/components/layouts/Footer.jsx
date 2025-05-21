import {Link} from "react-router-dom";
export default function Footer(){
    return(
        <>
        
     
     
        {/* <!-- footer section start --> */}
   
        <div className="footer_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="footer_logo"><img src="/assets/images/footer-logo.png"/></div>
               </div>
               <div className="col-sm-6 col-md-6 col-lg-3">

                  {/* <h4 className="footer_taital">NAVIGATION</h4> */}

                  <div className="footer_menu_main">
                     <div className="footer_menu_left">
                        <div className="footer_menu">
                           <ul>
                              {/* <li><a href="">Home</a></li>
                              <li className="nav-item"><Link to="/Donate" className="nav-link"> Donate</Link> </li>
                              <li className="nav-item"><Link to="/Contact" className="nav-link"> Contact Us</Link> </li> */}
                    

                              
                           </ul>
                        </div>
                     </div>
                     <div className="footer_menu_right">
                        <div className="footer_menu">
                           <ul>
                           {/* <li><a href="about.html">About</a></li>
                              <li><a href="news.html">News</a></li>
                              <li><a href="mission.html">Our Mission</a></li> */}

                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
              
               <div className="col-sm-6 col-md-6 col-lg-3">
                  <h4 className="footer_taital">address</h4>
                  <p className="footer_text">phase-8, sec 74</p>
                  <p className="footer_text">Mohali</p>
                  <p className="footer_text">Arun143gamil.com.com</p>

               </div>
            </div>
            <div className="footer_section_2">
               <div className="row">
                  <div className="col-sm-4 col-md-4 col-lg-3">
                     <div className="social_icon">
                        <ul>
                           <li><a href="#"><img src="/assets/images/fb-icon.png"/></a></li>
                           <li><a href="#"><img src="/assets/images/twitter-icon.png"/></a></li>
                           <li><a href="#"><img src="/assets/images/linkedin-icon.png"/></a></li>
                           <li><a href="#"><img src="/assets/images/instagram-icon.png"/></a></li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-sm-8 col-md-8 col-lg-9">
                     <input type="text" className="address_text" placeholder="Enter your Email" name="text"/>
                     <button type="button" className="get_bt">SUBSCRIBE</button>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* <!-- footer section end --> */}
      
     
        </>
    )
}