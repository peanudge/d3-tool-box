import * as d3 from "d3";


d3.select(".app")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500)
    .select(function (d, i, nodes) {
        console.log(nodes);
        return nodes[i];
    })
    .style("border", "1px solid black")




