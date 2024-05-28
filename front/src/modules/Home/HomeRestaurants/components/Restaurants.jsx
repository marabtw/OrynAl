import RestaurantItemCard from "./RestaurantItemCard"
import Search from "./Search"
import SortByCategoryContainer from "@components/SortByCategoryContainer/SortByCategoryContainer"
import Pagination from "@components/Pagination/Pagination"

const sortList = [
  // "Сортировать в этом разделе",
  "Все рестораны",
  "Избранное рестораны",
]

const Restaurants = ({restaurants, totalPage, setParams}) => {
  return (
    <>
      <div className="flex flex-col gap-[90px] max-lg:gap-[30px]">
        <div className="flex justify-center">
          <Search />
        </div>
        <div className="px-[100px] max-md:px-0">
          <SortByCategoryContainer sortList={sortList} />
        </div>
        <div className="grid grid-cols-3 gap-[24px] max-md:grid-cols-2 ">
          {restaurants?.length > 0 &&
            restaurants.map((restaurant) => (
              <RestaurantItemCard key={restaurant.id} data={restaurant} />
            ))}
        </div>
        <Pagination
          totalPage={totalPage}
          getCurrentPage={(index) => {
            setParams((prev) => {
              return { ...prev, pageIndex: index }
            })
          }}
        />
      </div>
    </>
  )
}

export default Restaurants
