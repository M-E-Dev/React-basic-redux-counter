import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { clearTodoList } from '../../redux/actions/todoActions'
import TodoItem from './TodoItem'

const TodoList = () => {
    const { list } = useSelector((state) => state.todoReducer )
    const dispatch = useDispatch();

    const handleClearList = () => {
        dispatch(clearTodoList())
    }
    console.log(list)
    
    return(
        <div>
            <div>
                {
                    list.map((todo) => ( <TodoItem key={todo.id} {...todo} /> ))
                }
            </div>
            <div className='clear-wrapper'>
                <button onClick={handleClearList} className="clear-button">
                    Clear
                </button>
            </div>
        </div>
    )
}

export default TodoList