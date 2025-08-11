import Data from "./Data";
import "./card.css"

// Icon
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

const Card = () => {
    return(
        <div className="mainContainer">
            {
                Data.map(({id, image, title, price, description}) => {
                    return(
                        <div kye={id} className="box">
                            <div className="card">
                                <div className="image">
                                    <img src={image} alt={title}/>
                                </div>
                                <div className="desc">
                                    <h1>{title}</h1>
                                    <p>{description}</p>
                                    <span>${price}</span>
                                </div>
                                <div className="star">
                                    <AiFillStar className="icon"/>
                                    <AiFillStar className="icon"/>
                                    <AiFillStar className="icon"/>
                                    <AiOutlineStar className="icon"/>
                                    <AiOutlineStar className="icon"/>
                                </div>
                                <button className="btn">Add to the cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card;