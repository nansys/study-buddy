import Modal from "./Modal.js"
import StudentDetails from "components/molecules/StudentDetails/StudentDetails.js"

export default {
  title: 'Components/Organisms/Modal',
  component: Modal
}

const Template = (args) => <Modal {...args}>
  <StudentDetails student={{
    id: '6',
    name: 'Paweł Roman',
    attendance: '55%',
    average: '2.4',
    group: 'A',
  }} />
</Modal>

export const Defualt = Template.bind({})