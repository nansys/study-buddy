import FormField from "./FormField.js"

export default {
  title: 'Components/Molecules/FormField',
  component: FormField,
}

const Template = (args) => <FormField name="story" id="story" {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Login'
}

export const LongLabel = Template.bind({})
LongLabel.args = {
  label: 'Very looong label to see how it looks'
}