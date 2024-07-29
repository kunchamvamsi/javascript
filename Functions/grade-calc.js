const gradeCalc = function (score, totalScore) {
  const percent = (score / totalScore) * 100;
  let letterGrade = "";

  if (percent >= 90) {
    letterGrade = "A";
  } else if (percent >= 80) {
    letterGrade = "B";
  } else if (percent >= 70) {
    letterGrade = "C";
  } else if (percent >= 60) {
    letterGrade = "D";
  } else if (percent >= 50) {
    letterGrade = "E";
  } else if (percent >= 40) {
    letterGrade = "F";
  }

  return `You got a ${letterGrade} with ${percent}%`;
};
const result = gradeCalc(28, 50);
console.log(result);
