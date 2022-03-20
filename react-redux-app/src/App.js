import logo from './logo.svg';
import './App.css';
import {UserAvatar, UserStats} from "./UserStats";


// Nav doesn't need to know about `user` anymore
const Nav = () => (
    <div className="nav">
      <UserAvatar size="small" />
    </div>
);

const Content = () => <div className="content">main content here</div>;

// Sidebar doesn't need to know about `user` anymore
const Sidebar = () => (
    <div className="sidebar">
      <UserStats />
    </div>
);

// Body doesn't need to know about `user` anymore
const Body = () => (
    <div className="body">
      <Sidebar />
      <Content />
    </div>
);

// App doesn't hold state anymore, so it can be
// a stateless function
function App() {
  return (
      <div className="app">
        <Nav />
        <Body />
      </div>
  );
}

export default App;
