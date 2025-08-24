import React from "react";

type Props = {
  months: string[];
  value: string;
  onChange: (m: string) => void;
};

const FilterPanel: React.FC<Props> = ({ months, value, onChange }) => {
  return (
    <nav className="filters">
      <label>
        Filter by month:&nbsp;
        <select value={value} onChange={(e) => onChange(e.target.value)}>
          <option value="All">All</option>
          {months.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </label>
    </nav>
  );
};

export default FilterPanel;