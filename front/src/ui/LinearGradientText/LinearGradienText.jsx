const LinearGradientText = ({
  tag = "h1",
  from = "#fff",
  to = "#000",
  text = "not transmitted",
  className,
  clampsObject,
}) => {
  return (
    <div>
      <h2
        className={`inline-block ${className}`}
        style={{
          background: `linear-gradient(to right, ${from}, ${to})`,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          fontSize: clampsObject?.fontSize ? clampsObject.fontSize : undefined,
          lineHeight: clampsObject?.lineHeight
            ? clampsObject.lineHeight
            : undefined,
        }}
      >
        {text}
      </h2>
    </div>
  )
}

export default LinearGradientText
