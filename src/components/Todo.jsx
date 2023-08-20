import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input"; 

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const addTodo = () => {
    if (firstname.trim() !== "" && lastname.trim() !== "") {
      const fullName = `${firstname} ${lastname}`;
      setTodos([...todos, fullName]);
      setFirstname("");
      setLastname("");
    }
  };

  return (
    <div>
      <div className="w-[100%] max-w-[1100px] mx-auto">
        <div className="flex mt-10 gap-9 mb-10">
          <div className="w-[250px] p-5 border rounded">
            <h1 className="text-2xl text-center mb-3">Todo List</h1>
            <div className="flex flex-col gap-3">
              <Input
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                placeholder={"First name"}
              />
              <Input
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                placeholder={"Last name"}
              />
              <Button
                className={
                  "bg-sky-700 rounded-md py-[10px] px-[15px] text-base text-white"
                }
                onClick={addTodo}
              >
                Add
              </Button>
            </div>
          </div>
          {todos.length > 0 && (
            <div className="w-[250px] p-5 border rounded">
              <table>
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                  </tr>
                </thead>
                <tbody>
                  {todos.map((item, index) => (
                    <tr key={index}>
                      <td>{item.split(" ")[0]}</td>
                      <td>{item.split(" ")[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
