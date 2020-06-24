import React, { createContext, useState } from 'react';

const FilterContext = createContext<{
  dateFrom: Date | null;
  dateTo: Date | null;
  setDateTo: (dateTo: Date) => void;
  setDateFrom: (dateFrom: Date) => void;
}>({
  dateFrom: null,
  dateTo: null,
  setDateTo: (dateTo) => {},
  setDateFrom: (dateFrom) => {},
});

export default FilterContext;

export const FilterContextWrapper: React.FC = ({ children }) => {
  const [dateFrom, setDateFrom] = useState<Date | null>(null);
  const [dateTo, setDateTo] = useState<Date | null>(null);

  return (
    <FilterContext.Provider value={{ dateFrom, dateTo, setDateFrom, setDateTo }}>
      {children}
    </FilterContext.Provider>
  );
};
