import Item from "./Item"
import './Transaction.css'
import DataContext from "../data/DataContext"
import { useContext } from "react"
// import {v4 as uuidv4} from 'uuid'

const Transaction =  (props)=>{
  const {items} = props
  const name = useContext(DataContext)
  // const data = [
  //   {title:'Hospital',cost:2000},
  //   {title:'Salary',cost:50000},
  //   {title:'Travel',cost:500},
  //   {title:'Shoping',cost:5000},
  // ]
  return (
    <div>
      <ul className="item-list">
        {/* <Item title='Hospital' cost='2000'/>
        <Item title='Salary' cost='50000'/>
        <Item title='Travel' cost='500'/> */}
        {/* <Item/>
        <Item/>
        <Item/>
        <Item/> */}
        {/* <Item title={data[0].title} cost={data[0].cost}/> */}
        {items.map((e)=>{
          // return <Item title={e.title} cost={e.cost}/>
          return <Item {...e} key={e.id}/>
        })}
      </ul>
      {/* <DataContext.Consumer>
        {value=><p>{value}</p>}
      </DataContext.Consumer> */}
      {name}
    </div>
  )
}

export default Transaction