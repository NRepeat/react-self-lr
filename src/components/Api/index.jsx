import React, { Component } from "react";
import { getUsers } from "./indexx";
export default class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLodaing: false,
      isError: false,
      currentPage: 1,
    };
  }
  componentDidMount() {
    this.load();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      this.load();
    }
  }

  load = () => {
    const { currentPage } = this.state;
    this.setState({ isLoading: true });

    getUsers({ page: currentPage, nat: "ua" })
      .then((data) => {
        this.setState({ users: data.results });
      })
      .catch((error) => {
        this.setState({
          isError: true,
        });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };
  next = () => {
    const { currentPage } = this.state;
    this.setState({
      currentPage: currentPage + 1,
    });
  };
  prev = () => {
    const { currentPage } = this.state;
    this.setState({
      currentPage: currentPage > 1 ? currentPage - 1 : 1,
    });
  };
  render() {
    const { users, isLoading, isError } = this.state;

    const userCards = users.map((user) => (
      <article key={user.login.uuid}>{JSON.stringify(user)}</article>
    ));

    const isThereUsers = users.length !== 0 && !isLoading;

    return (
      <div>
        <div>
          <button onClick={this.prev}>Previous page</button>
          <button onClick={this.next}>Next page</button>
        </div>
        {isError && <h1>Error happened</h1>}
        {isLoading && <h1>Loading users...</h1>}
        {isThereUsers ? userCards : <h1>Users not found</h1>}
      </div>
    );
  }
}
