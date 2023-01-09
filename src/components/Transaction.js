import Item from "./Item"
import './Transaction.css'

const Transaction =  ()=>{
  const data = [
    {id:1,title:'Hospital',cost:'2000'},
    {id:2,title:'Salary',cost:'50000'},
    {id:3,title:'Travel',cost:'500'},
    {id:4,title:'Shoping',cost:'5000'},
  ]
  return (
    <ul className="item-list">
      {/* <Item title='Hospital' cost='2000'/>
      <Item title='Salary' cost='50000'/>
      <Item title='Travel' cost='500'/> */}
      {/* <Item/>
      <Item/>
      <Item/>
      <Item/> */}
      {/* <Item title={data[0].title} cost={data[0].cost}/> */}
      {data.map((e)=>{
        // return <Item title={e.title} cost={e.cost}/>
        return <Item {...e} key={e.id}/>
      })}
    </ul>
  )
}

export default Transaction