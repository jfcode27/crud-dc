import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../config/axios";

const AlumnoModal = ({ visible, setVisible, action, studentToUpdate, setStudentToUpdate }) => {
  const navigate = useNavigate();

  const modalInitialState = {
    name: "",
    enrollment: "",
    semester: "",
    school: "",
  }

  const [formData, setFormData] = useState(modalInitialState);

  useEffect(() => {
    if (studentToUpdate) {
      action === 'Agregar' ? setFormData(modalInitialState) : setFormData(studentToUpdate);
    }
  }, [studentToUpdate]);
  
  const handleInputChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
  }

  const handleFormSubmit = async(event) => {
    event.preventDefault();
    
    if (action === 'Agregar') {
      await axiosClient.post('/students/create', formData);
    } else {
      await axiosClient.put(`/students/${studentToUpdate.id}`, formData);
    }

    navigate(0);
  }

  const handleModalClose = () => {
    setVisible(false);
    setFormData(modalInitialState);
    setStudentToUpdate(null);
  }

  if (action === 'Editar') {
    if (!studentToUpdate) {
      return null;
    }
  }
        
  return (
    <div>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={() => handleModalClose()}
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
              value={formData.name}
              name="name"
              onChange={handleInputChange}
            />
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Matrícula"
              value={formData.enrollment}
              type="number"
              name="enrollment"
              onChange={handleInputChange}
            />
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Semestre"
              value={formData.semester}
              type="number"
              name="semester"
              onChange={handleInputChange}
            />
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Escuela"
              value={formData.school}
              name="school"
              onChange={handleInputChange}
            />

            <Button auto onPress={() => setVisible(false)} type={'submit'}>{action}</Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AlumnoModal;
