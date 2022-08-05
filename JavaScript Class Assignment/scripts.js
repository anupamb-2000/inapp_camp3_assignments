students = []
class Student{
    constructor(){
        this.name = undefined;
        this.age = undefined;
        this.gender = undefined;
        this.loc = undefined;
    }
    add(name, age, gender, loc){
        let newRecord = {
            name: name,
            age: age,
            gender: gender,
            loc: loc
        }
        students.push(newRecord)
        console.log(students[0]);
    }
    list(){
        students.forEach(i => {
            console.log("Name : " + i.name)
            console.log("Age : " + i.age)
            console.log("Gender : " + i.gender)
            console.log("Location : " + i.loc)
        });
    }
    edit(name, edit, newValue){
        students.forEach(i => {
            if(strcmp(i.name,name) == 0){
                i[edit] = newValue;
                return 1;
            }
        });
    }
    del(name){
        for(var i = 0;i < students.length; i++){
            if(strcmp(students[i].name === name == 0)){
                students.splice(i,1);
                return 1
            }
        }
    }
}

s = new Student();
while(true){
    choice = parseInt(window.prompt("1. Add \n2. List all \n3. Edit \n4. Delete \n5.Exit"));
    switch(choice){
        case 1:
            sName = window.prompt("Enter name: ");
            age = parseInt(window.prompt("Enter age: "));
            gender = window.prompt("Enter gender: ");
            loc = window.prompt("Enter locaton: ");
            s.add(sName, age, gender, loc);
            break;
        case 2:
            s.list();
            break;
        case 3:
            name = window.prompt("Enter name of student to edit: ");
            edit = window.prompt("Enter name of field to edit: ");
            newValue = window.prompt("Enter new value: ");
            flag = s.edit(name, edit.toLowerCase(), newValue);
            if(flag != 1){
                alert("No such record found!");
            }
            break;
        case 4:
            name = window.prompt("Enter name of student to delete: ");
            flag = s.del();
            if(flag != 1){
                alert("No such record found!");
            }
            break;
        case 5:
            break;
        default:
            alert("Invalid Input!");
    }
}

