import React, { Component } from "react";
import HowManyUsers from "./HowManyUsers";
import Loading from "./Loading";
import { Typography } from "@material-ui/core";
import UsersList from "./UsersList";

export class RandomUsers extends Component {
  state = {
    HowManyUsers: "",
    isLoading: false,
    isError: false,
    users: [],
    checkedUsers: [],
    errorNumber: false
  };

  setHowManyUsers = e => {
    if (e.target.value <= 0) {
      this.setState({ errorNumber: true, HowManyUsers: e.target.value });
    } else if (e.target.value > 0) {
      this.setState({ errorNumber: false, HowManyUsers: e.target.value });
    }
  };

  toggleCheckedUsers = uuid => {
    if (this.state.checkedUsers.includes(uuid)) {
      this.setState({
        checkedUsers: this.state.checkedUsers.filter(el => el !== uuid)
      });
    } else {
      this.setState({ checkedUsers: [...this.state.checkedUsers, uuid] });
    }
  };

  onSubmit = () => {
    if (this.state.HowManyUsers > 0) {
      fetch(`https://randomuser.me/api?results=${this.state.HowManyUsers}`)
        .then(response => response.json())
        .then(data => {
          this.setState({
            isLoading: false,
            isError: false,
            users: data.results,
            errorNumber: false
          });
        })
        .catch(() =>
          this.setState({
            isLoading: false,
            isError: true,
            HowManyUsers: "",
            errorNumber: false
          })
        );
      this.setState({
        isLoading: true,
        users: [],
        HowManyUsers: "",
        errorNumber: false
      });
    } else {
      this.setState({ errorNumber: true });
    }
  };

  render() {
    return (
      <div>
        <HowManyUsers
          errorNumber={this.state.errorNumber}
          setHowManyUsers={this.setHowManyUsers}
          HowManyUsers={this.state.HowManyUsers}
          onSubmit={this.onSubmit}
        />
        <UsersList
          data={this.state.users}
          toggleCheckedUsers={this.toggleCheckedUsers}
          checkedUsers={this.state.checkedUsers}
        />
        {this.state.isError && (
          <Typography variant="h4" color="error" align="center">
            Error 404 Page not Found
          </Typography>
        )}
        {this.state.isLoading && <Loading />}
      </div>
    );
  }
}

export default RandomUsers;
