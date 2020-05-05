import React from 'react';
//import '../css/EventAttendee.css';

async function toggleChecked(n, a) {
  const box = document.getElementById('checkedIn');
  const request = box.checked ? 'checkin' : 'checkout';
  fetch('https://api.youthcomputing.ca/events/' + n + '/' + request, {
    method: 'PUT',
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      userId: a.id
    })
  });
}

function EventAttendee(props) {
	const a = props.attendee;
  return (
    <tr className="event-attendee">
			<td className="attendee-name">{a['name']}</td>
			<td>{a['email']}</td>
      <td><input type='checkbox' id='checkedIn'
      defaultChecked={a['checkedIn']}
      onClick={() => toggleChecked(props.name, a)}/></td>
    </tr>
  );
}

export default EventAttendee;