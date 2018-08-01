function loadJSON(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }else{
        reject(new Error('error'));

      }
    })
  })
}
var fetchedData=loadJSON("data.json");
fetchedData.then(data=>{
  console.log(data);
  career(data.career);
  education(data.education);

})
var child2=document.querySelector("#child2");
//career
function career(car){
  var heading=document.createElement("h2");
  heading.textContent="Career Objective";
   child2.appendChild(heading);
   var hLine=document.createElement("hr");
   heading.appendChild(hLine);
  var p=document.createElement("p");
  p.textContent=car.info;
child2.appendChild(p);
}

//education

function education(edu){
  var heading=document.createElement("h2");
  heading.textContent="Educational Qualifications";
   child2.appendChild(heading);
   var hLine=document.createElement("hr");
   heading.appendChild(hLine);
   var table=document.createElement("table");
   child2.appendChild(table);
   var tr="<tr><td>S.NO</td><td>Degree</td><td>Institute</td><td>Data</td></tr>";
   table.innerHTML=tr;
   table.border="1";
}
