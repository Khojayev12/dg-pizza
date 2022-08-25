import Food from "../components/Food";
import food1 from "../assets/images/food1.png";
import food2 from "../assets/images/food2.png";
import food3 from "../assets/images/food3.png";

export default function Menu() {
  return (
    <div className="menu-page">
      <div className="menu-header">OUR MENU</div>
      <div className="filter">
        <div className="on-filter">ALL</div>
        <div className="on-filter">STARTERS</div>
        <div className="on-filter">MAIN</div>
        <div className="on-filter">DRINKS</div>
        <div className="on-filter">PROMOTION</div>
      </div>
      <div className="fods">
        <Food
          pic={food1}
          title="LOREM IPSUM"
          cost="25"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui."
        />
        <Food
          pic={food1}
          title="LOREM IPSUM"
          cost="25"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui."
        />
        <Food
          pic={food2}
          title="LOREM IPSUM"
          cost="25"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui."
        />
        <Food
          pic={food2}
          title="LOREM IPSUM"
          cost="25"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui."
        />
        <Food
          pic={food3}
          title="LOREM IPSUM"
          cost="25"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui."
        />
        <Food
          pic={food3}
          title="LOREM IPSUM"
          cost="25"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui."
        />
        <Food
          pic={food1}
          title="LOREM IPSUM"
          cost="25"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui."
        />
        <Food
          pic={food1}
          title="LOREM IPSUM"
          cost="25"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui."
        />
        <Food
          pic={food2}
          title="LOREM IPSUM"
          cost="25"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui."
        />
        <Food
          pic={food2}
          title="LOREM IPSUM"
          cost="25"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui."
        />
        <Food
          pic={food3}
          title="LOREM IPSUM"
          cost="25"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui."
        />
        <Food
          pic={food3}
          title="LOREM IPSUM"
          cost="25"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui."
        />
        
      </div>
    </div>
  );
}
