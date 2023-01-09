import Transaction from "./components/Transaction";
import './App.css'
import FormComponent from "./components/FormComponent";

const design = {color:'red',textAlign:'center'}

const Title = ()=><h1 style={design}>แอพบัญชีรายรับ - รายจ่าย</h1>
const Desc = ()=><p>บันทึกรายรับ รายจ่าย</p>
function App() {
  return (
    <div className="container">
      <Title/>
      <Desc/>
      <FormComponent/>
      <Transaction/>
    </div>
  );
}

export default App;
