import { Nav } from 'react-bootstrap'
import { WiDayCloudyGusts } from 'react-icons/wi'

function header() {
  return (
    <Nav className="bg-secondary" defaultActiveKey="/" as="ul">
      <Nav.Item as="li">
        <Nav.Link className='text-dark' href="/"><WiDayCloudyGusts size={50} /></Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default header
