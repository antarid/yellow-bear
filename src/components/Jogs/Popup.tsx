import React from 'react';
import styled from 'styled-components';
import { useForm, Controller, FieldError } from 'react-hook-form';
import * as yup from 'yup';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { JogInput } from '../../interfaces';
import { Button } from '../common';

const JogInputSchema = yup.object().shape({
  distance: yup.number().positive().required(),
  time: yup.number().positive().required(),
  date: yup.number().positive().required(),
});

const Popup: React.FC<{ closePopup: () => void; addJog: (jog: JogInput) => void }> = ({
  closePopup,
  addJog,
}) => {
  const { register, handleSubmit, control, errors } = useForm<JogInput>({
    validationSchema: JogInputSchema,
  });
  return (
    <Container data-testid="popup">
      <CloseButton onClick={closePopup}>+</CloseButton>
      <Form onSubmit={handleSubmit(addJog)}>
        <InputField label="Distance" error={errors.distance} register={register} name="distance" />
        <InputField label="Time" error={errors.time} register={register} name="time" />
        <InputField
          label="Date"
          error={errors.date}
          input={
            <Controller
              as={ReactDatePicker}
              control={control}
              dateFormat="dd.MM.yyyy"
              valueName="selected"
              onChange={([selected]) => new Date(selected).getTime()}
              name="date"
              maxDate={new Date()}
              customInput={<Input data-testid="date-input" invalid={!!errors.date} />}
            />
          }
        />
        <SaveButton>Save</SaveButton>
      </Form>
    </Container>
  );
};

export default Popup;

const InputField: React.FC<{
  label: string;
  input?: React.ReactElement;
  name?: keyof JogInput;
  register?: any;
  error?: FieldError | undefined;
}> = ({ label, name, input, register, error }) => (
  <InputFieldContainer>
    <Label htmlFor={name}>{label}</Label>
    {input || (
      <Input
        data-testid={`${name}-input`}
        invalid={!!error}
        type="text"
        name={name}
        ref={register}
      ></Input>
    )}
  </InputFieldContainer>
);

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  width: 503px;
  padding: 76px 88px 47px;
  border-radius: 44px;
  background-color: ${(props) => props.theme.colors.primary};
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 307pt;
    max-width: calc(100vw - 70pt);
    padding: 37pt 35pt;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  font-size: 50px;
  top: calc(-12px + 27px);
  right: calc(-3px + 27px);
  transform: rotate(45deg);
  color: ${(props) => props.theme.colors.light};
  cursor: pointer;
  line-height: 1;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputFieldContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
  .react-datepicker-wrapper {
    min-width: 225px;
    .react-datepicker__input-container {
      display: flex;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20pt;
    .react-datepicker-wrapper {
      width: 100%;
    }
  }
`;

const Input = styled.input<{ invalid: boolean }>`
  flex: 2;
  border-radius: 7px;
  border: 1px solid ${(props) => (props.invalid ? '#f00' : props.theme.colors.light)};
  padding: 7.5px 10px;
  outline: none;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
    box-sizing: border-box;
  }
`;

const Label = styled.label`
  flex: 1;
  font-size: 16px;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin-bottom: 6pt;
  }
`;

const SaveButton = styled(Button)`
  flex: 1;
  margin-top: 46px;
  max-height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12.6px;
`;
