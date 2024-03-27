const PageIndicatorHeading = ({ text, text2 }) => {
  return (
    <h2 className="mb-[40px] text-[32px] leading-[48px] font-poppins font-[500]">
      <span>{text}</span>
      <span className="font-[700]">-</span>
      <span className="font-[700]">{text2}</span>
    </h2>
  )
}

export default PageIndicatorHeading
