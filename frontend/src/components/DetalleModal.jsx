import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../config/axios";

const DetalleModal = ({ visible, setVisible, action, student, gradeToUpdate }) => {
  const [subjects, setSubjects] = useState(null);
  const [subjectId, setSubjectId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const getSubjects = async() => {
      const { data } = await axiosClient.get('/subjects');
      setSubjects(data);
    }

    getSubjects();
  }, []);

  const handleSubjectAssigned = async (event) => {
    event.preventDefault();
    
    await axiosClient.post(`/students/${student.id}/assign`, { subjectId });

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
            {action} 
          </Text>
        </Modal.Header>
        <Modal.Body>
          {
            action === "Calificaciones" ? (
            <>
            <form action="" >
              <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Parcial 1"
                name="firstPartial"
                value={gradeToUpdate.firstPartial}
              />
              <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Parcial 2"
                name="secondPartial"
                value={gradeToUpdate.secondPartial}
              />
              <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Parcial 3"
                name="thirdPartial"
                value={gradeToUpdate.thirdPartial}
              />
              <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Promedio"
                name="finalGrade"
                value={(gradeToUpdate.firstPartial + gradeToUpdate.secondPartial + gradeToUpdate.thirdPartial) / 3}
                disabled
              />

              <Button auto onPress={() => setVisible(false)} type={'submit'}>Guardar</Button>
            </form>
            </>
            ) : (
              <>
                <form action="" onSubmit={handleSubjectAssigned}>
                  <select name="subjectId" onChange={(event) => setSubjectId(event.target.value)}>
                    {
                      subjects && subjects.map(subject => (
                        <option key={subject.id} value={subject.id}>{subject.name}</option>
                      ))
                    }
                  </select>

                  <Button auto onPress={() => setVisible(false)} type={'submit'}>Guardar</Button>
                </form>
              </>
            )
          }
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DetalleModal;
