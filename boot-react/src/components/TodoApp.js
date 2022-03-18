import React from 'react';
import {Badge, Button} from "react-bootstrap";

//TODO 1: Extract ITEM To separate componet, demonstrate steate uplifting with calling parent method, state
// TODO 2: Do same thing with functional component
// TODO 3: Life cycle in the class component(componentDidMount) , and Function component(useEffect)
class TodoApp extends React.Component {

    //1. React Hook can't be used inside the class component
    constructor(props) {
        super(props);

        this.state = {
            items: [{
                id: Date.now(),
                text: 'Eating time..at 9AM',
                completed: false
            }],
            text: ''
        };
        this.handleChange = this.handleChange.bind(this); //block scope ma outside scope inject garnu
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheck = this.handleCheck.bind(this);

    }

    handleChange(e) {//event => fetch value from event
        //e.preventDefault(); //We don't need it now
        this.setState({text: e.target.value});
    }

    handleSubmit(e) {
        //e.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }

        const newItem = {
            id: Date.now(),
            text: this.state.text,
            completed: false
        };
        this.setState((state) => ({
            items: state.items.concat(newItem),
            text: '',
        }));

    }

    handleCheck(e, itemId) {
        this.setState((state) => ({
            items: state.items.map(item => {
                //we shouldn't update original value => side effect.
                //IMMUTABLE => data must be immutable.
                //Dont do : item.completed = false
               const itm = {...item}
               if(itemId === itm.id) { //strict check:value check + data type check
                   itm.completed = true
               }

                return itm
            }),
            text: state.text
        }));
    }

    //react lifecycle
    componentDidMount() {
        console.log(1, 'TodoApp is mounted..')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(1, 'TodoApp component updated..')
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <h3>TODO</h3>

                {/*list content*/}
                 <ul>
                     {this.state.items.map(item => (
                         <li key={item.id}>
                             {item.completed ? <strike>{item.text}</strike> : item.text}
                             <input
                                 type="checkbox"
                                 onChange={(e) => this.handleCheck(e, item.id)}
                                 disabled={item.completed}
                             />
                         </li>
                     ))}
                 </ul>


                <form>
                    <label>What needs to be done?</label> <br/>
                    <input id="new-todo" value={this.state.text} onChange={this.handleChange} /> <br/>
                    <Button variant={"info"} onClick={this.handleSubmit}>
                        Add <Badge bg="primary" pill>{this.state.items.filter(item => !item.completed).length}</Badge>
                    </Button>
                </form>
            </div>
        )
    }

}

export default TodoApp
