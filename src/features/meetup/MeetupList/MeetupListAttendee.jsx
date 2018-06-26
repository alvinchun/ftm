import React, { Component } from "react";
import { List, Image } from "semantic-ui-react";

export class MeetupListAttendee extends Component {
  render() {
    return (
      <List.Item>
        <Image
          as="a"
          size="mini"
          circular
          src="https://randomuser.me/api/portraits/women/42.jpg"
        />
      </List.Item>
    );
  }
}

export default MeetupListAttendee;
