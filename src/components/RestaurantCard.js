import { CDN_URL } from "../utils/constant";
import { useContext } from 'react';
import UserContext from '../utils/UserContext';

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime } = resData;
    const { loggedInUser } = useContext(UserContext)
    return (
        <div data-testid='resCard' className="m-4 p-4 w-[240px] rounded-lg bg-gray-100 hover:bg-gray-300">
            <img className='rounded-lg' src={`${CDN_URL}${cloudinaryImageId}`} alt="pizza-logo" />
            <h3 className="font-bold py-2 text-xl">{name}</h3>
            <h4 >{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>₹{costForTwo / 100}FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
            <h4>{loggedInUser}</h4>
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;