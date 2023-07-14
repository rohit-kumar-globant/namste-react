import { useEffect, useState, useContext } from 'react';
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

export const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

    const onlineStatus = useOnlineStatus();


    useEffect(() => {
        fetchApiData();
    }, [])

    const fetchApiData = async () => {
        try {
            const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&sortBy=COST_FOR_TWO_H2L&page_type=DESKTOP_WEB_LISTING');
            const json = await data.json();
            setListOfRestaurants(json.data.cards[0].data.data.cards)
            setFilteredRestaurants(json.data.cards[0].data.data.cards)
        } catch (err) {
            console.log(err)
        }


    }
    if (onlineStatus === false) return <h1>Looks like you're offline!! Please </h1>

    const { setUserName, loggedInUser } = useContext(UserContext)

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className='border border-solid border-black' value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
                        const filteredRestaurants = listOfRestaurants.filter((res) => res.data.name.toLowerCase().includes(searchText.toLocaleLowerCase()))
                        setListOfRestaurants(filteredRestaurants)
                    }}>Search</button>
                </div>
                <div className=" search m-4 p-4 flex items-center">
                    <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
                        const filteredList = listOfRestaurants.filter(res => res.data.avgRating > 4.0)
                        setListOfRestaurants(filteredList)
                    }}>Top Rated Restaurants</button>
                </div>
                <div className=" search m-4 p-4 flex items-center">
                    <label htmlFor="username">User Name: </label>
                    <input type="text" className="border border-black p-2" value={loggedInUser} onChange={(e) => setUserName(e.target.value)} />
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurants.map((restaurant) => <Link key={restaurant.data.id} to={`/restaurants/${restaurant.data.id}`}>

                        {
                            !restaurant.data.promoted ? (
                                <RestaurantCardPromoted resData={restaurant} />
                            ) : (
                                <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                            )
                        }

                    </Link>
                    )
                }
            </div>
        </div>
    )
}

export default Body;