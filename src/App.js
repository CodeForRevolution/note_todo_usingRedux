import { Fragment } from "react";
import { Provider } from "react-redux";
import TodoForm from "./components/ToDoForm/ToDoForm";
import TodoList from "./components/ToDoList/ToDoList";
import {store} from "./redux/store";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { createBrowserRouter,Router,RouterProvider } from "react-router-dom";
import './App.css';
import NoteForm from "./components/NoteForm/NoteForm";
import NoteList from "./components/NoteList/NoteList";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {
  
  const router=createBrowserRouter([
    { 
      path:'note_todo_usingRedux' ,element:<NavBar/> ,children:[
        {index:true,element:<Home/>},
        {path:'todo',element:<TodoForm/>},
        {path:'notes',element:<NoteForm/>}
          
      ]
      
    }
  ])
  return (
    <Provider store={store}>
       <RouterProvider router={router} />
      </Provider>
 
  );
}

export default App;
