import React from "react";
// import { membersService } from "../core/service/members.service";
import { DAYS } from "../core/constants/days";
import { TIMES } from "../core/constants/times";
import "./calendar.css";

const days = DAYS;
const times = TIMES;

export function Calendar() {
  const table = times.map((time) => {
    const items = days.map((day) => (
      <td
        key={day.toLowerCase() + "-" + time}
        className="container"
        id={day.toLowerCase() + "-" + time}
      ></td>
    ));
  
    return (
      <tr key={time}>
        <td key={time}>{time}:00</td>
        {items}
      </tr>
    );
  });

  // async function getMembersFromService() {
  //   const getMembers = await membersService.getAllMembers()
  //     .then((data) => data);

  //   const members = getMembers.map((member) => (
  //     <option className="member" value={member.name}>
  //       {member.name}
  //     </option>
  //   ));
  //   return members;
  // }

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
          <div id="sign-out">sign out</div>
        </div>
      </div>
    </div>
  );
}
