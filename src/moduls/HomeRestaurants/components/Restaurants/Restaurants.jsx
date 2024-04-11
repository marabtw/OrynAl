import RestaurantItemCard from "../RestaurantItemCard/RestaurantItemCard"
import Search from "./components/Search/Search"
import SortByCategoryContainer from "../../../../components/SortByCategoryContainer/SortByCategoryContainer"
import { dataRestaurants } from "../../../../data/restaurantsData"

const sortList = [
  "Сортировать в этом разделе",
  "Избранное",
  "Тип Заведения",
  "Кухня",
  "Особенности",
  "По расстоянию от меня",
]

const Restaurants = () => {

  return (
    <div className="flex flex-col gap-[90px] max-lg:gap-[30px]">
      <div className="flex justify-center">
        <Search />
      </div>
      <SortByCategoryContainer sortList={sortList} />
      <div className="grid grid-cols-3 gap-[20px] max-lg:grid-cols-2 max-sm:grid-cols-1">
        {dataRestaurants.map((restaurant) => (
          <RestaurantItemCard key={restaurant.id} data={restaurant} />
        ))}
      </div>
    </div>
  )
}

export default Restaurants
