var selectedData = 'deaths';
var selectedYear = 2006;
// create a new map object
let map = new Map(selectedYear, selectedData);

// create the svg for the selectors
var yearSelector = d3.select('#year-slider')
  .append('svg')
  .attr('width', 600)
  .attr('height', 100)
  .append('g')
  .attr('transform', 'translate(50,40)')
  .attr('id', 'slider')
  ;

// create the year slider
var slider = d3.sliderBottom()
  .min(2006)
  .max(2011)
  .width(400)
  .tickFormat(d3.format('1000'))
  .ticks(6)
  .step(1)
  .default(0.015)
  .on('onchange', (val) => {
    selectedYear = val;
    map.update(selectedYear, selectedData);
  })
  ;

yearSelector.call(slider);

// create the selector buttons
d3.selectAll('input[name="switch-two"]')
  .on('change', function(){
    selectedData = this.value;
    map.update(selectedYear, selectedData);
  })
  ;
