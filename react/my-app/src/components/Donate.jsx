import { Link } from "react-router-dom";

export default function Donate(){
    return(
<>
{/* <!-- header section start --> */}
      <div className="header_section">
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand"/><a href="index.html"><img src="/assets/images/logo.png"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav mr-auto">
               <Link to={'/'} >
                  <li className="nav-item ">
                     <a className="nav-link" href="">Home</a> </li>
                  </Link>

                  <Link to={'/About'} >

                  <li className="nav-item">
                     <a className="nav-link" href="">About</a> </li>
                  </Link>
                  <li className="nav-item active">
                     <a className="nav-link" href="">Donate</a>
                  </li>
                  <Link to={'/News'} >

<                 li className="nav-item ">
                    <a className="nav-link" href="">News</a> </li>
                 </Link>
                  <Link to={'/Contact'} >
                  <li className="nav-item ">
                     <a claasName="nav-link" href="">Contact Us</a>
                     </li>
               
                </Link>

                <Link to={'/Mission'} >
                <li className="nav-item ">
                     <a claasName="nav-link" href="">Our Mission</a>
                     </li>
               
                </Link>
               </ul>
               <form className="form-inline my-2 my-lg-0">
                  <div className="search_icon"><a href="#"><img src="/assets/images/search-icon.png"/></a></div>
                  <button className="donate_btn" type="submit">Donate Now</button>
               </form>
            </div>
         </nav>
      </div>
      {/* <!-- header section end -->
      <!-- donate section start --> */}
      <div className="donate_section layout_padding">
         <div className="container">
            <h1 className="donate_taital">Donat pepole Says </h1>
            <div className="donate_taital_main">
               <div id="main_slider" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                     <div className="carousel-item active">
                        <div className="donate_left">
                           <div className="client_img"><img src="/assets/images/client-img.png"/></div>
                        </div>
                        <div className="donate_right">
                           <h3 className="client_name_text">Mardo Merk</h3>
                           <p className="dummy_text">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefinedIf you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined</p>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <div className="donate_left">
                           <div className="client_img"><img src="/assets/images/client-img.png"/></div>
                        </div>
                        <div className="donate_right">
                           <h3 className="client_name_text">Mardo Merk</h3>
                           <p className="dummy_text">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefinedIf you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined</p>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <div className="donate_left">
                           <div className="client_img"><img src="/assets/images/client-img.png"/></div>
                        </div>
                        <div className="donate_right">
                           <h3 className="client_name_text">Mardo Merk</h3>
                           <p className="dummy_text">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefinedIf you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined</p>
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
      {/* <!-- donate section end -->
      <!-- footer section start --> */}
      <div className="footer_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="footer_logo"><img src="/assets/images/footer-logo.png"/></div>
               </div>
               <div className="col-sm-6 col-md-6 col-lg-3">
                  <h4 className="footer_taital">NAVIGATION</h4>
                  <div className="footer_menu_main">
                     <div className="footer_menu_left">
                        <div className="footer_menu">
                           <ul>
                              <li><a href="index.html">Home</a></li>
                              <li><a href="donate.html">Donate</a></li>
                              <li><a href="contact.html">Contact us</a></li>
                           </ul>
                        </div>
                     </div>
                     <div className="footer_menu_right">
                        <div className="footer_menu">
                           <ul>
                              <li><a href="about.html">About</a></li>
                              <li><a href="news.html">News</a></li>
                              <li><a href="mission.html">Our Mission</a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-sm-6 col-md-6 col-lg-3">
                  <h4 className="footer_taital">NEWS</h4>
                  <p className="footer_text">Generators on the Internet</p>
                  <p className="footer_text">Tend to repeat predefined</p>
                  <p className="footer_text">Chunks as necessary, making</p>
               </div>
               <div className="col-sm-6 col-md-6 col-lg-3">
                  <h4 className="footer_taital">address</h4>
                  <p className="footer_text">Ave NW, Washington</p>
                  <p className="footer_text">+01 1234567890</p>
                  <p className="footer_text">demo@gmail.com</p>
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
                     <input type="text" className="address_text" placeholder="Enter your Enail" name="text"/>
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