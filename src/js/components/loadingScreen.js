/* File Name: loadingScreen.js                                              *
 * Description: Placeholder for loading data                                */

import React, { Component, StartupActions } from 'react'

class LoadingScreen extends Component {
  render() {   
    let style = {
      fontSize: 100
    }  

    let textStyle = {
        fontSize: 30
    }
    
    return (
      <div>
          <i style={style} className="fa fa-circle-o-notch fa-spin"/><br/>
          <p style={textStyle}>
            LOADING...
          </p>
      </div>
    )
  }
}

export default LoadingScreen