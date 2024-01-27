function App() {
  
  const a=10;
  const fName = "piyumal";
  const lName="nipuna";
  const contry="sri lankan"
  const getFullName=(f,l) =>{
    return `${f} ${l}`;
  }
  
  return (
    <div className="heading cont">
      <h1 >Main Component</h1>
      <h1>age : {a}</h1>
      <p>full name : {fName} {lName}</p>
      <p>full name (function): {getFullName(fName,lName)}</p>
      <p>Contry : {contry}</p>
    </div>
  );
}


export default App;
