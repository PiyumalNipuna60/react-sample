import Body from "./component/bodyContent/Body";
import Footer from "./component/footerContent/Footer";
import Heder from "./component/headerContent/Heder";


function App() {

  //event
function click(){
  console.log("click 01");
}


//arrow funtion
const click2=()=>{
  console.log("click 02");
}

  //defalt run venava
  function click3(name){
    console.log("click 03 "+name);
  }

  //annonimus funtion
  function click4(name){
    console.log("click 04 "+name);
  }

  return (
  <>
  <Heder />
  <Body>
    <button onClick={click}>click 01 me</button>
  </Body>

  <Body>
    <button onClick={click2}>click 02 me</button>
  </Body>

  <Body>
    <button onClick={click3("piyumal")}>click 03 me</button>
  </Body>

  <Body>
    <button onClick={
      ()=>{
        click4("piyumal")
      }
      }>click 04 me</button>
  </Body>

  <Body>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic magni, unde, sapiente doloremque beatae perspiciatis soluta nulla quibusdam nostrum facere amet doloribus odit? Quod laborum autem eos voluptatem accusamus sed?</p>
  </Body>
  <Footer />
  </>
  )
}

export default App;
