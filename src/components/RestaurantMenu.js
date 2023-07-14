import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Shimmer from "./Shimmer";
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId)
    const [showIndex, setShowIndex] = useState(0);
    console.log({ showIndex })
    if (resInfo === null) return <Shimmer />

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const categories = resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.['card']?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-xl">{cuisines.join(', ')} - {costForTwoMessage} </p>
            {categories.map((category, index) => (
                <RestaurantCategory
                    key={index}
                    data={category?.card?.card}
                    showItem={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)}
                />
            ))}
        </div>
    )
}

export default RestaurantMenu