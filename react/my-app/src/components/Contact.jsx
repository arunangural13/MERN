import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <>
            {/* Header Section
            <div className="header_section">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">
                        <img src="/assets/images/logo.png" alt="Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Donate">Donate</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/News">News</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/Contact">Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Mission">Our Mission</Link>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <div className="search_icon">
                                <a href="#"><img src="/assets/images/search-icon.png" alt="Search Icon" /></a>
                            </div>
                            <button className="donate_btn btn btn-primary" type="button">Donate Now</button>
                        </form>
                    </div>
                </nav>
            </div> */}

            {/* Contact Section */}
            <div className="contact_section layout_padding">
                <div className="container">
                    <div className="contact_section_2">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mail_section_1">
                                    <h1 className="contact_taital">Contact Us</h1>
                                    <form>
                                        <input type="text" className="mail_text_1" placeholder="Name" name="name" />
                                        <input type="email" className="mail_text_1" placeholder="Email" name="email" />
                                        <input type="tel" className="mail_text_1" placeholder="Phone Number" name="phone" />
                                        <textarea className="massage-bt" placeholder="Message" rows="5" name="message"></textarea>
                                        <div className="send_bt">
                                            <button type="submit">SEND</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="map_main">
                                    <div className="map-responsive">
                                        <iframe
                                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Mohali+Sector+74,+Punjab,+India
"
                                            width="600"
                                            height="360"
                                            style={{ border: 0, width: '100%' }}
                                            allowFullScreen
                                            loading="lazy"
                                            title="Location Map"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
