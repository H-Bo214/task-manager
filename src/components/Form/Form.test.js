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

})