import MainHeading from '../../components/MainHeading/mainHaeding'
import './subscriptionPlanPage.css'
import React from 'react'
import { Grid } from '@mui/material'
import { Typography } from '@mui/material';


export default function subscriptionPlanPage() {
    
  return (
    <div>
        <div className='heading' >
            <h >Payments Plan</h>
        </div>
        <div className='cards'>
        <Grid  container rowSpacing={5} columnSpacing={{ xs:20, sm: 30, md: 20 }} justifyContent={'center'}>
            <Grid item >
              <div class="card">

                  <p class="card-title">Individual Plan</p>
                  <h4 class="card-price">Rs. 5000</h4>
                  <h1 class="price-duration">per month</h1>

                  <Typography class="headlines" component="div">
                    <ul>
                      <li><span>Activity detection</span></li>
                      <li><span>Behavioural pattern detection</span></li>
                      <li><span>Smart portal</span></li>
                      <li><span>Assistance in nursing care workflow</span></li>
                    </ul>
                  </Typography>

                  <div className='center'>
                    <button class="button">Get Started</button>
                  </div>

              </div>
            </Grid>

            <Grid item >
              <div class="card">

                  <p class="card-title">Individual Plan</p>
                  <h4 class="card-price">Rs. 5000</h4>
                  <h1 class="price-duration">per month</h1>

                  <Typography class="headlines" component="div">
                    <ul>
                      <li><span>Activity detection</span></li>
                      <li><span>Behavioural pattern detection</span></li>
                      <li><span>Smart portal</span></li>
                      <li><span>Assistance in nursing care workflow</span></li>
                    </ul>
                  </Typography>

                  <div className='center'>
                    <button class="button">Get Started</button>
                  </div>

              </div>
            </Grid>



            <Grid item >
              <div class="card">

                  <p class="card-title">Individual Plan</p>
                  <h4 class="card-price">Rs. 5000</h4>
                  <h1 class="price-duration">per month</h1>

                  <Typography class="headlines" component="div">
                    <ul>
                      <li><span>Activity detection</span></li>
                      <li><span>Behavioural pattern detection</span></li>
                      <li><span>Smart portal</span></li>
                      <li><span>Assistance in nursing care workflow</span></li>
                    </ul>
                  </Typography>

                  <div className='center'>
                    <button class="button">Get Started</button>
                  </div>

              </div>
            </Grid>
        </Grid>
        </div>   
    </div>
  )
}

