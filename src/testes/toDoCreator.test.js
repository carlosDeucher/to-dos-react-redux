import React from "react"
import {render, screen} from "./test-utils.js"
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import ToDos from "../components/ToDo"
import ToDoCreator from "../components/ToDoCreator.jsx"
// test("verify if to-do-box isnt in the component", ()=>{
//     render(<ToDos toDosProps={[]} finishToDoProps={()=>{}} deleteToDoProps={()=>{}}></ToDos>)
//     expect(screen.getByTestId("to-do-box")).not.toBeInTheDocument();
// })
test("verify If ToDo Was Created", async()=>{
    render(<ToDoCreator></ToDoCreator>)
   await userEvent.type(screen.getByPlaceholderText("Digite o nome da tarefa"), "blabla")
    userEvent.click(screen.getByTestId("red"))
    userEvent.click(screen.getByText("Salvar"))
    
    screen.debug()
    const input= await screen.findByText("blabla");
    expect(input).toBeInTheDocument();
    //  expect(screen.getByTestId("to-do-box")).toBeInTheDocument();
    
});
