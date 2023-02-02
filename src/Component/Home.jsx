import { useEffect, useState } from "react";
import TodoModal from "./TodoModal";
import Header from "./Header";
import Task from "./Task";

const Home = () => {
  const [todoModal, setTodoModal] = useState(false);
  const [data, setData] = useState(() => {
    const data = JSON.parse(localStorage.getItem('data'));
    return data || []
  });
  

  useEffect(() => {
    if (data) {
      localStorage.setItem('data', JSON.stringify(data || []));
    } 
    
  }, [data])
  
  const showTodoModal = () => {
    setTodoModal(true);
  };

  //   //this function from TodoModal component
  const handleCancel = () => {
    setTodoModal(false);
  };

  const handleData = (title, select) => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const formattedToday = dd + "/" + mm + "/" + yyyy;

    const task = { title: title, state: select, date: formattedToday };
    setData([...data, task])

    setTodoModal(false);
  };

  const deleteTask = (index) => {
    const newData = data.filter((d, i) => (
       i!== index
    ))
    setData(newData)
    console.log("delete should call useEffect now")
  }

  

  return (
    <div className="mx-[200px] my-[100px]">
      <Header showTodoModal={showTodoModal} />
      {todoModal && (
        <TodoModal handleCancel={handleCancel} sendData={handleData} />
      )}
      {!todoModal && data.length === 0 && (
        <div className="bg-gray-200 m-5 rounded-2xl p-3"><p className="text-black p-5 font-mono font-medium text-xl text-center">EmptyList</p></div>
      )}
      {!todoModal && data.length > 0 && (
        <div className="bg-gray-200 m-5 rounded-2xl p-3">
          <ol>
            {data.map((item, i) => (
              <li key={i}>
                <Task data={{item, i}} deleteTask={() => deleteTask(i)}/>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default Home;
