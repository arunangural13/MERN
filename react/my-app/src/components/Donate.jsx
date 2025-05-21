import { Link } from "react-router-dom";

export default function Donate() {
  return (
    <>
      {/* Header section start */}
      {/* <div className="header_section">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand">
            <Link to="/">
              <img src="/assets/images/logo.png" alt="Logo" />
            </Link>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item active">
                <span className="nav-link">Donate</span>
              </li>
              <li className="nav-item">
                <Link to="/News" className="nav-link">
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact" className="nav-link">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Mission" className="nav-link">
                  Our Mission
                </Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <div className="search_icon">
                <a href="#">
                  <img src="/assets/images/search-icon.png" alt="Search" />
                </a>
              </div>
              <button className="donate_btn" type="submit">
                Donate Now
              </button>
            </form>
          </div>
        </nav>
      </div>
      Header section end */}

      {/* Donate section start */}
      <div className="donate_section layout_padding">
        <div className="container">
          <h1 className="donate_taital">Donate Needy People</h1>
          <div className="donate_taital_main">
            <div id="main_slider" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="donate_left">
                    <div className="client_img">
                      <img src="/assets/images/karan.jpg" alt="Client" />
                    </div>
                  </div>
                  <div className="donate_right">
                    <h3 className="client_name_text">Karan Aujla</h3>
                    <p className="dummy_text">
                      If you are going to use  Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of the text. All the Lorem Ipsum generators on the Internet tend to repeat predefined
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="donate_left">
                    <div className="client_img">
                      <img src="/assets/images/trp.jpg" alt="Client" />
                    </div>
                  </div>
                  <div className="donate_right">
                    <h3 className="client_name_text">Trump</h3>
                    <p className="dummy_text">
                      If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of the text. All the Lorem Ipsum generators on the Internet tend to repeat predefined
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="donate_left">
                    <div className="client_img">
                      <img src="/assets/images/cheemay.jpg" alt="Client" />
                    </div>
                  </div>
                  <div className="donate_right">
                    <h3 className="client_name_text">Cheema Y</h3>
                    <p className="dummy_text">
                      If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of the text. All the Lorem Ipsum generators on the Internet tend to repeat predefined
                    </p>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-next"
                href="#main_slider"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-angle-right"></i>
              </a>
              <a
                className="carousel-control-prev"
                href="#main_slider"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-angle-left"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Donate section end */}

     
    </>
  );
}