import { useState, useEffect } from 'react'
import './FormComponent.css'
import {v4 as uuidv4} from 'uuid'

const FormComponent = (props)=>{
  // console.log('Render Form Component');
  const [title,setTitle] = useState('')
  const [cost,setCost] = useState('')
  const [formValid,setFormValid] = useState(false)

  const inputTitle = (event)=>{
    setTitle(event.target.value);
  }
  const inputCost = (event)=>{
    setCost(Number(event.target.value));
  }
  const saveItem = (event)=>{
    event.preventDefault(); // Anti Refresh Page onSubmit
    // console.log('บันทึกข้อมูลเรียบร้อย');
    const itemData = {
      id:uuidv4(),
      title,
      cost
    }
    // console.log(itemData);
    props.onAddItem(itemData)
    setTitle('')
    setCost('')
  }

  useEffect(()=>{
    const checkData = title.trim().length>0 && cost!==0
    setFormValid(checkData)
  },[title, cost])
  return(
    <div>
      <form onSubmit={saveItem}>
        <div className="form-control">
          <label>ชื่อรายการ</label>
          <input type='text' placeholder="ระบุชื่อรายการ" onChange={inputTitle} value={title}/>
        </div>
        <div className="form-control">
          <label>จำนวนเงิน</label>
          <input type='number' placeholder="ระบุจำนวนเงิน" onChange={inputCost} value={cost}/>
        </div>
        <div>
          <button type="submit" className='btn' disabled={!formValid}>เพิ่มข้อมูล</button>
        </div>
      </form>
    </div>
  )
}

export default FormComponent