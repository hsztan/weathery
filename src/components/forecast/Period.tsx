import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

function Period({ weather }: any) {
  const { detailedForecast, name, shortForecast, temperature, windSpeed, windDirection } = weather;
  return (
    <Card style={{ width: '11rem' }} className="p-0 me-2 ms-auto">
      <Card.Img variant="top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_181959416c3%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_181959416c3%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2299.8984375%22%20y%3D%2296.6%22%3EImage%20cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
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
