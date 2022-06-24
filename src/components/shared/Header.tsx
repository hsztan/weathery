import { Nav } from 'react-bootstrap'

function header() {
  return (
    <Nav className="bg-dark" defaultActiveKey="/" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/">Active</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default header
