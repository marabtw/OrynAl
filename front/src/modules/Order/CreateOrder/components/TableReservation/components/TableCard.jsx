import Button from "@ui/Button/Button"

const TableCard = ({ tableData, getTableId, selectedTableId }) => {
  return (
    <div className="relative min-h-[362px] w-full flex flex-col items-center justify-between px-[20px] py-[20px] font-poppins border-4 border-[#8AB8FF] rounded-[31px]">
      <div
        className={`absolute right-[20px] top-[20px] w-[20px] aspect-square rounded-full ${
          tableData.status ? "bg-[#31A24C]" : "bg-red-700"
        }`}
      ></div>
      <div className="w-[180px] aspect-square rounded-full overflow-hidden">
        {tableData.photo ? (
          <img src={tableData.photo.route} alt="icon" className="h-full aspect-square object-cover" />
        ) : (
          <div className="w-full h-full bg-slate-100"></div>
        )}
      </div>
      <h3 className="font-[600] text-[20px] leading-[30px]">
        Столик #{tableData.tableNumber}
      </h3>
      <div className="relative flex justify-between items-center w-full text-[15px] leading-[22.5px]">
        <h3>{tableData.type}</h3>
        <div className="absolute left-1/2 translate-x-[-50%] w-[10px] aspect-square bg-[#C4C4C4] rounded-full"></div>
        <h3>Вместимость: {tableData.capacity}</h3>
      </div>
      {selectedTableId === tableData.id ? (
        <Button
          text="Выбрано"
          backgroundColor={"#4ade80"}
          spacingClass={"px-[10px] py-[10px]"}
          textStyles={"text-[18px] font-[600] leading-[26px] "}
          rounded={"rounded-[10px]"}
          onClick={() => {
            getTableId(-1)
          }}
        />
      ) : (
        <Button
          text="Выбрать"
          gradient={true}
          spacingClass={"px-[10px] py-[10px]"}
          textStyles={"text-[18px] font-[600] leading-[26px] "}
          rounded={"rounded-[10px]"}
          onClick={() => {
            if (selectedTableId !== tableData.id) getTableId(tableData.id)
          }}
        />
      )}
    </div>
  )
}

export default TableCard
