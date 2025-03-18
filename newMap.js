//Maps
const map =new Map();
map.set("India","rupee");
map.set("Usa","dollar");
map.set("china","yuan");
console.log(map);

console.log(map.get("India"));
console.log(map.has("japan"));
console.log(map.has("japan") ? "yes" : map.set("japan", "japense yen"));

map.delete("Usa")
console.log(map);
