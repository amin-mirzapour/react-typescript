type GreetProps = {
    name : string,
    messageCount? : number
    isLoggedIn?: boolean
}

const Greet = (props : GreetProps) => {
  const {messageCount = 0} = props
  return (
    <div>
        <h2>{props.isLoggedIn ? `Welcome ${props.name}, you have ${messageCount} new messages` : `welcome geust`}</h2>
    </div>
  )
}
export default Greet