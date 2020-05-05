import React, {Component} from 'react';
import EventPreview from './EventPreview';
import '../css/Events.css';

let events;

class Events extends Component {
	state = {
    events: null,
	};
	
	async loadEvents() {
		let eventsJson = await fetch('https://api.youthcomputing.ca/events')
		.then(response => response.json());
		events = eventsJson["events"].map((event, i) => 
			<li><EventPreview name={event.name}
			label={event.label} key={i}/></li>
		);
	}

  componentDidMount() {
    this._asyncRequest = this.loadEvents().then(
      events => {
        this._asyncRequest = null;
        this.setState({events});
      }
    );
  }

  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }

  render() {
    if (this.state.events === null) {
      return (
				<div className="events">
					Loading...
				</div>
			);
    } else {
      return (
				<div className="events">
					<ul>
						<li>{events}</li>
					</ul>
				</div>
			);
    }
  }
}

export default Events;