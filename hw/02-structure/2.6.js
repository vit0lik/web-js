// 2.6.  Создайте объект "предметы", со свойством, в котором через запятую перечислены предметы, преподаваемые в университете/школе (перечислите 2-6). Напишите к нему метод, который будет добавлять предмет, если его еще там нет. Используйте для этого преобразование в массив и свойства массивов split, join, push. Создайте метод для удаления предмета, если он уже там есть, с помощью свойства splice.
let subjects = {
    list: "Математика, Физика, Химия, Биология, География, История"
}; 

subjects.addSubject = function(subject) {
    let subjectList = this.list.split(", ");
    if (!subjectList.includes(subject)) {
        subjectList.push(subject);
        this.list = subjectList.join(", ");
    }
};

subjects.removeSubject = function(subject) {
    let subjectList = this.list.split(", ");
    let index = subjectList.indexOf(subject);
    if (index !== -1) {
        subjectList.splice(index, 1);
        this.list = subjectList.join(", ");
    }
};

console.log("Initial subjects:", subjects.list);
subjects.addSubject("Информатика");
console.log("After adding 'Информатика':", subjects.list);

subjects.removeSubject("Физика");
console.log("After removing 'Физика':", subjects.list);