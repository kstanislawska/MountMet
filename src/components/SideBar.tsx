import styled from 'styled-components';

export const SideBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  background-color: #f0f8ff;
  border-left: 2px solid #2f4f4f;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  transform: ${(props) => (props.$isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  overflow-y: auto; /* Enable vertical scrolling */
`;
