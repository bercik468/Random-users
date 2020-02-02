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
    errorNumber: false,
    errorText: ""
  };

  setHowManyUsers = e => {
    let textValue = parseInt(e.target.value);

    this.setState({
      HowManyUsers: textValue,
      errorNumber: false,
      errorText: ""
    });
    if (isNaN(textValue)) {
      this.setState({
        HowManyUsers: "",
        errorNumber: false,
        errorText: ""
      });
    }
    if (textValue <= 0) {
      this.setState({
        HowManyUsers: "",
        errorNumber: true,
        errorText: "podaj liczbę urzytkowników"
      });
    }
    if (textValue > 150) {
      this.setState({
        HowManyUsers: textValue,
        errorNumber: true,
        errorText: "maksymalna liczba to 150"
      });
    }
    if (typeof textValue === "string") {
      this.setState({
        HowManyUsers: textValue,
        errorNumber: true,
        errorText: "wpisz liczbę !"
      });
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
    if (
      this.state.HowManyUsers > 0 &&
      this.state.HowManyUsers <= 150 &&
      typeof this.state.HowManyUsers === "number"
    ) {
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
    } else if (this.state.HowManyUsers <= 0) {
      this.setState({
        errorNumber: true,
        errorText: "wpisz ilość użytkowników"
      });
    } else if (this.state.HowManyUsers < 150) {
      this.setState({ errorNumber: true });
    }
  };

  render() {
    return (
      <div>
        <HowManyUsers
          errorText={this.state.errorText}
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
