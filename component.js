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
  var data = [
    ['Java','1','降','-0.01%'],
    ['C','2','升','+2.44%'],
    ['Python','3','升','+1.41%'],
    ['C++','4','降','-2.58%'],
    ['C#','5','升','+2.07%'],
    ['Visual Basic .NET','6','降','-1.17%'],
    ['JavaScript','7','降','-0.85%']
  ];
  var container1 = $('.excel');
  var hot = new Handsontable(container1.get(0),{
    data:data,
    contextMenu:true,
    manualRowResize : true,     // 允许行拖动  
    manualColumnResize : true,  // 允许列拖动 
    rowHeaders: false,
    className:'htCenter',
    colHeaders:[
      '语言',
      '排名',
      '升降',
      '变化幅度'
    ]
  });
  return hot;
})
