import React from 'react';
import '../css/EventInfo.css';

function toDate(secs) {
  var t = new Date(1970, 0, 1); // Epoch
  t.setSeconds(secs);
  return t.toDateString();
}

function EventInfo(props) {
  const i = props.info;
  return (
    <div className="event-info">
      <div className='text'>
        <h3>{i['name']} {i['year']}</h3>
        <b>Location: </b>{i['location']}<br/>
        <b>Start Date: </b>{toDate(i['start-date']['_seconds'])}<br/>
        <b>End Date: </b>{toDate(i['end-date']['_seconds'])}<br/>
        <b>Attendees: </b>{props.attendees.length}
      </div>
      <img src={i['event-logo']} alt='logo'/>
    </div>
  );
}

export default EventInfo;