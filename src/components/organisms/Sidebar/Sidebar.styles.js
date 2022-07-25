import styled from 'styled-components'

export const SidebarWrapper = styled.div`

  width: 10%;
  height: 100vh;
  background-color: ${({theme}) => theme.colors.lightPurple} ;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

`