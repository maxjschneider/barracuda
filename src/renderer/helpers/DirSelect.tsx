import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
  prompt: string;
}

const DirSelect = ({ prompt }: Props) => {
  return (
    <Form.Group controlId="formFile" className="mb-3">
      <Form.Label> {prompt} </Form.Label>
      <Form.Control type="file" />
    </Form.Group>
  );
};

export default DirSelect;
