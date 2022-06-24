import { useSelector } from 'react-redux';
import { CardGroup, Row } from 'react-bootstrap'
import Day from './Day'

function Week() {
  const forecast = useSelector((state: any) => state.forecast.forecast);
  return (
    <CardGroup className='mt-4'>
      {forecast.map((day: any, i: number) => {
        return (
          <Row key={i} className="mx-auto justify-content-center mb-5">
            <Day day={day} />
          </Row>
        )
      })
      }
    </CardGroup>
  )
}

export default Week
