import React, { Component } from "react";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

class BarChart extends Component {
	constructor(props) {
		super(props);

		const yvalues = [1, 2, 3, 5];
		const value = 4.38;

		this.chartOptions = {
			chart: {
				type: 'bar',
				height: 250,
				marginBottom: 0,
				marginTop: 0,
				backgroundColor: '#181b24'
			},
			title: null,
			subtitle: null,
			caption: null,
			xAxis: {
				title: {
					text: ''
				},
				tickWidth: 0,
				lineWidth: 0,
				labels: {
					enabled: false,
				},
			},
			yAxis: {
				min: yvalues[0],
				max: yvalues[3],
				title: null,
				gridLineWidth: 0,
				offset: -70,
				labels: {
					formatter: function() {
						if (yvalues.includes(this.value)) {
							return `<span style="color: #e5e6eb; font-size: 32px;">${this.value}</span>`;
						} else return '';
					}
				},
				tickInterval: 1
			},
			tooltip: {
				enabled: false
			},
			plotOptions: {
				series: {
					pointWidth: 50,
					borderWidth: 0,
					enableMouseTracking: false,
				}
			},
			legend: {
				enabled: false
			},
			credits: {
				enabled: false
			},
			series: [
				{
					type: 'bar',
					pointPlacement: 0,
					color: '#00a15e',
					grouping: false,
					name: 'back',
					data: [yvalues[3]]
				}, {
					type: 'bar',
					name: 'green',
					color: '#00a15e',
					grouping: false,
					data: [value],
					dataLabels: {
						enabled: true,
						y: -72,
						useHTML: true,
						formatter: function() {
							return `<div style="width: 72px; text-align: center;">
								<div style="color: #00a15e; font-size: 32px;">${this.y}</div>
								<div style="height: 40px; width: 3px; margin: 5px 34px 0; background: #00a15e;"></div>
							</div>`;
						},
						align: 'center',
						verticalAlign: 'middle',
		
					}
				}, {
					type: 'bar',
					name: 'yellow',
					color: '#ff9c00',
					grouping: false,
					data: [yvalues[2]]
				}, {
					type: 'bar',
					name: 'red',
					color: '#de1c1c',
					grouping: false,
					data: [yvalues[1]]
				},
			]
		}
	}

	render() {
		return (
			<div style={{width: '80%', marginLeft:'auto', marginRight:'auto'}}>
				<HighchartsReact
					highcharts={Highcharts}
					options={this.chartOptions}
				/>
			</div>
		);
	}
}

export default BarChart;
