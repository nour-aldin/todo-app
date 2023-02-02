import React, { useState } from "react";

const TodoModal = ({ handleCancel, sendData }) => {

  const [title, setTitle] = useState("")
  const [select, setSelect] = useState("Incomplete")
  const validation = () => {
    if (title === ""){
      alert("please add a title ")
    } else {
      sendData(title, select)
    }
  }

  return (
    <div>
      <div className="grid grid-row-1 place-items-end mt-8">
        <button className="bg-stone-300 w-7 text-xl font-semibold rounded-full " onClick={() => handleCancel()}>
          X
        </button>
      </div>
      <div className="grid grid-row-1 place-items-start bg-orange-200 w-autorounded-lg rounded-lg mt-5">
        <div className="m-5">
        <h3 className="uppercase font-mono font-semibold text-3xl ">
            Add todo
          </h3>
            <label className="block mt-5 font-mono font-semibold text-gray-800 text-2xl">Title</label>
            <input className="block mt-1 p-2 rounded border-2 border-orange-400 focus:border-orange-600 w-[248px]" type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <label className="block mt-5 font-mono font-semibold text-gray-800 text-2xl">Status</label>
            <select className="block mt-1 mb-5 p-2 rounded border-2 border-orange-400 focus:border-orange-600 w-[248px]" value={select} onChange={e => setSelect(e.target.value)}>
              <option value="incomplete">Incomplete</option>
              <option value="completed">completed</option>
            </select>
            <button className="w-[120px] rounded text-white bg-orange-600 h-10 font-semibold" onClick={() => validation()}>Add Task</button>
            <button className="w-[120px] rounded text-black bg-gray-200 h-10 font-semibold ml-2" onClick={() => handleCancel()}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default TodoModal;
