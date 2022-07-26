import styled from 'styled-components'

export const SidebarWrapper = styled.div`

  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.colors.lightPurple};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 30px 0;
`