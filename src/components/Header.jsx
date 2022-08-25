import {Link} from "react-router-dom"

export default function Header() {
  return (
    <div className="header">
      <div className="header-title">LA CARAVANA</div>
      <div className="header-sections">
        <div className="each-section"><a href="/#contact" className="my-link" > CONTACT </a></div>
        <div className="each-section"> <Link to="/menu" className="my-link" >  MENU </Link> </div>
        <div className="each-section"> <a href="/#about-us" className="my-link" >ABOUT US</a> </div>
        <div className="each-section"> <Link to="/" className="my-link" >HOME </Link></div>
      </div>
    </div>
  );
}
