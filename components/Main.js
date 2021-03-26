import React, { Fragment } from 'react';
import './Main.css';
import InputField from './InputField'
import DataOutput from './DataOutput'


class Main extends React.PureComponent {

    state = {
        loadedData:null,
        data: null,
        checkbox:false,
        
    }

    componentDidMount = () => {
      fetch("https://cors-anywhere.herokuapp.com/https://www.mrsoft.by/data.json",{'method':'GET'})
        .then( response => response.json() ) 
        .then( data => {this.setState({loadedData:data})} )
        .catch( error => { console.log(error); } )
    }
  
    cbGetDataAndSubstringFilter = (enteredData) => {
       let filterCode =  this.state.loadedData.data.filter(v=> { 
               if (this.state.checkbox){
                   return v.indexOf(enteredData) !== -1
                    } else {
                        return  v.indexOf(enteredData.toLowerCase()) !== -1 || v.indexOf(enteredData.toUpperCase()) !== -1
                    }
            }) 
           this.setState({data:filterCode})}

    cbGetDataAndFilterByWordLength = (enteredData) => {
         let filterCode = isNaN(enteredData)? null :  this.state.loadedData.data.filter(v=> v.length > parseInt(enteredData) )
         this.setState({data:filterCode})
     }

     cbCheckboxChange = (checked) => {
         this.setState({checkbox:checked})
     }

     render() {
         return (
                 <Fragment>
                      <InputField checkboxChange={this.cbCheckboxChange}
                                  getDataAndFilterByWordLength={this.cbGetDataAndFilterByWordLength}
                                  getDataAndSubstringFilter={this.cbGetDataAndSubstringFilter} 
                                  isDataloaded={ this.state.loadedData? true : false}
                        />
                      <DataOutput data={this.state.data}/>
                  </Fragment>
             )
    }

}

export default Main; 