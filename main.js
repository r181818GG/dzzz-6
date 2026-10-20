// const fullname ='Якуб Руслан';
// fullname.toUpperCase();
// console.log(fullname);

// const age = 24;
// const role ='Frontend-разработчикб преподовтель и админимтратор';



// const user = {
// fullname: 'Брюс Уэйн',
//     age: 54,
//     role:'Миллиардер,плейбой,темный рыцарь',
//     'city Name':'Готэм'
//  };
//  user.age = 41;
//  user.status = 'Богач';
//  delete user.role;
 
//  console.log(typeof user, user);
//   console.log(user.fullname);
//   console.log(user['city Name']);
//    console.log(user.state);
//    console.log(user.role);
   
//    const car = {
//     model: 'Camry',
//     mark: 'Toyota',
//     year: '2018'
//    };
//    console.log('mark' in car);
//    console.log(Object.keys(car));
//     console.log(Object.values(car));
   
//    car.yaer = 2022;
//    car.price = '23456789$';

//    for(const key in car ){
//     console.log(key + ':' + car[key]);
    
//    };
//    console.log(car.model);
//    console.log(car.mark);
//    console.log(car.year, car.price);
   

function checkDataType(value) {
    if (typeof value === 'object') {
        return 'Непримитивный тип';
    } else {
        return 'Примитивный тип';
    }
}

console.log(checkDataType(24));
console.log(checkDataType('Руслан'));
console.log(checkDataType(true));
console.log(checkDataType({name: 'Руслан'}));



const user = {
    id: 1,
    name: 'Руслан',
    role: 'Студент'
};

function updateProfileMutably(userObject, newName, newRole) {
    userObject.name = newName;
    userObject.role = newRole;
}

updateProfileMutably(user, 'Самир', 'Frontend-разработчик');

console.log(user);
console.log(user.name);
console.log(user.role);



const user2 = {
    id: 1,
    name: 'Руслан',
    role: 'Студент'
};

function updateProfileImmutably(userObject, newName, newRole) {
    const newUser = {};

    newUser.id = userObject.id;
    newUser.name = newName;
    newUser.role = newRole;

    return newUser;
}

const updatedUser = updateProfileImmutably(user, 'Самир', 'Администратор');

console.log(user);
console.log(updatedUser);
console.log(user.name);
console.log(updatedUser.name);

   
   
  
 