import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import "../styles/Events.css";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const querySnapshot = await getDocs(collection(db, "events"));
      setEvents(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchEvents();
  }, []);

  return (
    <div className="events-container">
      <h2>Upcoming Events</h2>
      {events.length > 0 ? (
        events.map(event => (
          <div key={event.id} className="event-card">
            <h5>{event.title}</h5>
            <p>{event.description.substring(0, 100)}...</p>
          </div>
        ))
      ) : (
        <p>No upcoming events found.</p>
      )}
    </div>
  );
};

export default Events;

// import React from "react";

// const Events = () => {
//   return <h1>Upcoming Events - Members Only</h1>;
// };

// export default Events;
