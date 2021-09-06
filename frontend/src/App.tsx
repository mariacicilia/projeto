import NavBar from "components/navBar";
import Datatable from "components/Datatable";
import Footer from "components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">titulo</h1>
        <Datatable />
      </div>
      <Footer />
    </>
  );
}

export default App;
