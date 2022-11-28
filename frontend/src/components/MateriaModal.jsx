import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../config/axios";

const MateriaModal = ({ visible, setVisible, action, selectedSubjectId, subjectToUpdate }) => {
  const [teachers, setTeachers] = useState(null);

  // Form data
  const [name, setName] = useState('');
  const [teacherId, setTeacherId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const getTeachers = async() => {
      const { data } = await axiosClient.get('/teachers');
      setTeachers(data);
    }

    if (subjectToUpdate) {
      setName(subjectToUpdate.name);
      setTeacherId(subjectToUpdate.teacher.id);
    }

    getTeachers();
  }, [subjectToUpdate]);

  const handleFormSubmit = async(event) => {
    event.preventDefault();

    if (action === 'Agregar') {
      await axiosClient.post('/subjects/create', {
        name,
        teacherId
      });
    } else {
      await axiosClient.put(`/subjects/${selectedSubjectId}`, {
        name,
        teacherId
      });
    }

    setVisible(false);
    navigate(0);
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
            {action} Materia
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
              placeholder="Nombre de la materia"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <select name="teacherId" id="" onChange={(event) => setTeacherId(parseInt(event.target.value))} defaultValue={teacherId}>
              {
                teachers && teachers.map(teacher => (
                  <option key={teacher.id} value={teacher.id}>{teacher.name}</option>
                ))
              }
            </select>

            <Button auto type='submit'>{action}</Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MateriaModal;
