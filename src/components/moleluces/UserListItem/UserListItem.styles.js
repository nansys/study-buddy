import styled from 'styled-components'

export const Wrapper = styled.li`

display: flex;
justify-content: center;
position: relative;
align-items: center;


&:not(:last-child)::after {
  content: '';
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: lightgrey;
}

`