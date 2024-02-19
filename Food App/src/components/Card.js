import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Card = (props) => {
    const {loggedInUser} = useContext(UserContext);
    const { name, cloudinaryImageId, costForTwo, avgRating, sla } = props?.data?.info;
    const {data} = props;
    return (
        <div data-testid="card" className="res-card m-4 p-4 bg-slate-100 w-[250px] rounded-lg hover:shadow-xl">
            <img src={CDN_URL+cloudinaryImageId} className="rounded-lg"/>
            <h2 className="my-4 text-lg font-bold">{name}</h2>
            <h3>{costForTwo}</h3>
            <h3>{avgRating} stars</h3>
            <h3>{sla?.slaString}</h3>
            <h4>{loggedInUser}</h4>
        </div>
    );
}

export const promotedCard = (Card) => {
    return (props) => {
        return (
            <div>
                <label className="m-4 px-2 absolute text-white bg-black">Open</label>
                <Card {...props}/>
            </div>
        );
    }
}

export default Card;