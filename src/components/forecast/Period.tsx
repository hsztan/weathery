import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { FaThermometerThreeQuarters, FaWind, FaRegCompass } from 'react-icons/fa'

function Period({ weather }: any) {
  const { detailedForecast, name, temperature, windSpeed, windDirection, icon } = weather;
  return (
    <Card style={{ width: '11rem' }} className="p-0 me-2 ms-auto bg-dark text-white">
      <Card.Img variant="top" src={icon} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {detailedForecast}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem className='bg-dark text-white'>
          <FaThermometerThreeQuarters />&nbsp;Temp: {temperature} &#8457;</ListGroupItem>
        <ListGroupItem className='bg-dark text-white'>
          <FaRegCompass />&nbsp; Wind Dir: {windDirection}</ListGroupItem>
        <ListGroupItem className='bg-dark text-white'>
          <FaWind />&nbsp; Wind Speed: {windSpeed}</ListGroupItem>
      </ListGroup>
    </Card>
  )
}

export default Period
