export function fetchTasks() {
  return fetch('http://localhost:5000/tasks')
  .then(res => {
    if (res.ok) {
      console.log('res', res)
      return res.json()
    } else {
      throw res
    }
  })
}

