import TableCard from "./components/TableCard/TableCard"
import Sort from "../../../../components/Sort/Sort"
import ChooseTime from "./components/ChooseTime/ChooseTime"

import { dataBookingTables } from "../../../../data/bookingData"

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
    <div>
      <ChooseTime />
      <div className="px-[180px]">
        <Sort sortList={sortLists} className={"mt-[50px] px-0"} />
        <div className="flex flex-wrap justify-between gap-[30px] mt-[50px]">
          {dataBookingTables.map((table) => (
            <TableCard key={table.type + `${Math.random() * 99999}`} table={table} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TableReservation
