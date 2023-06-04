import { useEffect, useState } from 'react';
import RestaurantCard from "./RestaurantCard";
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

export const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');

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
    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className='search-box' value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
                    <button onClick={() => {
                        const filteredRestaurants = listOfRestaurants.filter((res) => res.data.name.toLowerCase().includes(searchText.toLocaleLowerCase()))
                        setListOfRestaurants(filteredRestaurants)
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter(res => res.data.avgRating > 4.0)
                    setListOfRestaurants(filteredList)
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurants.map((restaurant) => <Link key={restaurant.data.id} to={`/restaurants/${restaurant.data.id}`}><RestaurantCard key={restaurant.data.id} resData={restaurant} /></Link>)
                }
            </div>
        </div>
    )
}

export default Body;