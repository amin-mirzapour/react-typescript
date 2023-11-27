type ButtonProps = {
    handlClick : (event : React.MouseEvent<HTMLButtonElement>, id:number)=> void
}
const Button = (props : ButtonProps) => {
  return (
    <button onClick={(event)=> props.handlClick(event , 1)}>Button</button>
  )
}
export default Button