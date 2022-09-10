import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Input } from 'components/atoms/Input/Input.js'
import { Label } from 'components/atoms/Label/Label.js'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${Label} {
    margin: 10px 0;
  }

`

const FormField = React.forwardRef(({onChange, name, id, type = 'text', label, ...props}, ref) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input name={name} id={id} type={type} onChange={onChange} data-testid={label} {...props} ref={ref}/>
    </Wrapper>
  )
})

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
}

export default FormField