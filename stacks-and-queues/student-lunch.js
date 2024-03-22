// https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/description/
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
// If the student at the front of the queue prefers the sandwich on the top of the stack, 
//they will take it and leave the queue.
//Otherwise, they will leave it and go to the queue's end.
var countStudents = function(students, sandwiches) {
    let kids = students;
    let length = students.length;
    
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < sandwiches.length; j++) {
            let firstStudent = 0;
            if (sandwiches[j] === kids[i]) {
                kids.shift();
                sandwiches.shift();
                console.log('removed a student, removed a sandwich')
                console.log(kids, ' -- ', sandwiches )
                console.log('length ', kids.length, sandwiches.length)
            } else {
                firstStudent = kids.shift();
                kids.push(firstStudent);
                console.log('removed a student, pushed to end')
                console.log(kids, ' -- ', sandwiches )
                console.log('length ', kids.length, sandwiches.length)
            }
        }
    }
};

console.log(countStudents([1,1,0,0], [0,1,0,1]));
console.log(countStudents([1,1,1,0,0,1], [1,0,0,0,1,1]));