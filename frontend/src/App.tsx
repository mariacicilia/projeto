import NavBar from "components/navBar";
import Datatable from "components/Datatable";
import Footer from "components/Footer";
import Barcharts from "components/Barcharts";
import Donutschart from "components/Donutchart";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de vendas</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
            <Barcharts />
          </div>

          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Todas vendas</h5>
            <Donutschart />
          </div>


        </div>
        <div className="py-3">
          <h2 className="text-primary">Todas vendas</h2>

        </div>
        <Datatable />
      </div>
      <Footer />
    </>
  );
}

export default App;
