import React, { Component } from "react";
import Slider from "./components/Slider";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom/cjs/react-router-dom.min";
// import Api from "./components/Api";
import PostLoader from "./components/PostLoader";
import HeaderContextTask from "./components/TaskContext/Header";
import { UserContext } from "./components/TaskContext/context";
import SideBar from "./components/TaskContext/SideBat";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 1,
        firstName: "User",
        lastName: "Userenko",
        imageSrc: "picture.jpeg",
      },
    };
  }
  render() {
    const { user } = this.state;
    return (
      <BrowserRouter>
        <header>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/slider">Slider</Link>
            </li>
          </ul>
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/slider">
            <Slider />
          </Route>
        </Switch>
      </BrowserRouter>
      // <>
      //   <UserContext.Provider value={user}>
      //     <HeaderContextTask/>
      //     <SideBar/>
      //   </UserContext.Provider>
      // </>
    );
  }
}
const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Contacts = () => <div>Contacts </div>;
const Posts = () => <PostLoader />;
const SliderComp = ()=> <Slider/>