import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../Header/Header'
import { MemoryRouter } from 'react-router-dom'

describe('Header', () => {
  it('should render the Header on page load', () => {
   render (
    <MemoryRouter>
      <Header 
        title={'Task Manager'}
      />
    </MemoryRouter>
   ) 

   const title = screen.getByRole('heading', {name: 'Task Manager'})
   expect(title).toBeInTheDocument()
  })

  it('should render an Add Task button on page load', () => { 
    render (
      <MemoryRouter>
        <Header 
          btnText ={'Add Task'}
        />
      </MemoryRouter>
     ) 
    const addTaskBtn = screen.getByRole('button', {name: 'Add Task'})
    expect(addTaskBtn).toBeInTheDocument()
  })
  
  it('should render a Close button if the form is displaying', () => {
    render (
      <MemoryRouter>
        <Header 
          displayAddTask ={true}
          btnText ={'Close'}
        />
      </MemoryRouter>
     ) 
    const addTaskBtn = screen.getByRole('button', {name: 'Close'})
    expect(addTaskBtn).toBeInTheDocument()
  })

})