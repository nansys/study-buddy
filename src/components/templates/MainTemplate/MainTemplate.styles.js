import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${({theme}) => theme.colors.lightGrey};
  display: grid;
  grid-template-columns: 150px 1fr 0.75fr;
  grid-template-rows: 90px 1fr;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-y: hidden;
`