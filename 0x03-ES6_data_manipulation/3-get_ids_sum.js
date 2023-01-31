export default function getStudentIdsSum(students) {
  return students.reduce((prevStudent, curStudent) => prevStudent + curStudent.id, 0);
}
