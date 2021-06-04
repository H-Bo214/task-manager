import { useState } from 'react'
import Button from '../Button/Button'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const Form = () => {
  const [text, setText] = useState('')
  const [startDate, setStartDate] = useState(null)
  const [priority, setPriority] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setStartDate(null)
    setText('')
    setPriority(false)
  }

  return (
    <form >
      <label>Task</label>
      <input 
        type='text' 
        placeholder='Add Task'
        value ={text}
        onChange={(e) => setText(e.target.value)}
      />
      <label>Date & Time</label>
      <DatePicker
      
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      shouldCloseOnSelect={false}
      showTimeSelect
      dateFormat="MMMM d, yyyy, h:mm aa"
      placeholderText=" Select a date & time"
    />
    <label>Priority task?</label>  
    <input
      type='checkbox'
      checked={priority}
      value={priority}
      onChange={(e) => setPriority(e.target.checked)}
    />
      <Button 
        btnText='Submit this task'
        onClick={onSubmit}
      />

    </form>
  )
}

export default Form