import Chart from 'react-apexcharts';

const Donutschart = () => {

    const mockData = {
        series: [500000, 499928, 444867, 220426, 473088],
        labels: ['Maria Cicilia', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }
    
    const options = {
        legend: {
            show: true
        }
    }
    
    return (
        
        <Chart 
        options ={{...options, labels: mockData.labels}}
        series= {mockData.series}
        type= "donut"
        height="240"
        />
        
                    
    );
}

export default Donutschart;
