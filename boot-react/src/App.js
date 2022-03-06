import GNavBar from "./components/GNavBar";
import GDialog from "./components/GDialog";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <div style={{marginLeft: 10}}>
        <GNavBar />

        <div id="bodyDiv">
            <h1> I am a body.</h1>
            <GDialog buttonName={'Lunch Button Top 1'}/>
            <hr />
            <strong>NOW TESTING GDialog 2nd Dialog</strong>
            <br/>
            <GDialog buttonColor="warning" buttonName={'Lunch Button Yellow 2'}/>
            <hr />

            <strong>TODO APP</strong>
            <TodoApp />


        </div>

        <div id="footerDiv" style={{marginTop: '100px', color: 'green'}}>
            All right reserve @2022, <strong>GreenQbit Technology.</strong>
        </div>

    </div>
  );
}


export default App;
