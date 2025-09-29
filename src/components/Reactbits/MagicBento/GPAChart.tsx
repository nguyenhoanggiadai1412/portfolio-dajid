import ReactECharts from "echarts-for-react";
import * as echarts from "echarts/core";

function GPAChart() {
  const option = {
    series: [
      {
        type: "gauge",
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 4,
        splitNumber: 4,
        progress: {
          show: true,
          roundCap: true,
          width: 18,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              { offset: 0, color: "#58D9F9" },
              { offset: 0.5, color: "#33ffff" },
              { offset: 1, color: "#7CFFB2" },
            ]),
          },
        },
        axisLine: {
          roundCap: true,
          lineStyle: {
            width: 18,
            color: [[1, "#eee"]],
          },
        },
        pointer: {
          icon: "path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z",
          length: "55%",
          width: 12,
          offsetCenter: [0, "5%"],
        },
        axisTick: {
          splitNumber: 2,
          lineStyle: {
            width: 2,
            color: "#999",
          },
        },
        splitLine: {
          length: 2,
          lineStyle: {
            width: 1,
            color: "#999",
          },
        },
        axisLabel: {
          distance: 30,
          color: "#999",
          fontSize: 12,
        },
        title: {
          show: true,
        },
        detail: {
          backgroundColor: "#fff",
          borderColor: "#999",
          borderWidth: 2,
          width: "80%",
          lineHeight: 20,
          height: 18,
          borderRadius: 8,
          offsetCenter: [0, "35%"],
          valueAnimation: true,
          formatter: (value: number) => `{value|${value.toFixed(2)}}`,
          rich: {
            value: {
              fontSize: 14,
              fontWeight: 700,
              color: "#777",
            },
          },
        },
        data: [
          {
            value: 3.34,
          },
        ],
      },
    ],
  };

  return (
    <div>
      <ReactECharts option={option} style={{ height: 200 }} />
    </div>
  )
}
export default GPAChart;
