import { Form, Button } from 'react-bootstrap'

function AddressForm({ address, handleSubmit, setAddress }: { address: string, setAddress: any, handleSubmit: (event: any) => void }) {

  return (
    <Form className='addressForm' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="fromBasicAddresss">
        <Form.Label>Enter Address</Form.Label>
        <Form.Control type="text" value={address} onChange={(e: any) => setAddress(e.target.value)} placeholder="770 Claughton Is. Dr., Miami, Fl, 33131" />
        <Form.Text className="text-muted">
          We'll never share your address with anyone else.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default AddressForm
