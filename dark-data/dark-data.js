$(document).ready(function () {
    $('#dark-table').DataTable({
        colReorder: true
    });
});


// BINDING TO AN ARRAY
// var array = [
//     [
//         "Ram",
//         "21",
//         "Male",
//         "Doctor"
//     ],
//     [
//         "Mohan",
//         "32",
//         "Male",
//         "Teacher"
//     ],
//     [
//         "Rani",
//         "42",
//         "Female",
//         "Nurse"
//     ],
//     [
//         "Johan",
//         "23",
//         "Female",
//         "Software Engineer"
//     ],
//     [
//         "Shajia",
//         "39",
//         "Female",
//         "Farmer"
//     ]
// ];

// $('#dark-table').DataTable({
// data: array,
// "pageLength": 3
// });



// BINDING TO JSON
// var json = [
//     {
//         "name": "Ram",
//         "age": "21",
//         "sex": "Male",
//         "occupation": "Doctor"
//     },
//     {
//         "name": "Mohan",
//         "age": "32",
//         "sex": "Male",
//         "occupation": "Teacher"
//     },
//     {
//         "name": "Rani",
//         "age": "42",
//         "sex": "Female",
//         "occupation": "Nurse"
//     },
//     {
//         "name": "Johan",
//         "age": "23",
//         "sex": "Female",
//         "occupation": "Software Engineer"
//     },
//     {
//         "name": "Shajia",
//         "age": "39",
//         "sex": "Female",
//         "occupation": "Farmer"
//     }
// ];

// $('#dark-table').DataTable({
// data: json,
// columns: [
// { data: 'name' },
// { data: 'age' },
// { data: 'sex' },
// { data: 'occupation' }
// ],
// "pageLength": 3
// });


  