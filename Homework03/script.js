function studentsInfo() {
  fetch(
    "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"
  ).then((students) => {
    students.json().then((parsedData) => {
      let studentsData = parsedData;

      let averageGradeHigherThanThree = studentsData.filter(
        (s) => s.averageGrade > 3
      );
      console.log(averageGradeHigherThanThree);

      let femaleStudentsWihAverageGrade5 = studentsData
        .filter((s) => s.gender === "Female")
        .filter((s) => s.averageGrade === 5);

      console.log(femaleStudentsWihAverageGrade5);

      let maleAdultsThatLiveInSkopje = studentsData
        .filter((s) => s.gender === "Male")
        .filter((s) => s.city === "Skopje")
        .filter((s) => s.age > 18);

      console.log(maleAdultsThatLiveInSkopje);

      let femaleStudentsOver24 = studentsData.filter(
        (s) => s.gender === "Female" && s.age > 24
      );

      let averageGradesOfAllFemaleOver24 =
        femaleStudentsOver24
          .map((s) => s.averageGrade)
          .reduce((sum, averageGrade) => (sum += averageGrade), 0) /
        femaleStudentsOver24.length;
      console.log(
        "The average grade of all female students over 24 is: ",
        averageGradesOfAllFemaleOver24
      );

      let maleStudentsWithGradeover2 = studentsData
        .filter((s) => s.gender === "Male")
        .filter((s) => s.averageGrade > 2)
        .filter((s) => s.firstName.startsWith("B"));

      console.log(maleStudentsWithGradeover2);
    });
  });
}

studentsInfo();
