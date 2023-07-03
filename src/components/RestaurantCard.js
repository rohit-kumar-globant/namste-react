import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime } = resData?.data;

    return (
        <div className="m-4 p-4 w-[240px] rounded-lg bg-gray-100 hover:bg-gray-300">
            <img className='rounded-lg' src={`${CDN_URL}${cloudinaryImageId}`} alt="pizza-logo" />
            <h3 className="font-bold py-2 text-xl">{name}</h3>
            <h4 >{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>₹{costForTwo / 100}FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}
export default RestaurantCard;