import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Form from '../Form/Form'
import { MemoryRouter } from 'react-router-dom'

describe('Form',  () => {
  it('should render a form',  () => {
    render (
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    )
    
    const task = screen.getByLabelText('Task')
    expect(task).toBeInTheDocument()

    const dateTime = screen.getByLabelText('Date & Time')
    expect(dateTime).toBeInTheDocument()

    const taskInput = screen.getByPlaceholderText('Add Task')
    expect(taskInput).toBeInTheDocument()

    const dateTimeInput = screen.getByPlaceholderText('Select a date & time')
    expect(dateTimeInput).toBeInTheDocument()

    const checkBox = screen.getByRole('checkbox')
    expect(checkBox).toBeInTheDocument()

    const button = screen.getByText('Submit this task')
    expect(button).toBeInTheDocument()
  })

  it('should be able to update the task input value',  () => {
    render (
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    )

    const taskInput = screen.getByPlaceholderText('Add Task')
    expect(taskInput).toBeInTheDocument()

    const taskToDo = 'Doctor\'s appointment'
    fireEvent.change(taskInput, {target:{value: taskToDo}})
    expect(taskInput.value).toBe(taskToDo)

  })

  it('should be able to update the date & time value',  () => {
    render (
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    )

    const dateTime = screen.getByLabelText('Date & Time')
    expect(dateTime).toBeInTheDocument()

    const dateTimeValue = 'July 17, 2021, 11:00 AM'
    
    fireEvent.change(dateTime, {target:{value: dateTimeValue}})
    expect(dateTime.value).toBe(dateTimeValue)

  })




})