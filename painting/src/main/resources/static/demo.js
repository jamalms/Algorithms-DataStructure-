
// //callback
// const getBlogs =(cb) => {
//     setTimeout(() => {
//         cb({
//             title:'welcome to JS'
//         })
//     }, 5000);
// }
// getBlogs((bp) => {
//     console.log(bp.title);
// });


//Duplicate values

let data=['a', 'b', 'c', 'd', 'a', 'b'];

let unique = data.filter((a, index) => {
    return data.indexOf(a) === index;
});
console.log(unique + ' ' +'the length is: ' + unique.length);
