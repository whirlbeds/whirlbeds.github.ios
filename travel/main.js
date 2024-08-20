var uploadedDataURL = "china.json";

var myChart = echarts.init(document.getElementById('container'))
myChart.showLoading();


$.get(uploadedDataURL, function (geoJson) {
    var chart = echarts.registerMap('china', geoJson);
    myChart.hideLoading();
    let data = [
        {name: '', value: 80},//北京
        {name: ' ', value: 0},//天津
        {name: '  ', value: 50},//河北
        {name: '    ', value: 0},//山西
        {name: '     ', value: 0},//辽宁
        {name: '      ', value: 0},//吉林
        {name: '       ', value: 0},//黑龙江
        {name: '        ', value: 0},//上海
        {name: '         ', value: 50},//江苏
        {name: '          ', value: 0},//浙江
        {name: '           ', value: 0},//安徽
        {name: '            ', value: 60},//福建
        {name: '             ', value: 50},//江西
        {name: '              ', value: 0},//山东
        {name: '               ', value: 50},//河南
        {name: '                ', value: 0},//湖北
        {name: '                 ', value: 80},//湖南
        {name: '                  ', value: 100},//广东
        {name: '                   ', value: 0},//广西
        {name: '                    ', value: 70},//海南
        {name: '                     ', value: 0},//重庆
        {name: '                      ', value: 50},//四川
        {name: '                       ', value: 50},//贵州
        {name: '                        ', value: 0},//云南
        {name: '                         ', value: 0},//西藏
        {name: '                          ', value: 50},//陕西
        {name: '                           ', value: 70},//甘肃
        {name: '                            ', value: 0},//青海
        {name: '                             ', value: 0},//宁夏
        {name: '                              ', value: 0},//新疆
        {name: '                               ', value: 0},//台湾
        {name: '                                ', value: 60},//香港
        {name: '                                 ', value: 0},//澳门
    ];

    let option = {
        visualMap: { //critical
            min: 0,
            max: 100,
            // text: ['100', '0'],
            // realtime: false,
            // calculable: true,
            inRange: {
                color: ['rgb(197,241,161)','rgb(79, 94, 73)']
            }
        },
        geo: {
            map: 'china',
            aspectScale: 0.75, //长宽比
            zoom: 1.25,
            roam: false,
            itemStyle: {
                normal: {
                    opacity: 0.7,
                    borderWidth: 0.5,
                    color:'rgb(197,241,161)',
                    
                },
                emphasis: {
                    areaColor: 'rgb(176, 237, 105)',//hovering 面颜色
                    borderWidth: 2,
                    color: 'rgb(176, 237, 105)',//hovering 颜色
                },
            },
        },
        series: [
            {
                geoIndex: 0,
                name: 'china',
                type: 'map',
                coordinateSystem: 'geo',
                map: 'china',
                data: data
            }
        ],
    };
    myChart.setOption(option, true);
});
