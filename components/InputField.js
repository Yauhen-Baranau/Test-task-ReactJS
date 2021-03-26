import React from 'react';

class InputField extends React.PureComponent {
    state = {
        enteredData:null
    }

    handleChange = (EO) => {
        EO=EO||window.event;
        this.setState({enteredData : EO.target.value})
    }

    substringFilter = () =>{
        this.props.getDataAndSubstringFilter(this.state.enteredData)
    }

    numberFilter = () => {
           this.props.getDataAndFilterByWordLength(this.state.enteredData)
    }

    checkboxHandleChange = (EO) => {
        EO=EO||window.event;
        this.props.checkboxChange(EO.target.checked)
    }
    

    render() {
        return (
                <div>
                   <input onChange={this.handleChange} type={'text'}></input> 
                    case sensitivity:<input onChange={this.checkboxHandleChange} type={'checkbox'} defaultChecked={false}/>
                  <div>
                  <button disabled={!this.props.isDataloaded} onClick={this.numberFilter}>filter by word length</button>
                   <button disabled={!this.props.isDataloaded} onClick={this.substringFilter}>substring filter</button>
                 </div>  
                       {
                           !this.props.isDataloaded? 
                            <p>data loading...</p>
                            : null
                       }
                 </div>
        )
    }

}

export default InputField;