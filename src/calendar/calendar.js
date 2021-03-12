import React from 'react';
import { DAYS } from '../core/constants/days';
import { TIMES } from '../core/constants/times';
import './calendar.css';

const days = DAYS;
const times = TIMES;

export function Calendar() {
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
                </select>
              </div>
              <button id="add-event" className="button is-primary">
                New event +
              </button>
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
          <div></div>
          <a id="sign-out">sign out</a>
        </div>
      </div>
    </div>
  );
}
