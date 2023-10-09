var napok = ["hétfő", "kedd", "szerda","csütörtök","péntek","szombat","vasárnap"];
console.log("for ciklussal")
for(let i=0;i<napok.length;i++)
{
    console.log(napok[i]);
}
console.log("for in ciklus")
for (var index in napok) {
    console.log(napok[index]);
}
console.log("for of ciklus")
for (var nap of napok) {
    console.log(nap);
}
console.log("foreach index ciklussal")
napok.forEach(function(nap) {
    console.log(nap);
});
console.log("foreach index, value ciklussal")
napok.forEach(function(value, index) {
    console.log("Index: " + index + ", Érték: " + value);
});
console.log("foreach value ciklussal")
napok.forEach(function(value) {
    console.log(value);
});
console.log("while ciklussal")
var i = 0;
while (i < napok.length) {
    console.log(napok[i]);
    i++;
}
console.log("do while ciklussal")
var i = 0;
do {
    console.log(napok[i]);
    i++;
} while (i < napok.length);