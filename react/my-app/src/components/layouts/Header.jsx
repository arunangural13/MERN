import {Link} from "react-router-dom";
export default function Header(){
    return(
        <>
   
      {/* <!-- header section start --> */}
      <div className="header_section">
         
         </div>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <a className="navbar-brand"/>
                   <a href="index.html">
                   <img src="/assets/images/logo.png"  width="200"  style={{padding:0,}}/>
                   </a>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                     
                    <Link to={'/'} > <li className="nav-item ">
                        <a className="nav-link" href="">Home</a>
                     </li></Link>
                        
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
                   <Link to ={'/Login'} > <li className="nav-item ">
                   <a className="nav-link" href="">Login </a>  </li></Link>

                   <Link to ={'/Signup'} > <li className="nav-item ">
                   <a className="nav-link" href="">Signup </a>  </li></Link>
                
                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                     {/* <div className="search_icon"><a href="#">
                       <img src="/assets/images/search-icon.png"/>
                       </a></div> */}
                   <Link to= {'/Login'}> 
                   
                    <button
  type="submit"
  style={{
    backgroundColor: '#001f4d',
    color: '#ffffff',
    padding: '6px 14px',
    fontSize: '14px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(0, 31, 77, 0.2)',
    transition: 'all 0.3s ease',
  }}
  onMouseOver={(e) => (e.target.style.backgroundColor = '#003380')}
  onMouseOut={(e) => (e.target.style.backgroundColor = '#001f4d')}
>
  Donate Now
</button>
</Link>
                     </form>
               </div>
            </nav>
         {/* <!-- header section end --> */}
        
        </>
    )
}