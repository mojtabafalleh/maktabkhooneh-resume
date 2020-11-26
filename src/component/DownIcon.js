import React, { Component } from "react";

export default class DownIcon extends Component {
  render() {

    return (
  

        <div
        onClick={this.props.onClick}
          sticky="bottom"
          class="glyphicon glyphicon-menu-down"
          style={{
            display: "flex",
            flexDirection: "row",
            alignSelf: "center",
            justifyContent: "center",
            fontSize: "40px",
            marginBottom:"-34px",
            transform:"translateY(-45px)"
          }}
        />

    );
  }
}
