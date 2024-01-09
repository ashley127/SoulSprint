import React from 'react'
import TodoList from '../components/TodoList'

function DashboardPage() {
  return (
    <div className='flex'>
          <div className='todo-app'>
            <TodoList />
          </div>
      </div>
  )
}

export default DashboardPage