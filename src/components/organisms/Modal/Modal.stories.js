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
    course: 'Business Philosophy',
    grades: [
      {
        subject: 'Business Philosophy',
        average: '3.3',
      },
      {
        subject: 'Marketing',
        average: '4,7'
      },
      {
        subject: 'Modern Economy',
        average: '2.5'
      }
    ]
  }} />
</Modal>

export const Defualt = Template.bind({})