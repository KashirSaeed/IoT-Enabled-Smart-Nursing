
import './SubscriptionPlanPage.css'
import React from 'react'
import { Grid } from '@mui/material'
import { Typography } from '@mui/material';
import Footer from '../../Components/Footer/Footer';
import { useNavigate } from 'react-router-dom';





export default function SubscriptionPlanPage() {

  const navigate = useNavigate();
  
  function GoWith(plan_type){
    navigate(`/sign-up/${plan_type}`)
  }
    
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
                    <button class="button" onClick={()=>GoWith("Admin")}>Go With.</button>
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
                    <button class="button" onClick={()=>GoWith("Admin")}>Go With.</button>
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
                    <button class="button" onClick={()=>GoWith("Admin")}>Go With.</button>
                  </div>

              </div>
            </Grid>
        </Grid>
        </div>   
        <Footer />
    </div>

  )
}

