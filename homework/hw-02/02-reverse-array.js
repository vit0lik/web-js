let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

let copy1 = arr.slice();
let copy2 = [...arr];

copy1.reverse();
for (let i = 0, j = copy2.length - 1; i < j; i++, j--) {
    [copy2[i], copy2[j]] = [copy2[j], copy2[i]];
}

console.log(arr);
console.log(copy1);
console.log(copy2);