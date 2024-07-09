import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Importing chart.js/auto for the latest version

export default function ChartLine() {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');

        const config = {
            type: 'line',
            data: {
                labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                ],
                datasets: [
                    {
                        label: new Date().getFullYear(),
                        backgroundColor: '#03a9f4',
                        borderColor: '#03a9f4',
                        data: [65, 78, 66, 44, 56, 67, 75],
                        fill: false,
                    },
                    {
                        label: new Date().getFullYear() - 1,
                        fill: false,
                        backgroundColor: '#ff9800',
                        borderColor: '#ff9800',
                        data: [40, 68, 86, 74, 56, 60, 87],
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                plugins: {
                    legend: {
                        labels: {
                            color: 'black',
                        },
                        align: 'end',
                        position: 'bottom',
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                    },
                },
                scales: {
                    x: {
                        ticks: {
                            color: 'rgba(17,17,17,.7)',
                        },
                        title: {
                            display: false,
                            text: 'Month',
                            color: 'white',
                        },
                        grid: {
                            display: false,
                            borderColor: 'rgba(33, 37, 41, 0.3)',
                            borderWidth: 2,
                            borderDash: [2],
                            drawBorder: false,
                        },
                    },
                    y: {
                        ticks: {
                            color: 'rgba(17,17,17,.7)',
                        },
                        title: {
                            display: false,
                            text: 'Value',
                            color: 'white',
                        },
                        grid: {
                            borderColor: 'rgba(17, 17, 17, 0.15)',
                            borderWidth: 3,
                            borderDash: [3],
                            drawBorder: false,
                        },
                    },
                },
            },
        };

        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }

        chartInstanceRef.current = new Chart(ctx, config);

        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, []);

    return (
        <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-orange-500 text-white p-4">
                <h6 className="uppercase text-xs font-medium">Overview</h6>
                <h2 className="text-2xl">Sales value</h2>
            </div>
            <div className="p-4">
                <div className="relative h-96">
                    <canvas ref={chartRef} id="line-chart"></canvas>
                </div>
            </div>
        </div>
    );
}
