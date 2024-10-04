import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-stocks-chart',
  templateUrl: './stocks-chart.component.html',
  styles: [
  ]
})

export class StocksChartComponent implements OnInit, OnChanges {

  @Input() data: any[] | null | undefined;
  private svg: any;
  private margin = 40;
  private width = 700 - (this.margin);
  private height = 400 - (this.margin);
  private xScale: any
  private yScale: any

  constructor() { }

  ngOnInit(): void {
    this.createSvg();
    this.buildChart(this.data);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] !== null && changes['data'].currentValue.length > 0) {
      this.buildChart(this.data);
    }
  }

  private createSvg(): void {
    this.svg = d3.select("figure#stockchart")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  private parseData(data: any[] | null | undefined) {
    const parseDate = d3.timeParse("%Y-%m-%d");
    data.forEach(d => {
      d.Date = parseDate(d.Date);
      d.Close = +d.Close;
    });
  }


  private prepareChart(data: any[] | null | undefined) {
    this.svg.selectAll("*").remove();
    // Create the X-axis band scale
    this.xScale = d3.scaleTime()
      .domain(d3.extent(data, d => d.Date))
      .range([0, this.width]);

    // Create the Y-axis band scale
    this.yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.Close)])
      .range([this.height, 0])

    this.svg.append("g")
      .attr("transform", `translate(0,${this.height})`)
      .call(d3.axisBottom(this.xScale));

    // Add the y-axis

    this.svg.append("g")
      .attr("transform", `translate(${this.width},0)`)
      .call(d3.axisRight(this.yScale))
  }

  private buildChart(data: any[] | null | undefined): void {
    if (data === null || data === undefined) {
      return;
    }

    this.parseData(data);
    this.prepareChart(data);
    this.drawChart();
  }


  private drawChart(): void {

    const min = d3.min(this.data, d => d.Close);
    const initialPoints: [number, number][] = this.data.map(
      d => [this.xScale(new Date(d.Date)), this.height]
    );

    const points: [number, number][] = this.data.map(
      d => [this.xScale(new Date(d.Date)), this.yScale(d.Close)]
    );

    
    const lineGenerator = d3.line();
    lineGenerator.curve(d3.curveMonotoneX);
    // Add the line path
    this.svg.append("path")
      .attr("class", "line")
      .attr("fill", "none")
      .attr("stroke", "#22B14C")
      .attr("stroke-width", 1)
      .attr("d", lineGenerator(initialPoints))
      .transition().delay(200)
      .attr("d", lineGenerator(points))

    const flat = d3.area()
      .x(d => (d[0]))
      .y0(this.height)
      .y1(this.height);

      const area = d3.area()
      .x(d => (d[0]))
      .y0(this.height)
      .y1(d => (d[1]));

    const gradient = this.svg.append("defs")
      .append("linearGradient")
      .attr("id", "gradient")
      .attr("x1", "0%")
      .attr("x2", "0%")
      .attr("y1", "0%")
      .attr("y2", "100%")
      .attr("spreadMethod", "pad");
      gradient.append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "#22B14C")
      .attr("stop-opacity", 1);
    
    gradient.append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "#22B14C")
      .attr("stop-opacity", 0);

    // Add the area path
    this.svg.append("path")
      .attr("class", "area")
      .attr("d", flat(points))
      .transition().delay(200)
      .attr("d", area(points))
      .style("fill", "url(#gradient)")
      .style("opacity", .5);

  }


}
