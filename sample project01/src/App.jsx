import Body from "./component/bodyContent/Body";
import Footer from "./component/footerContent/Footer";
import Heder from "./component/headerContent/Heder";


function App() {
  return (
  <>
  <Heder />
  <Body>
    <button>click me</button>
  </Body>

  <Body>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic magni, unde, sapiente doloremque beatae perspiciatis soluta nulla quibusdam nostrum facere amet doloribus odit? Quod laborum autem eos voluptatem accusamus sed?</p>
  </Body>
  <Footer />
  </>
  )
}

export default App;
