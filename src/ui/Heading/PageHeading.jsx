import CreateButton from "../CreateButton/CreateButton"

const PageHeading = ({ preLocation, location, to }) => {
  return preLocation ? (
    <div className="flex items-center gap-[10px] mb-[40px] font-poppins text-[32px] leading-[48px] font-[500]">
      <h2 className="flex items-center gap-[10px]">
        <span>{preLocation}</span>
        <span className="font-[700]">{" - "}</span>
        <span className="font-[700]">{location}</span>
      </h2>
      {to ? <CreateButton to={to} /> : ""}
    </div>
  ) : (
    <div className="flex gap-[10px] items-center mb-[40px] font-poppins">
      <h2 className="flex items-center text-[32px] leading-[48px] font-[700]">
        {location}
      </h2>
      {to ? <CreateButton to={to} /> : ""}
    </div>
  )
}

export default PageHeading
