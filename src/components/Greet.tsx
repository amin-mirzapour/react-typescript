type GreetProps = {
    name : string,
    messageCount : number
    isLoggedIn : boolean
}

const Greet = (props : GreetProps) => {
  return (
    <div>
        <h2>{props.isLoggedIn ? `Welcome ${props.name}, you have ${props.messageCount} new messages` : `welcome geust`}</h2>
    </div>
  )
}
export default Greet