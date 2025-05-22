 import {Link} from "react-router-dom"
import Footer from "./layouts/Footer"
import Header from "./layouts/Header"
export default function Home(){
    return(
  <>
      {/* <!-- banner section start --> */}
      <div className="banner_section layout_padding">
         <div className="container">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
               <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                  {/* <li data-target="#carouselExampleIndicators" data-slide-to="4"></li> */}
               </ol>
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <div className="row">
                        <div className="col-sm-12">
                           <h1 className="banner_taital">HELP THE HELPLESS</h1>
                           <p className="banner_text">"Every child deserves a chance to dream, learn, and grow—your support can turn their struggles into strength and give them the future they deserve." </p>
                           <div className="read_bt"><a href="#">Read More</a></div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="col-sm-12">
                        <h1 className="banner_taital">Help change lives.</h1>
                        <p className="banner_text">"When you lend a hand to a child in need, you're not just giving support—you’re giving hope, dignity, and a reason to smile." </p>
                        <div className="read_bt"><a href="#">Read More</a></div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="col-sm-12">
                        <h1 className="banner_taital">Help bring hope.</h1>
                        <p className="banner_text">"Help turn tears into laughter and struggles into opportunities for children who deserve a brighter tomorrow." </p>
                        <div className="read_bt"><a href="#">Read More</a></div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="col-sm-12">
                        <h1 className="banner_taital">Help spread kindness.</h1>
                        <p className="banner_text">"Together, we can break the cycle of poverty and hardship, giving every child the chance to dream big and achieve their fullest potential." </p>
                        <div className="read_bt"><a href="#">Read More</a></div>
                     </div>
                  </div>
                  {/* <div className="carousel-item">
                     <div className="col-sm-12">
                        <h1 className="banner_taital">Help Poor Child</h1>
                        <p className="banner_text">Suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going </p>
                        <div className="read_bt"><a href="#">Read More</a></div>
                     </div>
                  </div> */}
               </div>
            </div>
         </div>
         <div className="donation_box">
            <h4 className="donation_taital">Contact For Donation</h4>
            <div className="mail_box">
               <input type="" className="mail_text" placeholder="Your Name" name="Your Name" />
               <input type="" className="mail_text" placeholder="Email" name="Email" />
               <input type="" className="mail_text" placeholder="Phone" name="Phone" />
            </div>
            <div className="send_bt"><a href="#">Send</a></div>
         </div>
         <div className="fundraise_section">
            <div className="fundraise_section_main">
               <div className="row">
                  <div className="col-lg-4">
                     <div className="box_main">
                        <div className="icon_1"><img src="/assets/images/icon-1.png"/></div>
                        <h4 className="volunteer_text">VOLUNTEERS</h4>
                        <p className="lorem_text">Lorem Ipsum generators on the Internet tend to repeat predefined</p>
                        <div className="join_bt"><a href="#">Join Now</a></div>
                     </div>
                  </div>
                  <div className="col-lg-4">
                     <div className="box_main active">
                        <div className="icon_1"><img src="/assets/images/icon-2.png"/></div>
                        <h4 className="volunteer_text">FUNDRAISE</h4>
                        <p className="lorem_text">Lorem Ipsum generators on the Internet tend to repeat predefined</p>
                        <div className="join_bt"><a href="#">Join Now</a></div>
                     </div>
                  </div>
                  <div className="col-lg-4">
                     <div className="box_main">
                        <div className="icon_1"><img src="/assets/images/icon-3.png"/></div>
                        <h4 className="volunteer_text">DONATION</h4>
                        <p className="lorem_text">Lorem Ipsum generators on the Internet tend to repeat predefined</p>
                        <div className="join_bt"><a href="#">Join Now</a></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
     
      {/* <!-- banner section end --> */}

      {/* <!-- about section start --> */}
      <div className="about_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-sm-8">
                  <h2 className="about_taital">about Charity</h2>
                  <p className="about_text">many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If youmany variations of passages of Lorem Ipsum 
                     available, but the majority have suffered 
                     alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you many
                     variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, byinjected humour, or randomised words which don't look even slightly believable. If you
                  </p>
                  <div className="readmore_bt"><a href="#">Read more</a></div>
               </div>
               <div className="col-sm-4">
                  <div className="about_img"><img src="/assets/images/about-img.png"/></div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- about section end --> */}

      {/* <!-- mission section start --> */}
      <div className="mission_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <h1 className="mission_taital">Mission causes</h1>
                  <p className="mission_text">going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
               </div>
            </div>
         </div>
         <div className="mission_section_2">
            <div className="row">
               <div className="offset-md-2"></div>
               <div className="col-md-5">
                  <div className="container_main">
                     <img src="/assets/images/img-1.png" alt="Avatar" className="image"/>
                     <div className="overlay">
                        <div className="text">
                           <h4 className="some_text">whichalteration in some </h4>
                           <p className="alteration_text">Alteration in some form, by injected humour, or randomised words whichalteration in some form, by injected humour, or randomised words which</p>
                           <div className="btn_main">
                              <div className="donate_bt"><a href="#">Read More</a></div>
                              <div className="donate_bt"><a href="donate.html">Donate Now</a></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-md-5">
                  <div className="container_main">
                     <img src="/assets/images/img-2.png" alt="Avatar" className="image"/>
                     <div className="overlay">
                        <div className="text">
                           <h4 className="some_text">whichalteration in some </h4>
                           <p className="alteration_text">Alteration in some form, by injected humour, or randomised words whichalteration in some form, by injected humour, or randomised words which</p>
                           <div className="btn_main">
                              <div className="donate_bt"><a href="#">Read More</a></div>
                              <div className="donate_bt"><a href="donate.html">Donate Now</a></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="mission_section_2">
            <div className="row">
               <div className="col-md-5">
                  <div className="container_main">
                     <img src="/assets/images/img-3.png" alt="Avatar" className="image"/>
                     <div className="overlay">
                        <div className="text">
                           <h4 className="some_text">whichalteration in some </h4>
                           <p className="alteration_text">Alteration in some form, by injected humour, or randomised words whichalteration in some form, by injected humour, or randomised words which</p>
                           <div className="btn_main">
                              <div className="donate_bt"><a href="#">Read More</a></div>
                              <div className="donate_bt"><a href="donate.html">Donate Now</a></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-md-5">
                  <div className="container_main">
                     <img src="/assets/images/img-4.png" alt="Avatar" className="image"/>
                     <div className="overlay">
                        <div className="text">
                           <h4 className="some_text">whichalteration in some </h4>
                           <p className="alteration_text">Alteration in some form, by injected humour, or randomised words whichalteration in some form, by injected humour, or randomised words which</p>
                           <div className="btn_main">
                              <div className="donate_bt"><a href="#">Read More</a></div>
                              <div className="donate_bt"><a href="donate.html">Donate Now</a></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="offset-md-2"></div>
            </div>
         </div>
         <div className="mission_section_2">
            <div className="row">
               <div className="offset-md-2"></div>
               <div className="col-md-5">
                  <div className="container_main">
                     <img src="/assets/images/img-5.png" alt="Avatar" className="image"/>
                     <div className="overlay">
                        <div className="text">
                           <h4 className="some_text">whichalteration in some </h4>
                           <p className="alteration_text">Alteration in some form, by injected humour, or randomised words whichalteration in some form, by injected humour, or randomised words which</p>
                           <div className="btn_main">
                              <div className="donate_bt"><a href="#">Read More</a></div>
                              <div className="donate_bt"><a href="donate.html">Donate Now</a></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-md-5">
                  <div className="container_main">
                     <img src="/assets/images/img-6.png" alt="Avatar" className="image"/>
                     <div className="overlay">
                        <div className="text">
                           <h4 className="some_text">whichalteration in some </h4>
                           <p className="alteration_text">Alteration in some form, by injected humour, or randomised words whichalteration in some form, by injected humour, or randomised words which</p>
                           <div className="btn_main">
                              <div className="donate_bt"><a href="#">Read More</a></div>
                              <div className="donate_bt"><a href="donate.html">Donate Now</a></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- mission section end --> */}

      {/* <!-- news section start --> */}
      <div className="news_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <h1 className="news_taital">FEATURED CAUSE</h1>
                  <p className="news_text">going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
               </div>
            </div>
            <div className="news_section_2">
               <div className="row">
                  <div className="col-md-6">
                     <div className="news_img"><img src="/assets/images/news-img.png"/></div>
                  </div>
                  <div className="col-md-6">
                     <h1 className="give_taital">GIVE EDUCATION</h1>
                     <p className="ipsum_text">variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by<br/>
                        injected humour, or randomised v<br/>
                        ariations of passages of Lorem Ipsum <br/>
                        available, but the majority have suffered alteration in some form, by injected humour, or randomised 
                     </p>
                     <h5 className="raised_text">Raised: $60,010     <span className="goal_text">Goal: $70,000</span></h5>
                     <div className="donate_btn_main">
                        <div className="readmore_btn"><a href="#">Read More</a></div>
                        <div className="readmore_btn_1"><a href="donate.html">Donate Now</a></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- news section end --> */}

      {/* <!-- events section start --> */}
      <div className="events_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <h1 className="news_taital">FEATURED CAUSE</h1>
                  <p className="news_text">going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
               </div>
            </div>
            <div className="events_section_2">
               <div className="row">
                  <div className="col-md-5">
                     <div className="img_7"><img src="/assets/images/img-7.png" className="img_7"/></div>
                     <div className="date_bt">
                        <div className="date_text active"><a href="#">01</a></div>
                        <div className="date_text"><a href="#">FEB</a></div>
                     </div>
                  </div>
                  <div className="col-md-7">
                     <h1 className="give_taital_1">The Internet tend to repeat</h1>
                     <p className="ipsum_text_1">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literatureContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature</p>
                     <h5 className="raised_text_1">Raised: $60,010 <span className="goal_text">Goal: $70,000</span></h5>
                     <div className="donate_btn_main">
                        <div className="readmore_btn"><a href="#">Read More</a></div>
                        <div className="readmore_btn_1"><a href="donate.html">Donate Now</a></div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="events_section_2">
               <div className="row">
                  <div className="col-md-5">
                     <div className="img_7"><img src="/assets/images/img-8.png" className="img_7"/></div>
                     <div className="date_bt">
                        <div className="date_text active"><a href="#">10</a></div>
                        <div className="date_text"><a href="#">FEB</a></div>
                     </div>
                  </div>
                  <div className="col-md-7">
                     <h1 className="give_taital_1">The Internet tend to repeat</h1>
                     <p className="ipsum_text_1">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literatureContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature</p>
                     <h5 className="raised_text_1">Raised: $60,010     <span className="goal_text">Goal: $70,000</span></h5>
                     <div className="donate_btn_main">
                        <div className="readmore_btn"><a href="#">Read More</a></div>
                        <div className="readmore_btn_1"><a href="donate.html">Donate Now</a></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- events section end --> */}

      {/* <!-- donate section start --> */}
      <div className="donate_section layout_padding">
         <div className="container">
            <h1 className="donate_taital">Donate people Says </h1>
            <div className="donate_taital_main">
               <div id="main_slider" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                     <div className="carousel-item active">
                        <div className="donate_left">
                           <div className="client_img"><img src= "/assets/images/karan.jpg"/></div>
                        </div>
                        <div className="donate_right">
                           <h3 className="client_name_text">Karan Aujla</h3>
                           <p className="dummy_text">If you are going  you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefinedIf you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined</p>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <div className="donate_left">
                           <div className="client_img"><img src="/assets/images/trp.jpg"/></div>
                        </div>
                        <div className="donate_right">
                           <h3 className="client_name_text">Trump</h3>
                           <p className="dummy_text">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefinedIf you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined</p>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <div className="donate_left">
                           <div className="client_img"><img src="/assets/images/cheemay.jpg"/></div>
                        </div>
                        <div className="donate_right">
                           <h3 className="client_name_text">Cheema y</h3>
                           <p className="dummy_text">If you are going to uIpsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefinedIf you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined</p>
                        </div>
                     </div>
                  </div>
                  <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                  <i className="fa fa-angle-right"></i>
                  </a>
                  <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                  <i className="fa fa-angle-left"></i>
                  </a>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- donate section end --> */}
 
    
   
      
  </>
       
    )
}