import Restaurants from "./components/Restaurants"
import PopularRestaurants from "./components/PopularRestaurants"

const RestaurantsHome = () => {
	return (
		<div className="px-[70px] max-xl:px-[20px]">
			<Restaurants/>
			<PopularRestaurants/>
		</div>
	)
}

export default RestaurantsHome