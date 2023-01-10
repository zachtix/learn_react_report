import PropTypes from 'prop-types'
import './Item.css'

const Item = (props)=>{
  const {title,cost} = props
  const status = cost<0 ? 'expense':'income'
  const symbol = cost<0 ? '-':'+'
  return(
    <li className={status}>{title} {status} <span> {symbol} {Math.abs(cost)}</span></li>
  )
}

Item.propTypes={
  title:PropTypes.string.isRequired,
  cost:PropTypes.number.isRequired
}

export default Item