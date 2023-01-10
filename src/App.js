import Transaction from "./components/Transaction";
import './App.css'
import FormComponent from "./components/FormComponent";
import { useState } from 'react'

function App() {

  const design = {color:'red',textAlign:'center'}
  
  const Title = ()=><h1 style={design}>แอพบัญชีรายรับ - รายจ่าย</h1>
  const Desc = ()=><p>บันทึกรายรับ รายจ่าย</p>
  
  const [items,setItems] = useState([])
  const onAddNewItem = (newItem)=>{
    setItems((prevItem)=>{
      return [newItem,...prevItem]
    })
  }

  return (
    <div className="container">
      <Title/>
      <Desc/>
      <FormComponent onAddItem={onAddNewItem}/>
      <Transaction items= {items}/>
    </div>
  );
}

export default App;
