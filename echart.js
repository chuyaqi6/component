$(function(){
  var xData = [2000,2005,2010,2015,2020],
      yData = [6,9,8,8,7];
  var myChart = echarts.init($('.echart').get(0));
  var option = {
    title:{
      text:'JavaScript语言排名变化'
    },
    tooltip: {},
    /*legend:{
      data:['排名']
    },*/
    xAxis:{
      data:xData
    },
    yAxis:{},
    series:[{
      name:'排名',
      type:'line',
      data:yData
    }]
  };
  myChart.setOption(option);
});
