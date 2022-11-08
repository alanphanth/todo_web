import logo from './logo.svg'
import './App.css'
import React, { useEffect, useState } from 'react'

const list = [
  {
    id: 1,
    title: '1st Item',
    description: 'Description here.',
  },
  {
    id: 2,
    title: '2nd Item',
    description: 'Another description here.',
  },
  {
    id: 3,
    title: '3rd Item',
    description: 'Third description here.',
  },
]

function App() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://127.0.0.1:8000/api/`)
      const data = await response.json()
      setTodos(data)
    }
    fetchData()
  })
  return (
    <div className="App">
      <div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </div>
      <div>
        {todos.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
