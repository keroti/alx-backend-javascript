export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  return listOfStudents
    .filter((student) => student.location === city)
    .map((student) => {
      // eslint-disable-next-line
      const matchingGrade = newGrades.reduce((result, grade) => (grade.studentId === student.id ? grade.grade : result), null);
      return { ...student, grade: matchingGrade ?? 'N/A' };
    });
}
