import { useSelector } from 'react-redux';
import { CardGroup, Row } from 'react-bootstrap'
import Day from './Day'

function Week() {
  const forecast = useSelector((state: any) => state.forecast.forecast);
  return (
    <CardGroup>
      {forecast.map((day: any, i: number) => {
        return (
          <Row className="mx-auto mb-5">
            <Day key={i} day={day} />
          </Row>
        )
      })
      }
    </CardGroup>
  )
}

export default Week
