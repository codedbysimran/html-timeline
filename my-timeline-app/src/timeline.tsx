import React, { useState } from "react";
import EventMarker from "./eventmarker.tsx";
import Modal from "./eventmodal.tsx";
import { festivals } from "../src/events.ts"; // tumhari festival data wali file

const Timeline: React.FC = () => {
  const [selectedFestival, setSelectedFestival] = useState<null | typeof festivals[0]>(null);

  const openModal = (festival: typeof festivals[0]) => {
    setSelectedFestival(festival);
  };

  const closeModal = () => {
    setSelectedFestival(null);
  };

  return (
    <section className="timeline">
      {festivals.map((festival) => (
        <EventMarker
          key={festival.month}
          festival={festival}
          onClick={() => openModal(festival)}
        />
      ))}

      <Modal
        isOpen={!!selectedFestival}
        onClose={closeModal}
        title={selectedFestival?.name || ""}
      >
        <p>{selectedFestival?.desc}</p>
      </Modal>
    </section>
  );
};

export default Timeline;