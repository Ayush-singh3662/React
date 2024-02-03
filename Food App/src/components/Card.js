import { CDN_URL } from "../utils/constants";

const Card = (props) => {
    const { name, cloudinaryImageId, costForTwo, avgRating, sla } = props?.data?.info;
    return (
        <div className="res-card">
            <img src={CDN_URL+cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{costForTwo}</h3>
            <h3>{avgRating} stars</h3>
            <h3>{sla?.slaString}</h3>
        </div>
    )
}

export default Card;