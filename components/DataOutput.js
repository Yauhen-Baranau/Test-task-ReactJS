import React from 'react';

class DataOutput extends React.PureComponent {
    
   render() {
       let dataStrings = this.props.data!==null? this.props.data.map((v,i) => {
             return (
                 <li key={i}>{v}</li>
             )
        }) : null
        return (<div>
                    <ul>
                        {dataStrings? dataStrings : null}
                    </ul>
                </div>
        )
    }

}

export default DataOutput;