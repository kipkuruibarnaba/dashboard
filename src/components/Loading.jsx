import React from 'react'

class Loading extends React.Component{
    render() {
        return(
            <div className="text-center">
                <div className="lds-facebook">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <h5 className="card-category">
                    PLEASE WAIT...
                </h5>
            </div>
        )
    }
}
export default Loading;
