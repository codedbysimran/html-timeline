import React from "react";

type Festival = {
  month: string;
  name: string;
  desc: string;
};

type Props = {
  festival: Festival;
  onClick: () => void;
};

const EventMarker: React.FC<Props> = ({ festival, onClick }) => {
  return (
    <article
      className="event"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <h3>
        {festival.month} — {festival.name}
      </h3>
      <p className="muted">{festival.desc}</p>
    </article>
  );
};

export default EventMarker;