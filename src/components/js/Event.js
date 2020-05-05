import React, {Component} from 'react';
import EventInfo from './EventInfo';
import EventAttendees from './EventAttendees';
//import '../css/Event.css';

let event;

const getName = () => {
    return new URLSearchParams(window.location.search).get('name');
}

class Event extends Component {
	state = {
        event: null
	};
	
	async loadEvent() {
        let eventJson = await 
        fetch('https://api.youthcomputing.ca/events/'+ getName())
            .then(response => response.json());
        event = {
            info: <EventInfo info={eventJson['info']}/>,
            attendees: <EventAttendees name={getName()}
            attendees={eventJson['attendees']}/>
        }
	}

  componentDidMount() {
    this._asyncRequest = this.loadEvent().then(
      event => {
        this._asyncRequest = null;
        this.setState({event});
      }
    );
  }

  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }

  render() {
    if (this.state.event === null) {
      return (
				<div className="event">
				  Loading...
				</div>
			);
    } else {
      return (
				<div className="event">
					{event.info}
          Click page 2, then 1.
          {event.attendees}
				</div>
			);
    }
  }
}

export default Event;