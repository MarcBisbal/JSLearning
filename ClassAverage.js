var average = 0
var students = [
    {
        name: 'student 1',
        mark: 5
    },
    {
        name: 'student 2',
        mark: 8
    },
    {
        name: 'student 3',
        mark: 1
    }
]
for (var i = 0; i < students.length; i += 1) {
    var student = students[i];
    console.log(student.name, student.mark)
    average += student.mark;
}
console.log("The class average is:", Math.round(average/i * 100) / 100, "over 10.")