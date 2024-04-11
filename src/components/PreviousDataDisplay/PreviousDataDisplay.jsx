
const PreviousDataDisplay = ({label, value}) => {
  return (
    <div className="grid grid-cols-2 w-full px-[20px] py-[30px] text-[15px] leading-[22.5px] border-[3px] border-[#ebebeb] rounded-[20px] bg-[#F0F6FF] 
		max-md:grid-cols-1 max-md:py-[10px]">
      <h4 className="font-[600]">{label}</h4>
      <h4 className="font-[500]">{value}</h4>
    </div>
  )
}

export default PreviousDataDisplay
