import Back from "../assets/images/pizza.png";
import Back2 from "../assets/images/piztars.png";
import about from "../assets/images/about.png";
import loc from "../assets/images/locatoin.png";
import loc2 from "../assets/images/p1.png";
import loc3 from "../assets/images/p2.png";
import insta from "../assets/images/insta.png";
import face from "../assets/images/face.png";
import wat from "../assets/images/wat.png";
export default function Home() {
  return (
    <div className="home-page" >
      <div className="main-hero">
        <div className="main-title">
          <div className="main-hero-title">LA CARAVALA</div>
          <div className="main-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ac placerat dui. Vestibulum ut felis et lorem porta congue vitae nec
            turpis. Aliquam quis leo at nunc tempor faucibus et ac massa.
          </div>
        </div>
        <div className="pizza-pic">
          <div className="piz-div">
            <img src={Back} alt="" className="pizza" />
          </div>
        </div>
      </div>

      <div className="about" id="about-us">
        <div className="about-title">
          <div className="about-main-title">ABOUT US</div>
          <div className="about-desk">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>
          <button className="read-more">read more</button>
        </div>
        <div className="about-picture">
          <img src={about} alt="" className="about-pic" />
        </div>
      </div>

      <div className="find-section" id="find-us">
        <div className="find-title">FIND US</div>
        <div className="find-body">
          <div className="find-loc">
            <img src={loc} alt="" className="find-pic" />
          </div>
          <div className="find-text">
            <div className="find-style">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
              <br />
              <br />
              ATTENDANCE Monday to Sunday 12:00pm - 8:00pm
              <br />
              <br />
              DELIVERY Monday - Sunday 12:00pm - 8:00pm
            </div>
          </div>
        </div>
      </div>

      <div className="m-menu" id="menu">
        <div className="m-menu-header">
          <div className="m-menu-title">OUR MENU</div>
          <div className="m-menu-des">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>
        </div>
        <div className="m-menu-pictures">
          <div className="just-pic">
            <img src={loc2} alt="" className="m-menu-rasm" />
          </div>
          <div className="just-pic">
            <img src={loc3} alt="" className="m-menu-rasm" />
          </div>
        </div>
        <div className="more-menu">
          {" "}
          <button className="menu-more">MENU</button>
        </div>
      </div>

      <div className="footer"  id="contact" >
        <div className="footer-piz">
          <img src={Back2} alt="" className="foot-piz" />
        </div>
        <div className="main-hero-title">LA CARAVALA</div>
        <div className="social">
          <div
            className="social-icon"
            style={{
              width: "61px",
              marginBottom: "-10px",
              marginRight: "15px",
            }}
          >
            <img src={insta} alt="" className="my-icon" />
          </div>
          <div className="social-icon" style={{ height: "60px" }}>
            <img
              src={face}
              alt=""
              className="my-icon"
              style={{ height: "100%" }}
            />
          </div>
          <div className="social-icon">
            <img
              src={wat}
              alt=""
              className="my-icon"
              style={{ width: "62px" }}
            />
          </div>
        </div>
      </div>

      <div className="last-footer">
        <div style={{marginTop:"28px"}} >
          TODOS LOS DERECHOS RESERVADOS © LA CARAVANA 2021 | DESIGN: MEZORA
        </div>
      </div>
    </div>
  );
}
