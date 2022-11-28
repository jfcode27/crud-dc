import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
import { useState } from "react";

const AlumnoModal = ({ visible, setVisible, action }) => {
  const [name, setName] = useState('');
  const [enrollment, setEnrollment] = useState('');
  const [semester, setSemester] = useState('');
  const [school, setSchool] = useState('');  

  const handleFormSubmit = async(event) => {
    event.preventDefault();
    
    
  }
        
  return (
    <div>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={() => setVisible(false)}
      >
        <Modal.Header>
          <Text id="modal-title" b size={18}>
            {action} Alumno
          </Text>
        </Modal.Header>
        <Modal.Body>
          <form action="" onSubmit={handleFormSubmit}>
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Nombre del alumno"
            />
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Matrícula"
            />
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Semestre"
            />
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Escuela"
            />
          </form>
          <Button auto onPress={() => setVisible(false)} type={'submit'}>{action}</Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AlumnoModal;
