var chart;
		var legend;

		var chartData = [{
				country: "Jquery",
				value: 250
			},
			{
				country: "HTML5",
				value: 340
			},
			{
				country: "Laravel",
				value: 315
			},
			{
				country: "Codeigniter",
				value: 290
			},
			{
				country: "Bootstrap",
				value: 335
			},
			{
				country: "MSQl",
				value: 280
			},
			{
				country: "LINUX",
				value: 280
			}
		];

		AmCharts.ready(function () {
			// PIE CHART
			chart = new AmCharts.AmPieChart();
			chart.dataProvider = chartData;
			chart.titleField = "country";
			chart.valueField = "value";
			chart.outlineColor = "";
			chart.outlineAlpha = 0.8;
			chart.outlineThickness = 2;
			// this makes the chart 3D
			chart.depth3D = 20;
			chart.angle = 30;

			// WRITE
			chart.write("chartdiv");
		});
