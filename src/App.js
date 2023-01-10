import Transaction from "./components/Transaction";
import './App.css'
import FormComponent from "./components/FormComponent";
import { useState } from 'react'
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";

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
    <DataContext.Provider value={'ก้องรักสยาม'}>
      <div className="container">
        <Title/>
        <ReportComponent/>
        <Desc/>
        <FormComponent onAddItem={onAddNewItem}/>
        <Transaction items= {items}/>
      </div>
    </DataContext.Provider>
  );
}

export default App;
