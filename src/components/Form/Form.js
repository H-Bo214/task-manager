import { useState } from 'react'
import Button from '../Button/Button'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import '../Form/Form.css'

const Form = () => {
  const [text, setText] = useState('')
  const [startDate, setStartDate] = useState(null)
  const [priority, setPriority] = useState(false)
  const [error, setError] = useState(null)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!text || !startDate) {
      setError('⚠️ Please enter a task and date.')
      return
    }
    //API call passed down from App.js will go here.
    setStartDate(null)
    setText('')
    setPriority(false)
    setError(null)
  }

  return (
    <form >
      {error && <p>{error}</p>}
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