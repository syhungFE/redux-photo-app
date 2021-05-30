import React, { useEffect, useState } from "react"
import Banner from "components/Banner";
import Images from "constants/images";
import ToDoForm from "features/Todo/components/ToDoForm"
import "./style.scss"
import ToDoList from "features/Todo/components/ToDoList";
import { useDispatch } from "react-redux";
import todoApi from 'api/todoApi';
import { initTodos } from "features/Todo/ToDoSlice";

function MainPage(){
    const [todos, setTodos] = useState([]);
    const dispatch = useDispatch();
    useEffect(()=>{
        try {
            todoApi.getAll()
                .then((response) => {
                    setTodos(response);
                    const todoList = initTodos(response);
                    dispatch(todoList);
                },(error) => {
                    console.log(error);
                })
        }catch (error) {
            console.log(error);
        }
    },[])
    return(
        <div className="todo-page">
            <Banner title="Add necessary tasks 🎉" backgroundUrl={Images.COLORFUL_BG} />
            <div className="todo">
            <div className="todo-form">
                <h3 className="todo-title"> TO DO FORM </h3>
                <ToDoForm/>
            </div>
            <div className="todo-list">
                <h3 className="todo-title"> TO DO LIST </h3>
                <ToDoList todo={todos}/>
            </div>
        </div>
        </div>
    )
}

export default MainPage;