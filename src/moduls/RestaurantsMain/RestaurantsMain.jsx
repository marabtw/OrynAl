import RestaurantsList from "./components/RestaurantsList/RestaurantsList"
import PopularRestaurantsList from "./components/PopularRestaurantsList/PopularRestaurantsList"

const RestaurantsMain = () => {
	return (
		<div>
			<RestaurantsList/>
			<PopularRestaurantsList/>
		</div>
	)
}

export default RestaurantsMain
