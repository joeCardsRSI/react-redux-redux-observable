import React from 'react'
import TodoList from './features/todos/TodoList';
import User from './features/user/User';

function App() {
  return (
    <div className="App">
      <nav>
        <section>
          <h1>Redux Fundamentals Example</h1>

          <div className="navContent">
            <div className="navLinks"></div>
          </div>
        </section>
      </nav>
      <section>
        <h2>Welcome to the Redux Fundamentals example app!</h2>
        <TodoList />
        <User />
      </section>
    </div>
  )
}

export default App
