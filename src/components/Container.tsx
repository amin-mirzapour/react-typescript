type ContainerProps = {
    styles : React.CSSProperties
}

const Container = ({styles} : ContainerProps) => {
  return (
    <div style={styles}>Text Goes around here</div>
  )
}
export default Container