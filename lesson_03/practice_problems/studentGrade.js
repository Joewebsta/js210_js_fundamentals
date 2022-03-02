let rlSync = require('readline-sync');

function calculateGrade() {
  scores = collectScores();
  avgScore = (scores[0] + scores[1] + scores[2]) / 3;
  console.log("Based on the average of your 3 scores your letter grade " +
              `is ${letterGrade(avgScore)}.`);
}

function collectScores() {
  score1 = rlSync.question("Enter score 1: ");
  score2 = rlSync.question("Enter score 2: ");
  score3 = rlSync.question("Enter score 3: ");

  return [Number(score1), Number(score2), Number(score3)];
}

function letterGrade(score) {
  let grade;

  if (score >= 90) {
    grade = 'A';
  } else if (score >= 70) {
    grade = 'B';
  } else if (score >= 50) {
    grade = 'C';
  } else {
    grade = 'F';
  }

  return grade;
}

calculateGrade();