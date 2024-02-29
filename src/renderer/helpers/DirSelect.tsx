import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const DirSelect = () => {
  return (
    <Form.Group controlId="formFile" className="mb-3">
      <Form.Label>Default file input example</Form.Label>
      <Form.Control type="file" />
    </Form.Group>
  );
};

export default DirSelect;
