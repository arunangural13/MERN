import {Link}from "react-router-dom"
export default function Contact(){
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

                    <Link to={'/News'} >

                  <li className="nav-item ">
                     <a className="nav-link" href="">News</a> </li>
                  </Link>

                  
                  <li className="nav-item active">
                     <a className="nav-link" href="">Contact Us</a>
                  </li>

                   <Link to={'/Mission'} >

                  <li className="nav-item ">
                     <a className="nav-link" href="">Our Mission</a> </li>
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
      <!-- contact section start --> */}
      <div className="contact_section layout_padding">
         <div className="container">
            <div className="contact_section_2">
               <div className="row">
                  <div className="col-md-6">
                     <div className="mail_section_1">
                        <h1 className="contact_taital">Contact Us</h1>
                        <input type="text" className="mail_text_1" placeholder="Name" name="text"/>
                        <input type="text" className="mail_text_1" placeholder="Email" name="text"/>
                        <input type="text" className="mail_text_1" placeholder="Phone Number" name="text"/>
                        <textarea className="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
                        <div className="send_bt"><a href="#">SEND</a></div>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="map_main">
                        <div className="map-responsive">
                           <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="600" height="360" frameborder="0" style="border:0; width: 100%;" allowfullscreen=""></iframe>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- contact section end --> */}
        </>
    )
}