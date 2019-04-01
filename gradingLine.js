var gradesP = d3.json("penguins/classData.json")

var height = 600
var width = 800

var padding = 30

var svg = d3.select("body")
            .append("svg")
            .attr("width",width)
            .attr("height",height)

gradesP.then(function(data){
  drawChart(data);
});


var drawChart = function(data){

  var xScale = d3.scaleLinear()
                  .domain([0,11])
                  .range([padding,width-padding])

  var yScale = d3.scaleLinear()
                  .domain([0,10])
                  .range([height-padding,padding])

  var circles = svg.selectAll("circle")
                    .data(data)
                    .enter()
                    .append("circle")
                    .attr("cx",function(d,i){
                      return xScale(i);
                    })
                    .attr("cy",function(d){
                      return yScale(i);
                    })
                    .attr("r",10)
};
