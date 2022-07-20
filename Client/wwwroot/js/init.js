$(function () {
    'use strict'

    $.plot('#flotChart1', [{
        data: df3,
        color: '#e1e5ed',
        lines: {
            lineWidth: 1
        }
    }, {
        data: df3,
        color: '#69b2f8',
        lines: {
            lineWidth: 1
        }
    }, {
        data: df3,
        color: '#e6b222'
    }], {
        series: {
            stack: 0,
            shadowSize: 0,
            lines: {
                show: true,
                lineWidth: 1.7,
                fill: true,
                fillColor: { colors: [{ opacity: 0 }, { opacity: 0.2 }] }
            }
        },
        grid: {
            borderWidth: 0,
            labelMargin: 5,
            hoverable: true
        },
        yaxis: {
            show: true,
            color: 'rgba(72, 94, 144, .1)',
            min: 0,
            max: 160,
            font: {
                size: 10,
                color: '#8392a5'
            }
        },
        xaxis: {
            show: true,
            color: 'rgba(72, 94, 144, .1)',
            ticks: [[0, '08:00'], [20, '09:00'], [40, '10:00'], [60, '11:00'], [80, '12:00'], [100, '13:00'], [120, '14:00'], [140, '15:00']],
            font: {
                size: 10,
                family: 'Arial, sans-serif',
                color: '#8392a5'
            },
            reserveSpace: false
        }
    });





function flotOption(min, max) {
    return {
        series: {
            stack: 0,
            shadowSize: 0,
            lines: {
                show: true,
                lineWidth: 1.5,
                fill: true,
                fillColor: { colors: [{ opacity: 0 }, { opacity: 0.2 }] }
            }
        },
        grid: { borderWidth: 0 },
        yaxis: { show: false },
        xaxis: {
            show: false,
            min: min,
            max: max
        }
    }
}

    // Ethereum
    $.plot('#flotChart2', [{
        data: df3,
        color: '#c0ccda',
        lines: { lineWidth: 1 }
    }, {
        data: df3,
        color: '#a0aabc'
    }], flotOption(0, 50));

    // Bitcoin Cash
    $.plot('#flotChart3', [{
        data: df3,
        color: '#b8eace',
        lines: { lineWidth: 1 }
    }, {
        data: df3,
        color: '#58cd8b'
    }], flotOption(20, 70));

    // Litecoin
    $.plot('#flotChart4', [{
        data: df3,
        color: '#c0ccdf',
        lines: { lineWidth: 1 }
    }, {
        data: df3,
        color: '#6e8ab6'
    }], flotOption(90, 140));

    // Dash
    $.plot('#flotChart5', [{
        data: df3,
        color: '#b1d0fd',
        lines: { lineWidth: 1 }
    }, {
        data: df3,
        color: '#4c94fb'
    }], flotOption(80, 130));



    // Markets
    $.plot('#flotChart6', [{
        data: df1,
        color: '#00cccc',
        lines: {
            lineWidth: 1.7,
            fill: true,
            fillColor: { colors: [{ opacity: 0 }, { opacity: 0.4 }] }
        }
    }, {
        data: df2,
        color: '#e1e5ed',
        lines: {
            lineWidth: 1,
            fill: true,
            fillColor: { colors: [{ opacity: 0 }, { opacity: 0.2 }] }
        }
    }], {
        series: {
            shadowSize: 0,
            lines: {
                show: true,
            }
        },
        grid: {
            borderWidth: 0,
            labelMargin: 10,
            aboveData: true
        },
        yaxis: {
            show: false,
            max: 150
        },
        xaxis: {
            show: true,
            tickColor: 'rgba(72,94,144, 0.07)',
            ticks: [[25, 'mar 10'], [50, 'mar 11'], [75, 'mar 12'], [100, 'mar 13'], [125, 'mar 14']],
            //min: 35,
            //max: 125
        }
    });


    /** PIE CHART **/
    var datapie = {
        labels: ['USD', 'EUR', 'CNY', 'GBP', 'JPY', 'KRW', 'SGD'],
        datasets: [{
            data: [25, 15, 10, 12, 9, 13, 16],
            backgroundColor: ['#66a4fb', '#4cebb5', '#fec85e', '#ff7c8f', '#a4e063', '#a5d7fd', '#b2bece']
        }]
    };

    var optionpie = {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
            display: false,
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    };

    // For a pie chart
    var ctx2 = document.getElementById('chartDonut');
    var myDonutChart = new Chart(ctx2, {
        type: 'doughnut',
        data: datapie,
        options: optionpie
    });

})