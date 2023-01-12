import { useContext } from "react"
import DataContext from "../data/DataContext"

const ReportComponent = ()=>{
  const {income, expense} = useContext(DataContext)
  const balance = income-expense
  return(
    <div>
      <p>รายรับ : {income}</p>
      <p>รายจ่าย : {expense}</p>
      <p>เงินเหลือ : {balance}</p>
      {/* สวัสดี {name} */}
      {/* <DataContext.Consumer>
        {context=> <p>รายรับ : {context.income}<br></br>รายรับ : {context.expense}</p>}
      </DataContext.Consumer> */}
    </div>
  )
}

export default ReportComponent