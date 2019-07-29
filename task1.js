const students = [];

students[0] = {
    name: 'Masha',
    age: 53,
    height: 174,
    eyeColor: 'Brown',
    isGirl: true,
    getInfo() {
        console.log(this.name, this.age, this.height, this.eyeColor, this.isGirl);
    }
};
students[1] = {
    name: 'John',
    age: 33,
    height: 194,
    eyeColor: 'Blonde',
    isGirl: false,
    getInfo() {
        console.log(this.name, this.age, this.height, this.eyeColor, this.isGirl);
    }
};
students[2] = {
    name: 'Daniel',
    age: 43,
    height: 196,
    eyeColor: 'Brown',
    isGirl: false,
    getInfo() {
        console.log(this.name, this.age, this.height, this.eyeColor, this.isGirl);
    }
};

function compareAge(student1, student2) {
    return student1.age - student2.age;
}
students.sort(compareAge);

console.log(students);