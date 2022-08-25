
export default function Food(props){
    return (
        <div className="food-card" >
            <div className="card-pic" >
                <img src={props.pic} alt="" className="card-picture" />
            </div>
            <div className="card-text" >
                <div className="card-title" >
                    <div className="card-food-name" >
                        {props.title}
                    </div>
                    <div className="card-cost" >
                        ${props.cost}
                    </div>
                </div>
                <div className="card-description" >
                    {props.description}
                </div>
            </div>
        </div>
    )
}