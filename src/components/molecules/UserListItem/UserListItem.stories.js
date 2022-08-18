import UserListItem from "./UserListItem"
import ViewWrapper from "../ViewWrapper/ViewWrapper"

export default {
  title: 'Components/Molecules/UserListItem',
  component: UserListItem
}

const Template = (args) => <ViewWrapper><UserListItem {...args} /></ViewWrapper>

export const goodGrades = Template.bind({})
goodGrades.args = {
  userData: {
    id: '5',
    name: 'Paweł Andrzejewski',
    attendance: '29%',
    average: '4.0',
    group: 'A',
}
}

export const mediumGrades = Template.bind({})
mediumGrades.args = {
  userData: {
    id: '5',
    name: 'Paweł Andrzejewski',
    attendance: '29%',
    average: '3.55',
    group: 'A',
}
}

export const badGrades = Template.bind({})
badGrades.args = {
  userData: {
    id: '5',
    name: 'Paweł Andrzejewski',
    attendance: '29%',
    average: '2.0',
    group: 'A',
}
}