import react from "react";
import reactDom from "react-dom";
import Profile from "./Profile";
import TicTacToe from "./TicTacToe";

const App = (props) => {
    return <div className="app">
         <Profile />
        <div className="dark-mode">
            <h1>dark mode</h1>
        </div>
       <TicTacToe />
        <div className="todo">
            <h1>todo</h1>
        </div>
    </div>
}

reactDom.render(
    <App />, document.getElementById('app'),
);