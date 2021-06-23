import React from 'react'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import App from '../App/App'
import { fetchTasks, fetchTask, addTask, removeTask, changePriority } from '../../apiCalls'
jest.mock('../../apiCalls')

describe('App',  () => {
  it('should set the default tasks state', async () =>{
    let emptyTasks = [];

    await fetchTasks.mockResolvedValueOnce(emptyTasks)

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    await waitFor(() => expect(fetchTasks).toHaveBeenCalledTimes(1))

    let noTasksMsg = screen.getByText('No tasks to display')
    expect(noTasksMsg).toBeInTheDocument()

  })

  it('should set the current tasks state if tasks exist', async () =>{
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

    await fetchTasks.mockResolvedValueOnce(tasks)

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    await waitFor(() => expect(fetchTasks).toHaveBeenCalledTimes(1))

    let text1 = screen.getByText(tasks[0].text)
    let date1 = screen.getByText(tasks[0].date)
    expect(text1).toBeInTheDocument()
    expect(date1).toBeInTheDocument()

    let text2 = screen.getByText(tasks[1].text)
    let date2 = screen.getByText(tasks[1].date)
    expect(text2).toBeInTheDocument()
    expect(date2).toBeInTheDocument()
  })

  it('should be able to add a new task', async () => {
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
    let newTask = {
      "text": "Pick up mom at airport",
      "date": "August 17, 2021, 11:00 AM",
      "priority": false,
      "id": 3
      }

    await fetchTasks.mockResolvedValueOnce(tasks)

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    await waitFor(() => expect(fetchTasks).toHaveBeenCalledTimes(1))

    let text1 = screen.getByText(tasks[0].text)
    let date1 = screen.getByText(tasks[0].date)
    expect(text1).toBeInTheDocument()
    expect(date1).toBeInTheDocument()

    let text2 = screen.getByText(tasks[1].text)
    let date2 = screen.getByText(tasks[1].date)
    expect(text2).toBeInTheDocument()
    expect(date2).toBeInTheDocument()

    let addTaskBtn = screen.getByText('Add Task')
    expect(addTaskBtn).toBeInTheDocument()
    fireEvent.click(addTaskBtn)

    let closeBtn = screen.getByText('Close')
    expect(closeBtn).toBeInTheDocument()

    let submitTaskBtn = screen.getByText('Submit this task')
    expect(submitTaskBtn).toBeInTheDocument()

    const taskInput = screen.getByPlaceholderText('Add Task')
    expect(taskInput).toBeInTheDocument()

    const dateTimeInput = screen.getByPlaceholderText('Select a date & time')
    expect(dateTimeInput).toBeInTheDocument()

    const checkBox = screen.getByRole('checkbox')
    expect(checkBox).toBeInTheDocument()

    fireEvent.change(taskInput, {target:{value: newTask.text}})
    expect(taskInput.value).toBe(newTask.text)

    fireEvent.change(dateTimeInput, {target:{value: newTask.date}})
    expect(dateTimeInput.value).toBe(newTask.date)

    fireEvent.click(submitTaskBtn)
    await addTask.mockResolvedValueOnce(newTask)
    await waitFor(() => expect(addTask).toHaveBeenCalledTimes(1))

    tasks = [{
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
      },
      {
      "text": "Pick up mom at airport",
      "date": "August 17, 2021, 11:00 AM",
      "priority": false,
      "id": 3
      }
    ]

    await fetchTasks.mockResolvedValueOnce(tasks)
    
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    
    await waitFor(() => expect(fetchTasks).toHaveBeenCalledTimes(2))

  })



})







