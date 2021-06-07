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
      setError('Please enter a task and date.')
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
      {error && 
      <section className='error-container'>
        <p style={{margin: 0}}>⚠️</p>
        <p style={{color: 'red', margin: 0}}>{error}</p>
      </section>}
      <label htmlFor='task-input'>
        <strong>Task</strong>
      </label>
      <input 
        type='text' 
        placeholder='Add Task'
        value ={text}
        onChange={(e) => setText(e.target.value)}
        id='task-input'
        className='text-input'
      />
      <label htmlFor='date-time-input'>
        <strong>Date & Time</strong>
      </label>
      <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      shouldCloseOnSelect={true}
      showTimeSelect
      dateFormat="MMMM d, yyyy, h:mm aa"
      placeholderText=" Select a date & time"
      id='date-time-input'
      className='text-input'
    />
    <section className='priority-container'>
      <label htmlFor='priority' className='priority-task'>
        <strong>Priority task?</strong>
      </label>  
      <input
        type='checkbox'
        checked={priority}
        value={priority}
        onChange={(e) => setPriority(e.target.checked)}
        id='priority'
      />
    </section>
      <Button 
        btnText='Submit this task'
        onClick={onSubmit}
      />

    </form>
  )
}

export default Form