import styled from 'styled-components'

export const Wrapper = styled.div`

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: ${({theme}) => theme.colors.darkGrey};
  width: 100%;
  padding: 13px 15px 13px 44px;
  margin: 25px 0;
`