import { Form, Button } from 'react-bootstrap'

function AddressForm({ address, handleSubmit, setAddress }: { address: string, setAddress: any, handleSubmit: (event: any) => void }) {

  return (
    <Form className='addressForm mx-auto p-5' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label className='text-white'>Enter Address</Form.Label>
        <Form.Control type="text" value={address} onChange={(e: any) => setAddress(e.target.value)} placeholder="Please enter your address" />
        <Form.Text className="text-white">
          We'll never share your address with anyone else.
        </Form.Text>
      </Form.Group>
      <Button className='text-c' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default AddressForm
