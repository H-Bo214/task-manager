import { useState } from 'react'
import Button from '../Button/Button'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import '../Form/Form.css'

const Form = ({ addNewTask }) => {
  const [text, setText] = useState('')
  const [date, setDate] = useState(null)
  const [priority, setPriority] = useState(false)
  const [error, setError] = useState(null)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!text || !date) {
      setError('Please enter a task and date.')
      return
    }

    addNewTask({text, date, priority})
    setDate(null)
    setText('')
    setPriority(false)
    setError(null)
  }

  return (
    <form >
      {error && 
      <section className='error-container'>
        <p style={{marginRight: 11}}>⚠️</p>
        <p style={{color: 'red'}}>{error}</p>
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
        onFocus={(e) => setError(null)}
      />
      <label htmlFor='date-time-input'>
        <strong>Date & Time</strong>
      </label>
      <DatePicker
        selected={date}
        dateFormat="MMMM d, yyyy, h:mm aa"
        onChange={(date) => setDate(date)}
        shouldCloseOnSelect={true}
        showTimeSelect
        placeholderText="Select a date & time"
        id='date-time-input'
        className='text-input'
        onFocus={(e) => setError(null)}
      />
      <section className='priority-container'>
        <input
          type='checkbox'
          checked={priority}
          value={priority}
          onChange={(e) => setPriority(e.target.checked)}
          id='priority'
          className='check-box'
        />
        <label htmlFor='priority' className='priority-task'>
          <strong>Priority</strong>
        </label>  
      </section>
      <Button 
        btnText='Submit this task'
        onClick={onSubmit}
        color={'#457B9D'}
        btnClassName='submit-task-btn'
      />
    </form>
  )
}

export default Form