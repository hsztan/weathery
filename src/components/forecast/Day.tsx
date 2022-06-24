import Period from './Period'

function Day({ day }: any) {
  const [morning, evening] = day;
  return (
    <>
      <Period weather={morning} />
      <Period weather={evening} />
    </>
  )
}

export default Day
