import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";

const DetalleModal = ({ visible, setVisible, action }) => {
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
            {action} 
          </Text>
        </Modal.Header>
        <Modal.Body>
          {
            action === "Calificaciones" ? (
            <>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Parcial 1"
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Parcial 2"
            />
            <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Parcial 3"
            />
            <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Promedio"
            disabled
            />
            </>
            ) : (
              <>
                <select name="materias-select" id="">Selecciona la materia</select>
              </>
            )
          }
        </Modal.Body>
        <Modal.Footer>
            <Button auto onClick={() => setVisible(false)}>Guardar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DetalleModal;
