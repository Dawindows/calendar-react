import React from 'react';
import { Link } from 'react-router-dom';
import { membersService } from '../core/service/members.service';
import './authorization.css';

const Authorization = () => {
  const members = membersService.getAllMembers();
  const membersElements = members.map((member) => (
    <option className="member" value={member.name} key={member.name}>
      {member.name}
    </option>
  ));

  return (
    <div className="authorization modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Please authorize</p>
        </header>
        <section className="modal-card-body">
          <div id="event" className="select is-fullwidth">
            <select id="user">{membersElements}</select>
          </div>
        </section>
        <footer className="modal-card-foot is-pulled-right">
          <Link
            id="authorization-button-ok"
            className="button is-success"
            to="/calendar"
          >
            Confirm
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Authorization;
