import { Link } from "react-router-dom";
export default function News(){
    return(
        <>
         {/* <!-- header section start --> */}
      <div class="header_section">
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand"/><a href="index.html"><img src="assets/images/logo.png"/></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav mr-auto">
               <Link to={'/'} >
                  <li className="nav-item ">
                     <a className="nav-link" href="">Home</a>
                      </li>
                  </Link>
                    <Link to={'/About'} >

                  <li className="nav-item ">
                     <a className="nav-link" href="">About</a> </li>
                  </Link>
                    <Link to={'/Donate'} >

                  <li className="nav-item ">
                     <a className="nav-link" href="">Donate</a> </li>
                  </Link>

                  <li class="nav-item active">
                     <a class="nav-link" href="">News</a>
                  </li>

                 <Link to={'/Contact'} >

                  <li className="nav-item ">
                     <a className="nav-link" href="">Contact</a> </li>
                  </Link>
                 <Link to={'/Mission'} >

                  <li className="nav-item">
                     <a className="nav-link" href="">Mission</a> </li>
                  </Link>
               </ul>
               <form class="form-inline my-2 my-lg-0">
                  <div class="search_icon"><a href="#"><img src="assets/images/search-icon.png"/></a></div>
                  <button class="donate_btn" type="submit">Donate Now</button>
               </form>
            </div>
         </nav>
      </div>
      {/* <!-- header section end -->
      <!-- news section start --> */}
      <div class="news_section layout_padding">
         <div class="container">
            <div class="row">
               <div class="col-sm-12">
                  <h1 class="news_taital">FEATURED CAUSE</h1>
                  <p class="news_text">going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
               </div>
            </div>
            <div class="news_section_2">
               <div class="row">
                  <div class="col-md-6">
                     <div class="news_img"><img src="assets/images/news-img.png"/></div>
                  </div>
                  <div class="col-md-6">
                     <h1 class="give_taital">GIVE EDUCATION</h1>
                     <p class="ipsum_text">variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by<br/>
                        injected humour, or randomised v<br/>
                        ariations of passages of Lorem Ipsum <br/>
                        available, but the majority have suffered alteration in some form, by injected humour, or randomised 
                     </p>
                     <h5 class="raised_text">Raised: $60,010     <span class="goal_text">Goal: $70,000</span></h5>
                     <div class="donate_btn_main">
                        <div class="readmore_btn"><a href="#">Read More</a></div>
                        <div class="readmore_btn_1"><a href="donate.html">Donate Now</a></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- news section end --> */}
        </>
    )
}