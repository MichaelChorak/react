import './App.css';

//A component is a function which returns an UI
function Header(props){
  console.log(props);
  return (
    <header>
      <h1>{props.name} kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
    </section>
  );
}

function Footer(){
  return (
    <footer>
      <p>It's true.</p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header  name="Michael" />
      <Main adjective="Amazing"/>
      <Footer />
    </div>
  );
}

export default App;
