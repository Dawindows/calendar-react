import { useEffect, useState } from 'react';

const url = '';

export const getEvents = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = () => {
    fetch('http://158.101.166.74:8080/api/data/david_sokur/events')
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return events;
};

export const getMembers = () => {
  const [members, setMembers] = useState([]);

  const fetchMembers = () => {
    fetch('http://158.101.166.74:8080/api/data/david_sokur/members')
      .then((response) => response.json())
      .then((data) => {
        setMembers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  return members;
};

export async function deleteItem(entityName, DataId) {
  try {
    const response = await fetch(`${url}/${entityName}/${DataId}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return response;
  } catch (err) {
    console.log(err);
  }
  return null;
}

export async function create(entityName, newDataContent) {
  try {
    const setScores = await fetch(`${url}/${entityName}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: JSON.stringify(newDataContent) }),
    }).then((result) => result.json());
    return setScores;
  } catch (err) {
    console.log(err);
  }
  return null;
}

export async function update(entityName, changeDataContent, DataId) {
  try {
    const updateData = await fetch(`${url}/${entityName}/${DataId}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: changeDataContent }),
    }).then((result) => result.json());
    return updateData;
  } catch (err) {
    console.log(err);
  }
  return null;
}
