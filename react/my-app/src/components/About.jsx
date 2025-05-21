import { Link } from "react-router-dom";

export default function About() {
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
              <li className="nav-item active">
                <span className="nav-link">About</span>
              </li>
              <li className="nav-item">
                <Link to="/Donate" className="nav-link">
                  Donate
                </Link>
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
      </div> */}
      {/* Header section end */}

      {/* About section start */}
      <div className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <h2 className="about_taital">About Charity</h2>
              <p className="about_text">
<<<<<<< HEAD
               Giving to those in need is more than just an act of
                kindness—it’s a powerful way to change lives and
                 bring hope to the vulnerable. Every donation, 
                 no matter how small, has the potential to provide food,
                  shelter, education, and medical care to those who need it most.
                   When we come together to support charitable causes, 
                   we build a stronger, more compassionate community.
                    Your generosity can light the path to a better future,
                     turning struggles into opportunities and dreams into reality. 
                     Together, we can make a lasting difference.
=======
                Many variations of passages of Lorem Ipsum are available, but
                the majority have suffered alteration in some form, by injected
                humor, or randomized words which don't look even slightly
                believable. If you many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some
                form, by injected humor, or randomized words which don't look
                even slightly believable. If you many variations of passages of
                Lorem Ipsum available, but the majority have suffered alteration
                in some form, by injected humor, or randomized words which don't
                look even slightly believable.
>>>>>>> 0d36670 (both file commit)
              </p>
              <div className="readmore_bt">
                <a href="#">Read more</a>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="about_img">
                <img src="/assets/images/about-img.png" alt="About" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About section end */}

    </>
  );
}