import {Badge, Button} from "react-bootstrap";
import React, {useState} from "react";

export const TodoAppFuncV2 = () => {

    const oriValue = {
        items: [{
            id: Date.now(),
            text: 'Eating time..at 9AM',
            completed: false
        }],
        text: ''
    };
    //IMP: useState ie HOOK can be only used inside functional component
    const [todoState, setTodoState] = useState(oriValue)

    function handleChange(e) {
       //DONT DO THIS: IMMUTABLE, can't modify state todoState.text  = 'ABC'
        //DONT DO THIS, DON"T SND ORIGINAL STATE variable+ value: setTodoState(todoState);
        setTodoState({
            ...todoState,
            text: e.target.value
        });
    }

    function handleSubmit(e) {
        //e.preventDefault();
        if (todoState.text.length === 0) {
            return;
        }

        const newItem = {
            id: Date.now(),
            text: todoState.text,
            completed: false
        };
        setTodoState({
            ...todoState,
            items: todoState.items.concat(newItem),
            text: '',
        });

    }

    function handleCheck(e, itemId) {
        setTodoState({
            ...todoState,
            items: todoState.items.map(item => {
                //we shouldn't update original value => side effect.
                //IMMUTABLE => data must be immutable.
                //Dont do : item.completed = false
                const itm = {...item}
                if(itemId === itm.id) { //strict check:value check + data type check
                    itm.completed = true
                }

                return itm
            }),
        });
    }

    return (
        <div>
            <h3>TODO Functional V2</h3>

            {/*list content*/}
            <ul>
                {todoState.items.map(item => (
                    <li key={item.id}>
                        {item.completed ? <strike>{item.text}</strike> : item.text}
                        <input
                            type="checkbox"
                            onChange={(e) => handleCheck(e, item.id)}
                            disabled={item.completed}
                        />
                    </li>
                ))}
            </ul>


            <form>
                <label>What needs to be done?</label> <br/>
                <input id="new-todo" value={todoState.text} onChange={handleChange} /> <br/>
                <Button variant={"info"} onClick={handleSubmit}>
                    Add <Badge bg="primary" pill>{todoState.items.filter(item => !item.completed).length}</Badge>
                </Button>
            </form>
        </div>
    )

}