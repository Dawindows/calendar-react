import React from 'react';
import { Link } from 'react-router-dom';
import { DAYS } from '../core/constants/days';
import { TIMES } from '../core/constants/times';
import { membersService } from '../core/service/members.service';
import './add-event.css';

const days = DAYS;
const times = TIMES;

const AddEvent = () => {
  const members = membersService.getAllMembers();

  const daysElements = days.map((day) => (
    <option value={day.toLowerCase()} key={day}>
      {day}
    </option>
  ));

  const timeElements = times.map((time) => (
    <option value={time} key={time}>
      {time}:00
    </option>
  ));

  const membersElements = members.map((member) => (
    <option className="member" value={member.name} key={member.name}>
      {member.name}
    </option>
  ));

  return (
    <div className="card add-event">
      <div className="card-header">
        <p className="card-header-title">Create new event</p>
      </div>
      <div id="event-content" className="card-content">
        <div className="field">
          <div className="control">
            <input
              id="event-name"
              className="input"
              type="text"
              placeholder="Event name"
            ></input>
          </div>
        </div>
        <div className="field">
          <div className="control is-expanded">
            <div className="select is-fullwidth is-multiple">
              <select id="members" multiple size="4">
                <option defaultValue="All members">All members</option>
                {membersElements}
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <div className="control is-expanded">
            <div className="select is-fullwidth">
              <select id="weekday">{daysElements}</select>
            </div>
          </div>
        </div>
        <div className="field">
          <div className="control is-expanded">
            <div className="select is-fullwidth">
              <select id="time">{timeElements}</select>
            </div>
          </div>
        </div>
      </div>
      <div className="field is-grouped card-footer  is-justify-content-flex-end">
        <p className="control" id="create-event">
          <Link to="/calendar" className="button is-primary">
            Submit
          </Link>
        </p>
        <p className="control" id="cancel">
          <Link to="/calendar" className="button is-light">
            Cancel
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AddEvent;
