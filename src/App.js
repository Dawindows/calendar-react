import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Calendar from './calendar/calendar';
import AddEvent from './add-event/add-event';
import Authorization from './authorization/authorization';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Authorization} />
        <Route path="/add-event" component={AddEvent} />
        <Route path="/calendar" component={Calendar} />
      </div>
    </Router>
  );
}

export default App;
