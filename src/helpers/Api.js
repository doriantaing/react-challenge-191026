const getAllStudents = async() => {
    const res = await fetch('/students').then(res => res.json());
    const {rows} = res;
    
    return rows
};

const getStudent = async(id) => {
  const res = await fetch(`/students/${id}`).then(res => res.json());

  return res[0]
};

const createStudent = async(info) => {
  return await fetch('/createStudent', {
    method: 'POST',
    headers : {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( info )
  })
};

const deleteStudent = async(id) => {
  return await fetch(`/deleteStudent/${id}`, {
    method: 'DELETE',
    header: {
      'Content-Type': 'application/json'
    },
  })
};


const editStudent = async(id, info) => {
  return await fetch(`/updateStudent/${id}`, {
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