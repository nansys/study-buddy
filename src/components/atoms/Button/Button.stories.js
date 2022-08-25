import { DeleteButton } from './Button.js'

export default {
  title: 'Components/Atoms/Button',
  component: DeleteButton,

}

const Template = (args) => <DeleteButton {...args}>Read more</DeleteButton>

export const Default = Template.bind({})
Default.args = {
  isBig: false
}

export const Big = Template.bind({})
Big.args = {
  isBig: true
}