import {Link} from "react-router-dom"
export default function Mission(){
    return(
        <>
          {/* <!-- header section start --> */}
      <div class="header_section">
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand"/><a href="index.html"><img src="/assets/images/logo.png"/></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav mr-auto">
               <Link to={'/'} >
                  <li className="nav-item ">
                     <a className="nav-link" href="">Home</a> </li>
                  </Link>

                  <Link to={'/About'} >

                  <li className="nav-item ">
                     <a className="nav-link" href="">About</a> </li>
                  </Link>

                  <Link to={'/Donate'} >

<                 li className="nav-item ">
                    <a className="nav-link" href="">Donate</a> </li>
                 </Link>

                  <Link to={'/News'} >

<                 li className="nav-item ">
                    <a className="nav-link" href="">News</a> </li>
                 </Link>
                  <Link to={'/Contact'} >
                  <li className="nav-item ">
                     <a claasName="nav-link" href="">Contact Us</a>
                     </li>
               
                </Link>
                  <li class="nav-item active">
                     <a class="nav-link" href="">Our Mission</a>
                  </li>
               </ul>
               <form class="form-inline my-2 my-lg-0">
                  <div class="search_icon"><a href="#"><img src="/assets/images/search-icon.png"/></a></div>
                  <button class="donate_btn" type="submit">Donate Now</button>
               </form>
            </div>
         </nav>
      </div>
      {/* <!-- header section end -->
      <!-- mission section start --> */}
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
    
        </>
    )
}