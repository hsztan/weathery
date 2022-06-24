import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

function Period({ weather }: any) {
  const { detailedForecast, name, temperature, windSpeed, windDirection, icon } = weather;
  return (
    <Card style={{ width: '11rem' }} className="p-0 me-2 ms-auto">
      <Card.Img variant="top" src={icon} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {detailedForecast}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Temp: {temperature} &#8457;</ListGroupItem>
        <ListGroupItem>Wind Dir: {windDirection}</ListGroupItem>
        <ListGroupItem>Wind Speed: {windSpeed}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default Period
