import { Component, OnInit } from '@angular/core';
// import { NgxEchartsModule } from 'ngx-echarts';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-chartresult',
  templateUrl: './chartresult.component.html',
  styleUrls: ['./chartresult.component.css']
})
export class ChartresultComponent implements OnInit {

  // demo_html = require('!!html-loader!./chartresult.component.html');
  // demo_ts = require('!!raw-loader!./chartresult.component.ts');
	chartOption: EChartOption = {
	  xAxis: {
		type: 'category',
		data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
	  },
	  yAxis: {
		type: 'value'
	  },
	  series: [{
		data: [820, 932, 901, 934, 1290, 1330, 1320],
		type: 'line'
	  }]
	};

  options: any;

  constructor() { }

  ngOnInit() {
    const xAxisData = [];
    const data1 = [];
    const data2 = [];

    for (let i = 0; i < 100; i++) {
      xAxisData.push('category' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    this.options = {
      legend: {
        data: ['bar', 'bar2'],
        align: 'left'
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false
        }
      },
      yAxis: {
      },
      series: [{
        name: 'bar',
        type: 'bar',
        data: data1,
        animationDelay(idx) {
          return idx * 10;
        }
      }, {
        name: 'bar2',
        type: 'bar',
        data: data2,
        animationDelay(idx) {
          return idx * 10 + 100;
        }
      }],
      animationEasing: 'elasticOut',
      animationDelayUpdate(idx) {
        return idx * 5;
      }
    };
  }

}
