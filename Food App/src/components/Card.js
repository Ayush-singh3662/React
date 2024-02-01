import { CDN_URL } from "../utils/constants";

const Card = (props) => {
    const data = props.data;
    const name = data?.info?.name;
    const imageId = data?.info?.cloudinaryImageId;
    const cost = data?.info?.costForTwo;
    const rating = data?.info?.avgRating;
    return (
        <div className="res-card">
            <img src={CDN_URL+imageId}/>
            <h2>{name}</h2>
            <h3>{cost}</h3>
            <h3>{rating} stars</h3>
        </div>
    )
}

export default Card;