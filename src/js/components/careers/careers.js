/* File Name: careers.js                                              *
 * Description: Displays all open positions                           */

import React, { Component, StartupActions } from 'react'
import CareerData from '../../../data/careers.json'

import Grid from '@material-ui/core/Grid';

import '../../../stylesheets/careers.scss'

import CareerTemplate from './careerTemplate'
import PageBanner from '../pageBanner'

class Careers extends Component {
  // Displaying all careers
  render(props) {    
    return (
      <div>
        <PageBanner
          header="CAREERS"
          image="house4.jpg"
        />
        <div className="pageContent careersComponent">
          <div className="boxContainer">
            <Grid container spacing={24}>
              {CareerData.map((careerDetail, index) => {
                return (
                  <CareerTemplate
                    faClass="fas fa-user-tie fa-5x"
                    description={careerDetail.description}
                    requirements={careerDetail.requirements}
                    header={careerDetail.jobtitle}
                  />
                )
              })}
            </Grid>
          </div>
        </div>
      </div>
    )
  }
}

export default Careers