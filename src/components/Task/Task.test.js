import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Task from '../Task/Task'
import { MemoryRouter } from 'react-router-dom'

describe('Task',  () => {
  it ('should render a task',  () => {
    let task = {
      "text": "Dentist appointment",
      "date": "July 17, 2021, 11:00 AM",
      "priority": false,
      "id": 1
    }

    render (
      <MemoryRouter>
        <Task 
          task={task}
          deleteTask={jest.fn()}
          togglePriority={jest.fn()}
        />
      </MemoryRouter>
     ) 
    const text = screen.getByText(task.text)
    expect(text).toBeInTheDocument()
    const date = screen.getByText(task.date)
    expect(date).toBeInTheDocument()
    const img = screen.getByRole('img')
    expect(img).toBeInTheDocument()
  })

  it('should remove the task when the delete img is clicked',  () => {
    let deleteTask = jest.fn()
    let emptyTask = {
      "text": "",
      "date": "2021-07-17T18:00:00.000Z",
      "priority": false,
      "id": 2
    }
    let task = {
      "text": "Dentist appointment",
      "date": "July 17, 2021, 11:00 AM",
      "priority": false,
      "id": 1
    }

    render (
      <MemoryRouter>
        <Task 
          task={task}
          deleteTask={deleteTask}
        />
      </MemoryRouter>
     ) 
    const text = screen.getByText(task.text)
    expect(text).toBeInTheDocument()
    const date = screen.getByText(task.date)
    expect(date).toBeInTheDocument()
    const img = screen.getByRole('img')
    expect(img).toBeInTheDocument()
    fireEvent.click(img)
    expect(deleteTask).toHaveBeenCalledTimes(1)
    

    
    render (
      <MemoryRouter>
        <Task 
          task={emptyTask}
          deleteTask={deleteTask}
        />
      </MemoryRouter>
     ) 

     const emptyText = screen.getByText(emptyTask.text)
     expect(emptyText).toBeInTheDocument()
  })

})