import React from 'react'
import {  fireEvent, render, screen, waitFor } from '@testing-library/react'
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
    expect(checkBox.checked).toBe(false)

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

    let text3 = screen.getByText(tasks[2].text)
    let date3 = screen.getByText(tasks[2].date)
    expect(text3).toBeInTheDocument()
    expect(date3).toBeInTheDocument()
  })

  it('should be able to remove a task',  async () => {
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

    let deleteIconTask2 = screen.getAllByRole('img')
    expect(deleteIconTask2[1]).toBeInTheDocument()

    fireEvent.click(deleteIconTask2[1])
    await removeTask.mockResolvedValueOnce(tasks[1].id)  
    await waitFor(() => expect(removeTask).toHaveBeenCalledTimes(1))
    
    tasks = [{
      "text": "Dentist appointment",
      "date": "July 17, 2021, 11:00 AM",
      "priority": false,
      "id": 1
      }
    ]

    await fetchTasks.mockResolvedValueOnce(tasks)
    await waitFor(() => expect(fetchTasks).toHaveBeenCalledTimes(1))

    expect(tasks).toHaveLength(1)
  })

  // it('should be able to fetch a single task',  async () => {
  //   let tasks = [{
  //     "text": "Dentist appointment",
  //     "date": "July 17, 2021, 11:00 AM",
  //     "priority": false,
  //     "id": 1
  //     }, 
  //     {
  //     "text": "Buy groceries",
  //     "date": "June 4, 2021, 11:00 AM",
  //     "priority": false,
  //     "id": 2
  //     }
  //   ]

  //   await fetchTasks.mockResolvedValueOnce(tasks)

  //   render(
  //     <MemoryRouter>
  //       <App />
  //     </MemoryRouter>
  //   )

  //   await waitFor(() => expect(fetchTasks).toHaveBeenCalledTimes(1))

  //   let text1 = screen.getByText(tasks[0].text)
  //   let date1 = screen.getByText(tasks[0].date)
  //   expect(text1).toBeInTheDocument()
  //   expect(date1).toBeInTheDocument()

  //   let text2 = screen.getByText(tasks[1].text)
  //   let date2 = screen.getByText(tasks[1].date)
  //   expect(text2).toBeInTheDocument()
  //   expect(date2).toBeInTheDocument()

  //   fireEvent.dblClick(text1)
  //   await waitFor(() => expect(fetchTask).toHaveBeenCalledTimes(1))
  //   await fetchTask.mockResolvedValueOnce(tasks[0])

    
  // })
  // it('should be able to change the priority of a task', async () =>{
  //   let tasks = [{
  //     "text": "Dentist appointment",
  //     "date": "July 17, 2021, 11:00 AM",
  //     "priority": false,
  //     "id": 1
  //     }
  //   ]

  //   let updatedTask = {
  //     "text": "Dentist appointment",
  //     "date": "July 17, 2021, 11:00 AM",
  //     "priority": true,
  //     "id": 1
  //     }

  //   await fetchTasks.mockResolvedValueOnce(tasks)

  //   render(
  //     <MemoryRouter>
  //       <App />
  //     </MemoryRouter>
  //   )

  //   await waitFor(() => expect(fetchTasks).toHaveBeenCalledTimes(1))

  //   let text1 = screen.getByText(tasks[0].text)
  //   let date1 = screen.getByText(tasks[0].date)
    
  //   expect(text1).toBeInTheDocument()
  //   expect(date1).toBeInTheDocument()
  //   expect(tasks[0].priority).toBe(false)
    
  //   fireEvent.dblClick(text1)
  //   await waitFor(() => expect(fetchTask).toHaveBeenCalledTimes(1))
  //   await fetchTask.mockResolvedValueOnce(tasks[0])
    
    // await changePriority.mockResolvedValueOnce(tasks[0].id, updatedTask)

    // await waitFor(() => expect(changePriority).toHaveBeenCalledTimes(1))
    // expect(priority1).toBe(true)
  // })

})