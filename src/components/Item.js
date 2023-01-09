
const Item = (props)=>{
  const {title,cost} = props
  return(
    <li className='Item'>{title} <span> {cost}</span></li>
  )
}

export default Item