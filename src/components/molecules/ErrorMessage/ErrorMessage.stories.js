import ErrorMessage from './ErrorMessage.js'

export default {
  title: 'Component/Molecules/ErrorMessage',
  component: ErrorMessage
}

const Template = (args) => <ErrorMessage {...args} />

export const Default = Template.bind({})

Default.args = {}