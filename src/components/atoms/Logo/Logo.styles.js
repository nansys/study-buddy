import styled from 'styled-components'

export const Wrapper = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: ${({theme}) => theme.colors.darkGrey};
  width: 100%;
  padding: 13px 15px 13px 44px;
  margin: 30px 0;
`