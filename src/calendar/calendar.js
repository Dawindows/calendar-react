import React from 'react';
import { Link } from 'react-router-dom';
import { membersService } from '../core/service/members.service';
import { DAYS } from '../core/constants/days';
import { TIMES } from '../core/constants/times';
// import { getEvents } from '../core/service/server.service';
import './calendar.css';

const Calendar = () => {
  const days = DAYS;
  const times = TIMES;
  const members = membersService.getAllMembers();

  const table = times.map((time) => {
    const items = days.map((day) => (
      <td
        key={`${day.toLowerCase()}-${time}`}
        className="container"
        id={`${day.toLowerCase()}-${time}`}
      ></td>
    ));

    return (
      <tr key={time}>
        <td>{time}:00</td>
        {items}
      </tr>
    );
  });

  const itemMember = members.map((member) => (
    <option className="member" value={member.name} key={member.name}>
      {member.name}
    </option>
  ));

  // function renderEvents() {
  //   getEvents().forEach((elementData) => {
  //     const id = `${JSON.parse(elementData.data).weekday}-${
  //       JSON.parse(elementData.data).time
  //     }`;
  //     const container = document.querySelector(`#${id.toLowerCase()}`);

  //     container.innerHTML += `
  //         <div 
  //           class="message is-info ${JSON.parse(elementData.data).members.join(' ')}" 
  //           data-item="${JSON.parse(elementData.data).id}">
  //           <span class="message-header">
  //             ${JSON.parse(elementData.data).eventName}
  //             <button class="delete-event delete is-small" 
  //               event-id="${JSON.parse(elementData.data).id}">
  //             </button>
  //           </span>
  //         </div>
  //     `;
  //   });
  // }
  // renderEvents();

  return (
    <div className="calendar card">
      <div id="calendar" className="card-content">
        <div className="calendar-header">
          <div className="card-header-title is-justify-content-space-between">
            <span>Calendar</span>
            <div>
              <div id="event" className="select">
                <select id="user">
                  <option defaultValue="All events">All events</option>
                  {itemMember}
                </select>
              </div>
              <Link
                to="/add-event"
                id="add-event"
                className="button is-primary"
              >
                New event +
              </Link>
            </div>
          </div>
        </div>
        <table className="table is-bordered is-narrow">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
            </tr>
            {table}
          </tbody>
        </table>
        <div className="calendar-footer">
          <Link to="/" id="sign-out">
            sign out{' '}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
