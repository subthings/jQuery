const student = {
    name: 'Masha',
    age: 53,
    height: 174,
    eyeColor: 'Brown',
    isGirl: true,
    getInfo() {
        console.log(this.name, this.age, this.height, this.eyeColor, this.isGirl);
    }
};

const {name: studentName, height} = student;
console.log(studentName, height)