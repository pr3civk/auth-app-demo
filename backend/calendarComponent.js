import React, { useEffect, useState } from 'react';

const CalendarComponent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Inicjalizacja API
    const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
    const key = require('Ścieżka_do_pliku_z_kluczem.json'); // Podmień na ścieżkę do pobranego klucza JSON
    const jwtClient = new google.auth.JWT(
      key.client_email,
      null,
      key.private_key,
      SCOPES
    );

    // Pobierz wydarzenia z kalendarza
    const calendar = google.calendar({ version: 'v3', auth: jwtClient });
    calendar.events.list(
      {
        calendarId: 'primary',
        timeMin: new Date().toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime',
      },
      (err, res) => {
        if (err) return console.error('Błąd pobierania wydarzeń:', err);
        setEvents(res.data.items);
      }
    );
  }, []);

  return (
    <div>
      <h2>Wydarzenia z kalendarza</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.summary} - {event.start.dateTime}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarComponent;
