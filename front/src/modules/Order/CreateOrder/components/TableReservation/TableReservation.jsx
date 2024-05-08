import TableCard from "./components/TableCard"
import SortByCategoryContainer from "@components/SortByCategoryContainer/SortByCategoryContainer"
import ChooseTime from "./components/ChooseTime"

import { dataBookingTables } from "@data/bookingData"

const sortLists = [
  "Сортировать в этом разделе",
  "Все",
  "Малый зал",
  "Банкетный зал",
  "Основной зал",
  "Терраса",
]

const TableReservation = () => {
  return (
    <>
      <ChooseTime />
      <div className="px-[180px] max-2xl:px-[80px] max-lg:px-[20px]">
        <SortByCategoryContainer sortList={sortLists} className={"mt-[50px] px-0"} />
        <div className="grid grid-cols-4 justify-between gap-[30px] mt-[50px] max-2xl:grid-cols-3 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
          {dataBookingTables.map((table) => (
            <TableCard key={table.type + `${Math.random() * 99999}`} table={table} />
          ))}
        </div>
      </div>
    </>
  )
}

export default TableReservation
