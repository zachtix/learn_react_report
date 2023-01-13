import Transaction from "./components/Transaction";
import './App.css'
import FormComponent from "./components/FormComponent";
import { useEffect, useState } from 'react'
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";

function App() {

  const initState = [
    {id:1,title:'ค่าเช่าบ้าน',cost:-2000},
    {id:2,title:'เงินเดือน',cost:12000},
    {id:3,title:'ค่าเดินทาง',cost:-500},
    {id:4,title:'ขายของ',cost:2000}
  ]

  const design = {color:'red',textAlign:'center'}
  
  const Title = ()=><h1 style={design}>บัญชีรายรับ - รายจ่าย</h1>
  // const Desc = ()=><p>บันทึกรายรับ รายจ่าย</p>
  
  const [items,setItems] = useState(initState)

  const [reportIncome, setReportIncome] = useState(0)
  const [reportExpense, serReportExpense] = useState(0)

  const onAddNewItem = (newItem)=>{
    setItems((prevItem)=>{
      return [newItem,...prevItem]
    })
  }

  useEffect(()=>{
    const costs = items.map(e=>e.cost)
    const income = costs.filter(e=>e>0).reduce((total,e)=>total+=e,0)
    const expense = costs.filter(e=>e<0).reduce((total,e)=>total-=e,0)
    // console.log(income);
    // console.log(expense);
    setReportIncome(income)
    serReportExpense(expense)
  },[items,reportIncome,reportExpense])

  return (
    <DataContext.Provider value={
      {
        income : reportIncome,
        expense : reportExpense
      }
    }>
      <div className="container">
        <Title/>
        <ReportComponent/>
        {/* <Desc/> */}
        <FormComponent onAddItem={onAddNewItem}/>
        <Transaction items= {items}/>
      </div>
    </DataContext.Provider>
  );
}

export default App;
