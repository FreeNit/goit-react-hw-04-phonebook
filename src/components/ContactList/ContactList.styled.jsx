import styled from 'styled-components';

export const ListOfContacts = styled.ul`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
  padding: 0;
  padding-left: 15px;
`;

export const ListItem = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  ::before {
    content: '';
    position: absolute;
    left: -15px;
    width: 7px;
    height: 7px;
    font-size: 7px;
    background-color: #000;
    border-radius: 50px;
  }
`;

export const ListItemButton = styled.button`
  /* margin-left: 15px; */
  font-size: 16px;

  background: #ff4742;
  border: 1px solid #ff4742;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  min-height: 30px;
  outline: 0;
  padding: 3px 7px;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  transition: all 250ms ease-in-out;

  :hover,
  :active {
    background-color: initial;
    background-position: 0 0;
    color: #ff4742;
  }

  :active {
    opacity: 0.5;
  }
`;
