import './App.css';
import React, {useState} from "react";
import {UserAvatar, UserStats} from "./UserComp";

const Nav = () => (
    <div className="nav">
      <UserAvatar size="small" />
    </div>
);

const Content = () => <div className="content">main content here</div>;

const Sidebar = () => (
    <div className="sidebar">
      <UserStats />
    </div>
);

const Body = () => (
    <div className="body">
      <Sidebar />
      <Content />
    </div>
);

export const UserContext = React.createContext();

class App extends React.Component {
    state = {
        user: {
            avatar:
                "https://www.gravatar.com/avatar/5c3dd2d257ff0e14dbd2583485dbd44b",
            name: "Dave",
            followers: 1234,
            following: 123
        }
    };

    render() {
        return (
            <div className="app">
                <UserContext.Provider value={this.state.user}>
                    <Nav />
                    <Body />
                </UserContext.Provider>
            </div>
        );
    }
}

/*function App() {

  const userState = useState({
    user: {
      avatar:
          "https://www.gravatar.com/avatar/5c3dd2d257ff0e14dbd2583485dbd44b",
      name: "Dave",
      followers: 1234,
      following: 123
    }
  })


  return (
      <UserContext.Provider value={userState.user}>
        <Nav />
        <Body />
      </UserContext.Provider>
  );
}*/

export default App;
