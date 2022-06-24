import { Nav } from 'react-bootstrap'
import { WiDayCloudyGusts } from 'react-icons/wi'

function header() {
  return (
    <Nav className="bg-secondary justify-content-center align-items-center" defaultActiveKey="/" as="ul">
      <Nav.Item as="li">
        <Nav.Link className='text-white' href="/"><WiDayCloudyGusts size={50} /></Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link className='text-white fs-3 fw-bold text-center' href="/">Forecaster</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default header
