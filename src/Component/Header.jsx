import React from 'react'

const Header = ({showTodoModal}) => {

  return (
    <>
      <h1 className="text-center text-5xl mb-5 font-bold uppercase font-mono">
        Todo List
      </h1>
      <div className="flex justify-around">
        <button
          className="w-[100px] rounded text-white bg-orange-600 h-10 font-semibold"
          onClick={showTodoModal}
        >
          Add Task
        </button>
        <select className="bg-gray-200 px-1 w-[120px] rounded-md">
          <option value="all">All</option>
          <option value="incomplete">Incomplete</option>
          <option value="completed">completed</option>
        </select>
      </div>
    </>
  )
}

export default Header