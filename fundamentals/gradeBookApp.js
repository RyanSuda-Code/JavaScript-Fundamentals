const getAverage = (scores) => {
  let total = 0;

  for (let i = 0; i < scores.length; i++) { //each loop adds a score to total.
    total += scores[i];
  }
  return total / scores.length; //after the lopp, divide total with how many scores there are.
}

const getGrade = (score) => {//this function takes a score and returns the corresponding grade.
  if (score === 100) {
    return "A+";
  } else if (score >= 90 && score <= 99) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";//if the grade is not F, then the student passed the course.
}

const studentMsg = (arr, score) => {
  let average = 0;
  let grade = getGrade(arr);
  if (hasPassingGrade(score)) {//if the grade is not F, then the student passed the course.
    return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
  } else {//if the grade is F, then the student failed the course.
    return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
  }
}