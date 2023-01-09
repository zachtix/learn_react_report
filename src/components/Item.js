import PropTypes from 'prop-types'

const Item = (props)=>{
  const {title,cost} = props
  return(
    <li className='Item'>{title} <span> {cost}</span></li>
  )
}

Item.propTypes={
  title:PropTypes.string.isRequired,
  cost:PropTypes.number.isRequired
}

export default Item