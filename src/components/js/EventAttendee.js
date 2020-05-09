import React, {Component} from 'react';
//import '../css/EventAttendee.css';

class EventAttendee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedIn: props.attendee['checkedIn'],
    };
    this.toggleChecked = this.toggleChecked.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.checkedIn !== this.props.attendee['checkedIn'])
      this.setState({
        checkedIn: prevProps.attendee['checkedIn'],
      });
  }

  async toggleChecked(n, a) {
    const request = this.state.checkedIn ? 'checkout' : 'checkin';
    fetch('https://api.youthcomputing.ca/events/' + n + '/' + request, {
      method: 'PUT',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        userId: a.id
      })
    });
    this.setState({
      checkedIn: !this.state.checkedIn,
    });
  }

  render() {
    const a = this.props.attendee;
    return (
      <tr className="event-attendee">
        <td className="attendee-name">{a['name']}</td>
        <td>{a['email']}</td>
        <td><input type='checkbox' id='checkedIn'
        checked={this.state.checkedIn}
        onClick={() => this.toggleChecked(this.props.name, a)}/></td>
      </tr>
    );
  }
}

export default EventAttendee;