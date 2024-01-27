function App() {
  
  const a=10;
  const fName = "piyumal";
  const lName="nipuna";
  const contry="sri lankan"

const arr=["Apple","Mango","Orange'"]

  const getFullName=(f,l) =>{
    return `${f} ${l}`;
  }

  const obj={
    fName:"Kamal",
    age:"24"
  }
  
  return (
    <div className="heading cont">
      <h1 >Main Component</h1>
      <h1>age : {a}</h1>
      <p>full name : {fName} {lName}</p>
      <p>full name (function): {getFullName(fName,lName)}</p>
      <p>Contry : {contry}</p>
      <p>{fName} like to eat  {arr[0]}</p>

      <p style={{color:"black"}}>my frend {obj.fName} age is {obj.age}</p>
    </div>
  );
}


export default App;
