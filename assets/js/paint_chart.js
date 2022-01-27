
const chartElement = document.getElementById('digital-chart');

const dataArray = [29, 29, 30, 32, 36, 38, 38, 37, 34, 30, 27, 26, 25, 25, 25, 26, 27, 30, 34, 40, 43, 45, 46, 46, 45.5, 44,40, 37, 36, 36 , 37];

const data = {
    labels: dataArray,
    datasets: [{
      label: 'Digital Wallet Dataset',
      fillColor: 'linear-gradient(180deg, #C1BFFB 0%, rgba(220, 219, 250, 0) 100%);',
      borderColor: '#4F4282',
      data: dataArray,
      fill: true,
      tension: 0.3,
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        elements: {
            point:{
                radius: 0
            },
        }, 
        scales: {
            x: {
              grid: {
                display: false,
                drawBorder: false,
              },
              ticks: {
                display: false,

              min: 0,
              },
            },
            y: {
              grid: {
                display: false,
                drawBorder: false
              },
              ticks: {
                display: false,
                beginAtZero:true,
              }
            },
        }
    }
};

const chart = new Chart(chartElement, config);