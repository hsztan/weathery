import { Row } from 'react-bootstrap'
import Period from './Period'

function Day({ day }: any) {
  console.log(day)
  console.log('------------------------------------------------------')
  return (
    <Row className="mx-auto mb-5">
      <Period />
      <Period />
    </Row>
  )
}

export default Day
