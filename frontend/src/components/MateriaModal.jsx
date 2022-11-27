import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";

const MateriaModal = ({ visible, setVisible, action }) => {
    
        
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
            {action} Materia
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Nombre de materia"
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Folio"
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
        </Modal.Body>
        <Modal.Footer>
            <Button auto onClick={() => setVisible(false)}>{action}</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MateriaModal;
