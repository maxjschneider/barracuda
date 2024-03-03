import Container from 'react-bootstrap/Container';

import DirSelect from '../helpers/DirSelect';

const Settings = () => {
  return (
    <Container className="my-5">
      <DirSelect prompt="Libary Directory" />
    </Container>
  );
};

export default Settings;
