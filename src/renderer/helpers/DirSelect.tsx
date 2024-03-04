import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
  prompt: string;
}

const DirSelect = ({ prompt }: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    window.electron.ipcRenderer.sendMessage('ipc-event', [e]);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label> {prompt} </Form.Label>
        <Form.Control type="file" />
      </Form.Group>
    </Form>
  );
};

export default DirSelect;
