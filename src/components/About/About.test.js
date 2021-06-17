import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import About from '../About/About'
import { MemoryRouter } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe('About', () => {
  it('should render all content on page load', () => {
    render (
      <MemoryRouter>
        <About/>
      </MemoryRouter>
     ) 
    
     const title = screen.getByRole('heading', {name: 'Task Manager'})
     expect(title).toBeInTheDocument()

     const goBackBtn = screen.getByRole('button', {name: 'Go Back'})
     expect(goBackBtn).toBeInTheDocument()

     const heading = screen.getByText('This application was made with:')
     expect(heading).toBeInTheDocument()

     const resource1 = screen.getByText('React')
     expect(resource1).toBeInTheDocument()

     const resource2 = screen.getByText('React Router')
     expect(resource2).toBeInTheDocument()

     const resource3 = screen.getByText('React DatePicker')
     expect(resource3).toBeInTheDocument()

     const resource4 = screen.getByText('Git')
     expect(resource4).toBeInTheDocument()

     const resource5 = screen.getByText('GitHub')
     expect(resource5).toBeInTheDocument()

     const resource6 = screen.getByText('Icon from Vectors Market from flaticon')
     expect(resource6).toBeInTheDocument()

     const resource7 = screen.getByText('json-server')
     expect(resource7).toBeInTheDocument()

  })

  it('should render an Go Back button on page load', () => { 
    render (
      <MemoryRouter>
        <About />
      </MemoryRouter>
     ) 
    const goBackBtn = screen.getByRole('button', {name: 'Go Back'})
    expect(goBackBtn).toBeInTheDocument()
  })

  it('should return to the home page when Go Back is clicked', () => { 
    const history = createMemoryHistory()
    render (
      <MemoryRouter>
        <About />
      </MemoryRouter>
     ) 

    const goBackBtn = screen.getByRole('button', {name: 'Go Back'})
    expect(goBackBtn).toBeInTheDocument()
    expect(history.location.pathname).toBe('/')

  })

  it('should route to the correct resource path', () => {
    render (
      <MemoryRouter>
        <About/>
      </MemoryRouter>
     ) 
    
     const resource1 = screen.getByText('React')
     expect(resource1).toBeInTheDocument()
     expect(screen.getByText('React').closest('a')).toHaveAttribute('href', 'https://reactjs.org/')

     const resource2 = screen.getByText('React Router')
     expect(resource2).toBeInTheDocument()
     expect(screen.getByText('React Router').closest('a')).toHaveAttribute('href', 'https://reactrouter.com/')

     const resource3 = screen.getByText('React DatePicker')
     expect(resource3).toBeInTheDocument()
     expect(screen.getByText('React DatePicker').closest('a')).toHaveAttribute('href', 'https://preview.npmjs.com/package/react-datepicker')

     const resource4 = screen.getByText('Git')
     expect(resource4).toBeInTheDocument()
     expect(screen.getByText('Git').closest('a')).toHaveAttribute('href', 'https://git-scm.com/')

     const resource5 = screen.getByText('GitHub')
     expect(resource5).toBeInTheDocument()
     expect(screen.getByText('GitHub').closest('a')).toHaveAttribute('href', 'https://github.com/')

     const resource6 = screen.getByText('Icon from Vectors Market from flaticon')
     expect(resource6).toBeInTheDocument()
     expect(screen.getByText('Icon from Vectors Market from flaticon').closest('a')).toHaveAttribute('href', 'https://www.flaticon.com/authors/vectors-market')

     const resource7 = screen.getByText('json-server')
     expect(resource7).toBeInTheDocument()
     expect(screen.getByText('json-server').closest('a')).toHaveAttribute('href', 'https://github.com/typicode/json-server')
  })

})