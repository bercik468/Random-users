//RandomUsers odpowiada za pobieranie z API danych o uzytkownikach i podczas pobierania aktywuje koko loadingu
import React, { Component } from "react";
import HowManyUsers from "./HowManyUsers";
import Loading from "./Loading";
import { Typography } from "@material-ui/core";
import UsersList from "./UsersList";

//w komponencie klasowym nie da sie uzywac hookow dlatego nie pobierzemy domyslnych styli z theme itp, tu utworzymy nowy komponent funkcyjny "HowManyUSers"

export class RandomUsers extends Component {
  state = {
    HowManyUsers: "",
    isLoading: false,
    isError: false,
    users: [],
    checkedUsers: []
  };

  setHowManyUsers = e => this.setState({ HowManyUsers: e.target.value });

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
    fetch(`https://randomuser.me/api?results=${this.state.HowManyUsers}`)
      .then(response => response.json())
      .then(data => {
        //trzeba pamietać że jak pobierze dobrze dane to isError dajemy na false
        this.setState({
          isLoading: false,
          isError: false,
          users: data.results
        });
      })
      .catch(() =>
        this.setState({ isLoading: false, isError: true, HowManyUsers: "" })
      );
    this.setState({ isLoading: true, users: [], HowManyUsers: "" });
  };

  render() {
    return (
      <div>
        <HowManyUsers
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
