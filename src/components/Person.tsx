import {PersonProps} from './Person.typs'
const Person = (props : PersonProps) => {
  return (
    <div>{props.name.first} - {props.name.last}</div>
  )
}
export default Person