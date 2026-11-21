"use client";
import React from "react";

const allTimings = [
  { day: "Sunday",    startTime: "Closed",   endTime: "" },
  { day: "Monday",    startTime: "8:00 AM",  endTime: "6:00 PM" },
  { day: "Tuesday",   startTime: "8:00 AM",  endTime: "6:00 PM" },
  { day: "Wednesday", startTime: "8:00 AM",  endTime: "6:00 PM" },
  { day: "Thursday",  startTime: "8:00 AM",  endTime: "6:00 PM" },
  { day: "Friday",    startTime: "8:00 AM",  endTime: "6:00 PM" },
  { day: "Saturday",  startTime: "9:00 AM",  endTime: "4:00 PM" },
];

export default function HoursList() {
  const todayIndex = new Date().getDay(); // 0=Sun, 6=Sat
  const sorted = [
    ...allTimings.slice(todayIndex),
    ...allTimings.slice(0, todayIndex),
  ];

  return (
    <div className="hours-list">
      {sorted.map((timing, i) => {
        const isToday = i === 0;
        const isClosed = !timing.endTime;
        return (
          <div
            key={timing.day}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "4px 0",
              fontWeight: isToday ? "bold" : "normal",
              color: isToday ? "#e80f17" : "#ffffff",
              borderBottom: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <span>{isToday ? `${timing.day} (Today)` : timing.day}</span>
            <span style={{ color: isClosed ? "#aaa" : isToday ? "#e80f17" : "#ffffff" }}>
              {isClosed ? "Closed" : `${timing.startTime} – ${timing.endTime}`}
            </span>
          </div>
        );
      })}
    </div>
  );
}
