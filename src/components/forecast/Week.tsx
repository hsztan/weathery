import { useSelector } from 'react-redux';
import { CardGroup } from 'react-bootstrap'
import Day from './Day'

function Week() {
  const forecast = useSelector((state: any) => state.forecast.forecast);
  return (
    <CardGroup>
      {forecast.map((day: any, i: number) => {
        return <Day key={i} day={day} />
      })
      }
    </CardGroup>
  )
}

export default Week
