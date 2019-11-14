const getAllStudents = async() => {
    const res = await fetch('/students');
    const json = await res.json();
    const {rows} = json;

    return rows
};

const getStudent = async(id) => {
  const res = await fetch(`/students/${id}`);
  const json = await res.json();

  return json[0]
};

const createStudent = (info) => {
  return fetch('/createStudent', {
    method: 'POST',
    headers : {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( info )
  })
};

const deleteStudent = (id) => {
  return fetch(`/deleteStudent/${id}`, {
    method: 'DELETE',
    header: {
      'Content-Type': 'application/json'
    },
  })
};


const editStudent = (id, info) => {
  return fetch(`/updateStudent/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify( info )
  })
};

export default {
  getAllStudents,
  createStudent,
  getStudent,
  deleteStudent,
  editStudent
};