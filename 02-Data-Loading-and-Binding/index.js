// -- 2. Data Loading and Binding --

var dataset = [1, 2, 3, 4, 5];

d3.select('body')
  .selectAll('p')
  .data(dataset)
  .enter() // Will take data items one by one and perform operations on them
  .append('p') // Appends paragraph for each data element
  .style('color', 'red')
  // .text('D3 is awesome!');
  .text(function(d) { return d; });
