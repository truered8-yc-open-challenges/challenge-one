import React from 'react';
import '../css/EventPreview.css';

function EventPreview(props) {
  return (
    <div className="event-preview">
      <a href={'/event?name='+props.name}>{props.label}</a>
    </div>
  );
}

export default EventPreview;