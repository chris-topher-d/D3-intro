// -- 1. Selection and Manipulation --

// -- Both of these methods accept a CSS selector or the name of DOM element as a parameter
// Returns the first selection of DOM element matching the criteria
d3.select();
// Returns all the elements matching the criteria
d3.selectAll();

// Example - this will look into the DOM and return the first h1 tag it finds
// If there is no h1 element in the DOM, it will return an empty selection
d3.select('h1').style('color', 'red')
.attr('class', 'heading')
.text('Updated h1 tag');

d3.select('body').append('p').text('First Paragraph');
d3.select('body').append('p').text('Second Paragraph');
d3.select('body').append('p').text('Third Paragraph');

d3.selectAll('p').style('color', 'blue');
