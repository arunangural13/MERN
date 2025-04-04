import {Link} from "react-router-dom"
export default function Home(){
    return(
      
  <>
  
      {/* <!-- header section start --> */}
      <div className="header_section">
         
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand"/>
                <a href="index.html">
                <img src="/assets/images/logo.png"/>
                </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                     <a className="nav-link" href="index.html">Home</a>
                  </li>
                     
                <Link to={'/About'} >
                <li className="nav-item">
              
                     <a className="nav-link" href="">About</a>
                  </li>
               
                </Link>

                  <Link to={'/Donate'} >
                  <li className="nav-item">
                     <a className="nav-link" href="">Donate</a>
                     </li>
                </Link>

                  <Link to={'/News'} >
                  <li className="nav-item">
                     <a className="nav-link" href="">News</a>
                     </li>
               
                </Link>

                <Link to={'/Contact'} >
                <li className="nav-item ">
                     <a className="nav-link" href="">Contact Us</a></li>
               
                </Link>

                <Link to={'/Mission'} >
                <li className="nav-item ">
                     <a className="nav-link" href="">Our Mission </a>
               </li>
                </Link>
               </ul>
               <form className="form-inline my-2 my-lg-0">
                  <div className="search_icon"><a href="#">
                    <img src="/assets/images/search-icon.png"/>
                    </a></div>
                  <button className="donate_btn" type="submit">Donate Now</button>
               </form>
            </div>
         </nav>
      {/* <!-- header section end --> */}

      {/* <!-- banner section start --> */}
      <div className="banner_section layout_padding">
         <div className="container">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
               <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
               </ol>
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <div className="row">
                        <div className="col-sm-12">
                           <h1 className="banner_taital">HELP POOR</h1>
                           <p className="banner_text">Suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going </p>
                           <div className="read_bt"><a href="#">Read More</a></div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="col-sm-12">
                        <h1 className="banner_taital">Help Poor Child</h1>
                        <p className="banner_text">Suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going </p>
                        <div className="read_bt"><a href="#">Read More</a></div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="col-sm-12">
                        <h1 className="banner_taital">Help Poor Child</h1>
                        <p className="banner_text">Suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going </p>
                        <div className="read_bt"><a href="#">Read More</a></div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="col-sm-12">
                        <h1 className="banner_taital">Help Poor Child</h1>
                        <p className="banner_text">Suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going </p>
                        <div className="read_bt"><a href="#">Read More</a></div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="col-sm-12">
                        <h1 className="banner_taital">Help Poor Child</h1>
                        <p className="banner_text">Suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going </p>
                        <div className="read_bt"><a href="#">Read More</a></div>
                     </div>
                  </div>
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
      <div class="about_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-sm-8">
                  <h2 className="about_taital">about Chrity</h2>
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
      <div class="mission_section layout_padding">
         <div class="container">
            <div class="row">
               <div class="col-sm-12">
                  <h1 class="mission_taital">Mission causes</h1>
                  <p class="mission_text">going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
               </div>
            </div>
         </div>
         <div class="mission_section_2">
            <div class="row">
               <div class="offset-md-2"></div>
               <div class="col-md-5">
                  <div class="container_main">
                     <img src="/assets/images/img-1.png" alt="Avatar" class="image"/>
                     <div class="overlay">
                        <div class="text">
                           <h4 class="some_text">whichalteration in some </h4>
                           <p class="alteration_text">Alteration in some form, by injected humour, or randomised words whichalteration in some form, by injected humour, or randomised words which</p>
                           <div class="btn_main">
                              <div class="donate_bt"><a href="#">Read More</a></div>
                              <div class="donate_bt"><a href="donate.html">Donate Now</a></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-md-5">
                  <div class="container_main">
                     <img src="/assets/images/img-2.png" alt="Avatar" class="image"/>
                     <div class="overlay">
                        <div class="text">
                           <h4 class="some_text">whichalteration in some </h4>
                           <p class="alteration_text">Alteration in some form, by injected humour, or randomised words whichalteration in some form, by injected humour, or randomised words which</p>
                           <div class="btn_main">
                              <div class="donate_bt"><a href="#">Read More</a></div>
                              <div class="donate_bt"><a href="donate.html">Donate Now</a></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="mission_section_2">
            <div class="row">
               <div class="col-md-5">
                  <div class="container_main">
                     <img src="/assets/images/img-3.png" alt="Avatar" class="image"/>
                     <div class="overlay">
                        <div class="text">
                           <h4 class="some_text">whichalteration in some </h4>
                           <p class="alteration_text">Alteration in some form, by injected humour, or randomised words whichalteration in some form, by injected humour, or randomised words which</p>
                           <div class="btn_main">
                              <div class="donate_bt"><a href="#">Read More</a></div>
                              <div class="donate_bt"><a href="donate.html">Donate Now</a></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-md-5">
                  <div class="container_main">
                     <img src="/assets/images/img-4.png" alt="Avatar" class="image"/>
                     <div class="overlay">
                        <div class="text">
                           <h4 class="some_text">whichalteration in some </h4>
                           <p class="alteration_text">Alteration in some form, by injected humour, or randomised words whichalteration in some form, by injected humour, or randomised words which</p>
                           <div class="btn_main">
                              <div class="donate_bt"><a href="#">Read More</a></div>
                              <div class="donate_bt"><a href="donate.html">Donate Now</a></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="offset-md-2"></div>
            </div>
         </div>
         <div class="mission_section_2">
            <div class="row">
               <div class="offset-md-2"></div>
               <div class="col-md-5">
                  <div class="container_main">
                     <img src="/assets/images/img-5.png" alt="Avatar" class="image"/>
                     <div class="overlay">
                        <div class="text">
                           <h4 class="some_text">whichalteration in some </h4>
                           <p class="alteration_text">Alteration in some form, by injected humour, or randomised words whichalteration in some form, by injected humour, or randomised words which</p>
                           <div class="btn_main">
                              <div class="donate_bt"><a href="#">Read More</a></div>
                              <div class="donate_bt"><a href="donate.html">Donate Now</a></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-md-5">
                  <div class="container_main">
                     <img src="/assets/images/img-6.png" alt="Avatar" class="image"/>
                     <div class="overlay">
                        <div class="text">
                           <h4 class="some_text">whichalteration in some </h4>
                           <p class="alteration_text">Alteration in some form, by injected humour, or randomised words whichalteration in some form, by injected humour, or randomised words which</p>
                           <div class="btn_main">
                              <div class="donate_bt"><a href="#">Read More</a></div>
                              <div class="donate_bt"><a href="donate.html">Donate Now</a></div>
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
                     <h5 className="raised_text">Raised: $60,010     <span class="goal_text">Goal: $70,000</span></h5>
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
      <div class="donate_section layout_padding">
         <div class="container">
            <h1 class="donate_taital">Donat pepole Says </h1>
            <div class="donate_taital_main">
               <div id="main_slider" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                     <div class="carousel-item active">
                        <div class="donate_left">
                           <div class="client_img"><img src="/assets/images/client-img.png"/></div>
                        </div>
                        <div class="donate_right">
                           <h3 class="client_name_text">Mardo Merk</h3>
                           <p class="dummy_text">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefinedIf you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined</p>
                        </div>
                     </div>
                     <div class="carousel-item">
                        <div class="donate_left">
                           <div class="client_img"><img src="/assets/images/client-img.png"/></div>
                        </div>
                        <div class="donate_right">
                           <h3 class="client_name_text">Mardo Merk</h3>
                           <p class="dummy_text">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefinedIf you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined</p>
                        </div>
                     </div>
                     <div class="carousel-item">
                        <div class="donate_left">
                           <div class="client_img"><img src="/assets/images/client-img.png"/></div>
                        </div>
                        <div class="donate_right">
                           <h3 class="client_name_text">Mardo Merk</h3>
                           <p class="dummy_text">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefinedIf you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined</p>
                        </div>
                     </div>
                  </div>
                  <a class="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                  <i class="fa fa-angle-right"></i>
                  </a>
                  <a class="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                  <i class="fa fa-angle-left"></i>
                  </a>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- donate section end --> */}

      {/* <!-- footer section start --> */}
      <div class="footer_section layout_padding">
         <div class="container">
            <div class="row">
               <div class="col-sm-6 col-md-6 col-lg-3">
                  <div class="footer_logo"><img src="/assets/images/footer-logo.png"/></div>
               </div>
               <div class="col-sm-6 col-md-6 col-lg-3">
                  <h4 class="footer_taital">NAVIGATION</h4>
                  <div class="footer_menu_main">
                     <div class="footer_menu_left">
                        <div class="footer_menu">
                           <ul>
                              <li><a href="index.html">Home</a></li>
                              <li><a href="donate.html">Donate</a></li>
                              <li><a href="contact.html">Contact us</a></li>
                           </ul>
                        </div>
                     </div>
                     <div class="footer_menu_right">
                        <div class="footer_menu">
                           <ul>
                              <li><a href="about.html">About</a></li>
                              <li><a href="news.html">News</a></li>
                              <li><a href="mission.html">Our Mission</a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-sm-6 col-md-6 col-lg-3">
                  <h4 class="footer_taital">NEWS</h4>
                  <p class="footer_text">Generators on the Internet</p>
                  <p class="footer_text">Tend to repeat predefined</p>
                  <p class="footer_text">Chunks as necessary, making</p>
               </div>
               <div class="col-sm-6 col-md-6 col-lg-3">
                  <h4 class="footer_taital">address</h4>
                  <p class="footer_text">Ave NW, Washington</p>
                  <p class="footer_text">+01 1234567890</p>
                  <p class="footer_text">demo@gmail.com</p>
               </div>
            </div>
            <div class="footer_section_2">
               <div class="row">
                  <div class="col-sm-4 col-md-4 col-lg-3">
                     <div class="social_icon">
                        <ul>
                           <li><a href="#"><img src="/assets/images/fb-icon.png"/></a></li>
                           <li><a href="#"><img src="/assets/images/twitter-icon.png"/></a></li>
                           <li><a href="#"><img src="/assets/images/linkedin-icon.png"/></a></li>
                           <li><a href="#"><img src="/assets/images/instagram-icon.png"/></a></li>
                        </ul>
                     </div>
                  </div>
                  <div class="col-sm-8 col-md-8 col-lg-9">
                     <input type="text" class="address_text" placeholder="Enter your Enail" name="text"/>
                     <button type="button" class="get_bt">SUBSCRIBE</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- footer section end --> */}

 


     
      
    
      
  </>
       
    )
}