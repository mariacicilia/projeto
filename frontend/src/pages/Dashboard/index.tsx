import ImgDsDark from 'assets/img/ds-dark.svg';
import Barcharts from 'components/Barcharts';
import Datatable from 'components/Datatable';
import Donutschart from 'components/Donutchart';
import Footer from 'components/Footer';
import NavBar from 'components/navBar';

const  Dashboard = () => {
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
  
  export default Dashboard;
  