import { CardGroup, Row } from 'react-bootstrap'
import Period from './Period'

function Day() {
  return (
    <Row className="mx-auto mb-5">
      <Period />
      <Period />
    </Row>
  )
}

export default Day
