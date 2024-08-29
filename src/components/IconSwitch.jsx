export const IconSwitch = ({icon, onSwitch}) => {
  return (
    <span className="material-icons btn-block__switch" onClick={onSwitch}>{icon}</span>
  )
}