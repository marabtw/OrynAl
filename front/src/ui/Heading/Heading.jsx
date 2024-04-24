const Heading = ({ tag = "h1", text = "not transmitted", className }) => {
  // const Tag = tag
  return <h1 className={`${className}`}>{text}</h1>
}

export default Heading
