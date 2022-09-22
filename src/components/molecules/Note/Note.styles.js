import styled from 'styled-components'

import DeleteButton from 'components/atoms/DeleteButton/DeleteButton.js'

export const NoteWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  h3, p {
    margin: 0;
    color: ${({theme}) => theme.colors.darkGrey};
  }

`

export const StyledDeleteButton = styled(DeleteButton)`
  position: absolute;
    top: 28px;
    left: -40px;
`