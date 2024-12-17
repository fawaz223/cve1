const form = document.getElementById("calculator-form");
const semesterSelect = document.getElementById("semester");
const coursesInput = document.getElementById("courses");
const courseGradesDiv = document.getElementById("course-grades");
const calculateBtn = document.getElementById("calculate-btn");
const resultPara = document.getElementById("result");

coursesInput.addEventListener("input", (e) => {
  const numCourses = parseInt(e.target.value);
  courseGradesDiv.innerHTML = "";

  for (let i = 0; i < numCourses; i++) {
    const gradeInput = document.createElement("input");
    gradeInput.type = "number";
    gradeInput.min = 0;
    gradeInput.max = 100;
    gradeInput.placeholder = `Grade for Course ${i + 1}`;
    courseGradesDiv.appendChild(gradeInput);
    courseGradesDiv.appendChild(document.createElement("br"));
  }
});

calculateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const numCourses = parseInt(coursesInput.value);
  const grades = Array.from(courseGradesDiv.children)
    .filter((child) => child.tagName === "INPUT")
    .map((input) => parseFloat(input.value));
  const semester = parseInt(semesterSelect.value);

  if (grades.includes(NaN) || grades.some((grade) => grade < 0 || grade > 5)) {
    resultPara.textContent = "Invalid grade(s) entered.";
    return;
  }

  const totalPoints = grades.reduce((acc, grade) => acc + grade, 0);
  const cgpa = totalPoints / numCourses;

  resultPara.textContent = `Your CGPA for Semester ${semester} is: ${cgpa.toFixed(
    2
  )}`;
});
