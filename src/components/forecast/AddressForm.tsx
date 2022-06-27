import { Form, Button } from 'react-bootstrap'

function AddressForm({ address, handleSubmit, setAddress, message }: { address: string, setAddress: any, handleSubmit: (event: any) => void, message: any }) {

  return (
    <Form className='addressForm mx-auto p-5' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicAddress">
        <p id='message' className='text-warning text-center'>{message} </p>
        <Form.Label className='text-white'>Enter Address</Form.Label>
        <Form.Control type="text" value={address} onChange={(e: any) => setAddress(e.target.value)} placeholder="Please enter your address" />
        <Form.Text className="text-white">
          We'll never share your address with anyone else.
        </Form.Text>
      </Form.Group>
      <div className="d-flex justify-content-end">
        <Button className='text-c' variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  )
}

export default AddressForm
