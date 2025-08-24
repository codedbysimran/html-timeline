import React, { useState } from "react";
import Modal from "./eventmodal.tsx";

interface TimelineEvent {
  id: number;
  title: string;
  description: string;
}

const events: TimelineEvent[] = [
  { id: 1, title: "Inauguration", description: "Opening ceremony of the festival." },
  { id: 2, title: "Dance Show", description: "Cultural dance performances." },
  { id: 3, title: "Coding Competition", description: "Technical coding contest." },
];

const Timeline: React.FC = () => {
  const [activeEvent, setActiveEvent] = useState<TimelineEvent | null>(null);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Festival Timeline</h1>
      <ul className="flex gap-6">
        {events.map((event, index) => (
          <li key={event.id}>
            <button
              role="button"
              tabIndex={0}
              aria-current={activeEvent?.id === event.id ? "true" : undefined}
              aria-label={`Event: ${event.title}`}
              onClick={() => setActiveEvent(event)}
              className={`px-4 py-2 rounded-lg border 
                ${activeEvent?.id === event.id ? "bg-blue-600 text-white" : "bg-gray-100"}`}
            >
              {event.title}
            </button>
          </li>
        ))}
      </ul>

      {activeEvent && (
        <Modal
          isOpen={!!activeEvent}
          onClose={() => setActiveEvent(null)}
          title={activeEvent.title}
          description={activeEvent.description}
        />
      )}
    </div>
  );
};

export default Timeline;