import Button from "../../../../../../ui/Button/Button"
const TableCard = ({ table }) => {
  return (
    <div className="relative min-w-[313px] min-h-[362px] flex flex-col items-center justify-between px-[20px] py-[20px] font-poppins border-4 border-[#8AB8FF] rounded-[31px]">
      <div
        className={`absolute right-[20px] top-[20px] w-[20px] aspect-square rounded-full ${
          table.status ? "bg-[#31A24C]" : "bg-red-700"
        }`}
      ></div>
      <img src={table.icon} alt="icon" className="w-[180px] aspect-square rounded-full" />
      <h3 className="font-[600] text-[20px] leading-[30px]">
        Столик #{table.tableNumber}
      </h3>
      <div className="flex justify-between items-center w-full text-[15px] leading-[22.5px]">
        <h3>{table.type}</h3>
        <div className="w-[10px] aspect-square bg-[#C4C4C4] rounded-full"></div>
        <h3>Вместимость: {table.capacity}</h3>
      </div>
      <Button
        text="Выбрать"
        className={"text-[20px] font-[600] leading-[30px]"}
      />
    </div>
  )
}

export default TableCard
