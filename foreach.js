const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach((e)=>console.log(e)
)
console.log('/////////////');

function show(item){
  console.log(item);
  
}

coding.forEach(show)

coding.forEach((item,index,arr)=>{
  console.log(item,index,arr);
  
})

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item)=>{
console.log(item.languageName);

})