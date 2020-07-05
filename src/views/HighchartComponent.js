import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import crossfilter from 'crossfilter2';
import axios from 'axios';
import moment from 'moment'
import {MONTH_NAME} from '../utils/constants'

// 1 share=100
// 50 Cou ,m.nt 
// today date : 1 shre: 200
// per share 100 Pro 

//  50*100 profit total



class HighchartComponent extends React.Component {
    state = {
        data: []
    }
    componentDidMount() {
        // this.props.getTableData();
        axios.get(`https://api.mfapi.in/mf/146787`)
            .then(res => {
               let currentYearData=[]
               res.data.data.map((i,index)=>{
                let year=(i.date.toString()).match(/\d{4}$/)[0]
                if(year=="2020")
                currentYearData.push(res.data.data[index])

               })
                this.setState({ data:currentYearData });
            })
    }
    render() {
        //console.log( "09-09-2020".substring(date.lastIndexOf("-")+1);)
        var dataset = crossfilter(this.state.data);
       
        var state = dataset.dimension(d => {
            debugger;
            const beginDate = d.date
            const date = moment(beginDate, 'DD/MM/YYYY');            
            const month = date.format('M');
            let a=MONTH_NAME[month]
            return a
        })
        //var state = dataset.dimension(d => d.date)
        var total_cases_group1 = state.group().reduceSum(d => d.nav)
    //    var total_cases_group1 = state.group().reduceSum(d => {
    //       // let temp=d.nav-1
    //        let profit=(50*(d.nav))/1
    //        return profit
    //    })
        function prepareData1(groups) {
            var categories = [];
            var data = [];
            var gdata = groups.all();
            gdata.forEach(d => {
                categories.push(d.key);
                data.push(d.value);
            });   
          
            return {
                categories: categories,
                data: data
            }
        }
       // console.log(total_cases_group1)
        var tempObject1 = prepareData1(total_cases_group1);

        let options = {
           
            title: {
                text: 'Monthly NAV Values',
                color : 'white',
                fill : 'white'
            },

            xAxis: {
                categories: tempObject1.categories,
                crosshair: true,
                title: {
                    text: "Months",
                    style: {
                        color: 'grey'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'NAV Value',
                    style: {
                        color: 'grey'
                    }
                }
            },
            series: [{
                name: "",
                data: tempObject1.data,
                
            }],

            chart: {
                type: 'column',
                borderWidth: 2,
                borderColor: "",
              //  borderRadius: 15,
                width: 700,
                height: 400, 
                backgroundColor : '#1B1F38',                
            }


        }
        return (
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
                constructorType={'chart'}
                autoid="companycode-chart"
            />
        )
    }

}


export default HighchartComponent;

