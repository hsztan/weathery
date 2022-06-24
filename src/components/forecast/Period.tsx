import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { FaThermometerThreeQuarters, FaWind, FaRegCompass } from 'react-icons/fa'

function Period({ weather }: any) {
  const { detailedForecast, name, temperature, windSpeed, windDirection, icon } = weather;
  return (
    <Card style={{ width: '10rem', borderRadius: '0' }} className="border border-dark p-1 mx-0 bg-dark text-white">
      <Card.Img className='rounded-5' style={{ borderRadius: '15px' }} variant="top" src={icon} />
      <Card.Body className='border-bottom border-white'>
        <Card.Title className='text-center' style={{ height: '3rem' }}>{name}</Card.Title>
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
