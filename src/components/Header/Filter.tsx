import React, { useContext, useCallback } from 'react';
import styled from 'styled-components';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import FilterContext from '../../contexts/Filter';

const Filter: React.FC = () => {
  const { dateFrom, dateTo, setDateFrom, setDateTo } = useContext(FilterContext);
  const handleDateFromChange = useCallback((date) => setDateFrom(date), [setDateFrom]);
  const handleDateToChange = useCallback((date) => setDateTo(date), [setDateTo]);
  return (
    <Container>
      <Label>Date from</Label>
      <ReactDatePicker
        dateFormat="dd.MM.yyyy"
        onChange={handleDateFromChange}
        selected={dateFrom}
        maxDate={dateTo || new Date()}
        customInput={<Input />}
      ></ReactDatePicker>
      <Label>Date to</Label>
      <ReactDatePicker
        dateFormat="dd.MM.yyyy"
        onChange={handleDateToChange}
        selected={dateTo}
        minDate={dateFrom}
        maxDate={new Date()}
        customInput={<Input />}
      ></ReactDatePicker>
    </Container>
  );
};

export default Filter;

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.grey};
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  width: 100px;
  height: 31px;
  border-radius: 11px;
  border: solid 1px #979797;
  background-color: ${(props) => props.theme.colors.light};
  margin-left: 15px;
  text-align: center;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 72px;
  }
`;

const Label = styled.div`
  font-size: 13px;
  margin-left: 45px;
  color: #747474;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin-left: 35px;
  }
`;
