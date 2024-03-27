const Heading = ({ tag = "h1", text = "not transmitted", className }) => {
  const Tag = tag

  return <Tag className={`${className}`}>{text}</Tag>
}

export default Heading
