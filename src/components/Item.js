import PropTypes from 'prop-types'
import './Item.css'
// import DataContext from '../data/DataContext'

const Item = (props)=>{
  const {title,cost} = props
  const status = cost<0 ? 'expense':'income'
  const symbol = cost<0 ? '-':'+'
  return(
    <li className={status}>{title} <span> {symbol} {Math.abs(cost)}</span>
      {/* <DataContext.Consumer>
      {value=><p>{value}</p>}
    </DataContext.Consumer> */}
    </li> // Math.abs rm symbol + - in Number
  )
}

Item.propTypes={
  title:PropTypes.string.isRequired,
  cost:PropTypes.number.isRequired
}

export default Item