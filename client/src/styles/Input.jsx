import styled from 'styled-components';

const Input = styled.input`
  font-family: 'Yantramanav', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: black;
  background-color: white;
  width: 80%;
  height: 30px;
  border: 1px solid gold;
  border-radius: 5px;
  padding: 2px 10px;
  text-align: center;
  position: relative;
  display: block;
  margin: 0 auto;

  &::-webkit-input-placeholder {
    /* Chrome */
    color: colors.gold;
  }
  &:-ms-input-placeholder {
    /* IE 10+ */
    color: colors.gold;
  }
  &::-moz-placeholder {
    /* Firefox 19+ */
    color: colors.gold;
  }
  &:-moz-placeholder {
    /* Firefox 4 - 18 */
    color: colors.gold;
  }
`;

export default Input;
