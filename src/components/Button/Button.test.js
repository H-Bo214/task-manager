import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from '../Button/Button'
import { MemoryRouter } from 'react-router-dom'

describe('Button',  () => {
  it('should render a button on page load with Add Task text',  () => {
      render (
        <MemoryRouter>
          <Button
            btnText={'Add Task'}
          />
        </MemoryRouter>
       ) 
    const addTaskBtn = screen.getByRole('button', {name: 'Add Task'})
    expect(addTaskBtn).toBeInTheDocument()
  })

  it('should render a button with Close text when clicked',  () => {
    let btnClick = jest.fn()
    render (
      <MemoryRouter>
        <Button
          btnText={'Add Task'}
          onClick={btnClick}
        />
      </MemoryRouter>
     ) 

    const addTaskBtn = screen.getByRole('button')
    expect(addTaskBtn).toBeInTheDocument()

    fireEvent.click(addTaskBtn)
    expect(btnClick).toHaveBeenCalledTimes(1)

    render (
      <MemoryRouter>
        <Button
          btnText={'Close'}
          onClick={btnClick}
        />
      </MemoryRouter>
     ) 

    const closeBtn = screen.getByRole('button', {name: 'Close'})    
    expect(closeBtn).toBeInTheDocument()
  })

})