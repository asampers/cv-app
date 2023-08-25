// eslint-disable-next-line react/prop-types
function Container({title, children}) {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  )
}

export { Container };