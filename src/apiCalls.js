export function fetchTasks() {
  return fetch('http://localhost:5000/tasks')
  .then(res => {
    if (res.ok) {
      return res.json()
    } else {
      throw res
    }
  })
}

export function fetchTask(id) {
  return fetch(`http://localhost:5000/tasks/${id}`)
  .then(res => {
    if (res.ok) {
      return res.json()
    } else {
      throw res
    }
  })
}

export function addTask(task) {
  return fetch('http://localhost:5000/tasks', 
  {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(task)
  })
  .then(res => {
    if (res.ok) {
      return res.json()
    } else {
      throw res
    }
  })
}

export function removeTask(id) {
  return fetch(`http://localhost:5000/tasks/${id}`, 
  {
    method: 'DELETE',
  })
  .then(res => {
    if (res.ok) {
      return res.json()
    } else {
      throw res
    }
  })
}

export const changePriority = async (id, taskToSend) => {
  return fetch(`http://localhost:5000/tasks/${id}`, 
  {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(taskToSend)
  })
  .then(res => {
    if (res.ok) {
      return res.json()
    } else {
      throw res
    }
  })
}