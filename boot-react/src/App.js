import GNavBar from "./components/GNavBar";
import GDialog from "./components/GDialog";

function App() {
  return (
    <div>
        <GNavBar />

        <div id="bodyDiv">
            <h1> I am a body.</h1>
            <GDialog buttonName={'Lunch Button Top 1'}/>
            <hr />
            <strong>NOW TESTING GDialog 2nd Dialog</strong>
            <br/>
            <GDialog buttonColor="warning" buttonName={'Lunch Button Yellow 2'}/>

        </div>

        <div id="footerDiv">
            All right reserve @2022, <strong>GreenQbit Technology.</strong>
        </div>

    </div>
  );
}


export default App;
