//Total admission fess

let totalAmmount = 0;
studentsDetails.forEach((data, i) => {
    console.log(`Name : ${data[0]} - Ammount : ${data[6]}`);
    totalAmmount += Number(data[6])
})

console.log(`
-----------------------------------------------
Total Ammount          = ${totalAmmount}
`); 





// Find All Female Students 

studentsDetails.sort().map((data, i) => {
    if (data[4] === 'female') {
        console.log(`${i + 1}. Name : ${data[0]} - Gendar : ${data[4]}`);
    }   
});





// Find class wise student result

studentsDetails.sort().forEach((data, i) => {
    if(data[3] == 12){
        console.log(`The Person ${data[0]}, read in class ${data[3]}`);
    }
});






// Location wise student result

studentsDetails.sort().forEach((data, i) => {
    if(data[5] === 'Mirpur'){
        console.log(`${data[0]}, Lives in ${data[5]}`);
    }
});







//find student between 10 - 25 age 

studentsDetails.sort().forEach((data, i) => {
    if(data[2] >= 10 && data[2] <= 25){
        console.log(`Name : ${data[0]} - Age : ${data[2]}   (10-25)`);
    }
})