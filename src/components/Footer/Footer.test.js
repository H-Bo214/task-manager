import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '../Footer/Footer'
import { MemoryRouter } from 'react-router-dom'

describe('Footer',  () => {
  it('should display an About clickable link',  () => {
    render (
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
     ) 
    const about = screen.getByText('About')
    expect(about).toBeInTheDocument()
  
    fireEvent.click(about)
    expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '/about')

  })

})