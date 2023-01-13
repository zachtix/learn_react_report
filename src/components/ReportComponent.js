import { useContext } from "react"
import DataContext from "../data/DataContext"
import './ReportComponent.css'

const ReportComponent = ()=>{
  const {income, expense} = useContext(DataContext)
  const balance = income-expense
  return(
    <div>
      <h4>ยอดคงเหลือ (บาท)</h4>
      <h1>฿ {balance.toLocaleString()}</h1>
      <div className="report-container">
        <div>
          <h4>ยอดรายรับ</h4>
          <p className="report plus">฿{income.toLocaleString()}</p>
        </div>
        <div>
          <h4>ยอดรายจ่าย</h4>
          <p className="report minus">฿{expense.toLocaleString()}</p>
          </div>
      </div>
      {/* <p>รายรับ : {income}</p>
      <p>รายจ่าย : {expense}</p>
      <p>เงินเหลือ : {balance}</p> */}
      {/* สวัสดี {name} */}
      {/* <DataContext.Consumer>
        {context=> <p>รายรับ : {context.income}<br></br>รายรับ : {context.expense}</p>}
      </DataContext.Consumer> */}
    </div>
  )
}

export default ReportComponent