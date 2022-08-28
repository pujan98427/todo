import { useState } from "react";
import Todolist from "./todolist";

function App() {

	const [inputList, setInputList] = useState(""); // input changes
	const [itemList, setItemList] = useState([]);// adding input changes to list

	//input field handler
	const InputHandler = (event) => {
		setInputList(event.target.value)
	}

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			todoHandler();
		}
	}

	// + button handler
	const todoHandler = () => {
		if ("" !== inputList) {
			setItemList((oldTodoItem) => {
				return [...oldTodoItem, inputList]
			});
			setInputList('');
		}

	}



	// remove  this  todo item
	const delThisItem = (id) => {
		setItemList((oldTodoItem) => {
			return oldTodoItem.filter((element, index) => {
				return index !== id;
			})
		})
	}
	return (
		<div className="App">
			<div className="todo-list">
				<div className="todo-list__wrapper">
					<h1 className="todo-title">Todo</h1>
					<div className="todo-list__container">

						<div className="input-container">
							<div className="input-field">
								<input type="text" placeholder="Add Todo..." value={inputList} onKeyDown={handleKeyDown} onChange={InputHandler} />
								<span className="underline"></span>

							</div>
							<button onClick={todoHandler} className="todoAdd">&#43;</button>
						</div>
						<div className="todo-display">
							<ul class="todo-display__wrapper">
								{

									itemList.map((element, index) => {
										return <Todolist key={index} id={index} onSelect={delThisItem} listItem={element} />
									})
								}

							</ul>
						</div>
					</div>

				</div>
			</div>
		</div>
	);
}

export default App;
