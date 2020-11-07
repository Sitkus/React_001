import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid black;
  margin-bottom: 2rem;
  padding: 2rem;
  background-color: #f9f9f9;
  outline: none;
`;

const Textarea = styled.textarea`
  font-family: 'Open Sans';
  resize: vertical;
  background-color: #f9f9f9;
  border: none;
  border-bottom: 1px solid black;
  height: 15rem;
  margin-bottom: 2rem;
  padding: 2rem;
  outline: none;
`;

const Button = styled.button`
  background-color: black;
  color: white;
  border: none;
  outline: none;
  padding: 2rem;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
  }
`;

export { Form, Input, Textarea, Button };
