import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Tasks from '../Tasks/Tasks'
import { MemoryRouter } from 'react-router-dom'

describe('Tasks', () => {
  let tasks = [{
    "text": "Dentist appointment",
    "date": "July 17, 2021, 11:00 AM",
    "priority": false,
    "id": 1
    }, 
    {
    "text": "Buy groceries",
    "date": "June 4, 2021, 11:00 AM",
    "priority": false,
    "id": 2
    }
  ]

  it('should render Tasks',  () => {
    render (
      <MemoryRouter>
        <Tasks 
          tasks={tasks}
        />
      </MemoryRouter>
     ) 

     const text1 = screen.getByText("Dentist appointment")
     expect(text1).toBeInTheDocument()

     const date1 = screen.getByText("July 17, 2021, 11:00 AM")
     expect(date1).toBeInTheDocument()

     const img1 = screen.getAllByRole('img')
     expect(img1[0]).toBeInTheDocument()

     const text2 = screen.getByText("Buy groceries")
     expect(text2).toBeInTheDocument()

     const date2 = screen.getByText("June 4, 2021, 11:00 AM")
     expect(date2).toBeInTheDocument()

     const img2 = screen.getAllByRole('img')
     expect(img2[1]).toBeInTheDocument()
  })

  it('should render a user message if no tasks to display',  () => {
    render (
      <MemoryRouter>
        <Tasks 
          tasks={[]}
        />
      </MemoryRouter>
     ) 
     
     const userMsg = screen.getByText("No tasks to display")
     expect(userMsg).toBeInTheDocument()
  })

})