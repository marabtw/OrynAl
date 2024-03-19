const LinearGradientHeading = ({ from, to, text, className }) => {
  return (
    <h2
      className={`inline-block ${className}`}
      style={{
        background: `linear-gradient(to right, ${from}, ${to})`,
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
      }}
    >
      {text}
    </h2>
  )
}

export default LinearGradientHeading
