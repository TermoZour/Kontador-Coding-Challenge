import React from 'react'

import {Group} from '@visx/group';
import {Text} from '@visx/text';
import {Bar} from '@visx/shape';
import {scaleLinear, scaleBand} from '@visx/scale';

function PostsGraph(props) {
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  let data = props.d3_data.map(function (postPerMonth, index) {
    return {'month': months[index], 'posts': postPerMonth}
  })

  // Define the graph dimensions and margins
  const width = 700;
  const height = 500;
  const margin = {top: 20, bottom: 20, left: 20, right: 20};

  // Then we'll create some bounds
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  // We'll make some helpers to get at the data we want
  const x = d => d.month;
  const y = d => +d.posts * 2;

  // And then scale the graph by our data
  const xScale = scaleBand({
    range: [0, xMax],
    round: true,
    domain: data.map(x),
    padding: 0.6,
  });
  const yScale = scaleLinear({
    range: [yMax, 0],
    round: true,
    domain: [0, Math.max(...data.map(y))],
  });

  // Compose together the scale and accessor functions to get point functions
  const compose = (scale, accessor) => data => scale(accessor(data));
  const xPoint = compose(xScale, x);
  const yPoint = compose(yScale, y);

  return (
    <svg width={width} height={height} style={{padding: '1rem'}}>
      {data.map((d, i) => {
        const barHeight = yMax - yPoint(d) - 50;
        return (
          <Group key={`bar-${i}`}>
            <Bar
              x={xPoint(d)}
              y={yMax - barHeight}
              height={barHeight}
              width={xScale.bandwidth()}
              fill="#008080"
            />
            <Text
              x={xScale(x(d))}
              y={yMax - barHeight}
              fill="white"
              fontSize={".8em"}
              // dx={"-.2em"}
              dy={"-.33em"}
            >
              {d.posts}
            </Text>
            <Text
              x={xScale(x(d))}
              y={yMax}
              textAnchor="middle"
              fill="white"
              dx={".32em"}
              dy={"1em"}
              fontSize={".8em"}
            >
              {d.month}
            </Text>
          </Group>
        );
      })}
    </svg>
  )
}

export default PostsGraph