import React, { useState } from 'react';
import '../css/style.css';
import ChartComponent from './ChartComponent';

const useritem=
[
    {
        image : process.env.PUBLIC_URL + '/images/dashboard.png',
        content:'DashBoard'
    },
    {
        image : process.env.PUBLIC_URL + '/images/customers.png',
        content:'Customers'
    },
    {
        image : process.env.PUBLIC_URL + '/images/allreports.png',
        content:'All Reports'
    },
    {
        image : process.env.PUBLIC_URL + '/images/geography.png',
        content:'Geography'
    },
    {
        image : process.env.PUBLIC_URL + '/images/conversations.png',
        content:'Conversations'
    },
    {
        image : process.env.PUBLIC_URL + '/images/deals.png',
        content:'Deals'
    },
    {
        image : process.env.PUBLIC_URL + '/images/export.png',
        content:'Export'
    }
]


const Section=()=>
{
    return(
<>
     <div className='section'>
          
          <div className='sidebar'>

            <div className='logo'>
            <img src={process.env.PUBLIC_URL + '/images/Logomark.png'} alt=""/>
                <h3>OrangeFarm</h3>
            </div>

            <div className='items'>
                <div className='search'>
                    <img src={process.env.PUBLIC_URL + '/images/search.png'} alt=""/>
                    <h3>Search</h3>
                </div>
                <ul>

                      {useritem.map((item, index) => (
                      <li key={index} className='useritem'>
                      <img src={item.image} alt={`Item ${index + 1}`} />
                       <h3>{item.content}</h3>
                      </li>
                       ))}
                </ul>
            </div>

            <div className='users'>
                 
                 <div className='profile'>
                    <img src={process.env.PUBLIC_URL + '/images/avatar.png'} alt=""/>  
                      <div className='info'>
                          <h3>Gustavo Xavier</h3>
                          <p>Admin</p>
                      </div>
                 </div>

                 <div className='useritem'>
                    <img src={process.env.PUBLIC_URL + '/images/setting.png'} alt=""/>
                    <h3> Settings</h3>
                 </div>
                 <div className='useritem'>
                    <img src={process.env.PUBLIC_URL + '/images/logout.png'} alt=""/>
                    <h3 style={{color:'#B01212'}}> Log out</h3>
                 </div>
            </div>
          </div>

          <div className='right'>

            <div className='upper-section'>

                <div className='box1'>
                   
                   <h1 className='heading'>Revenues</h1>
                   <h1 className='percentage'>15%</h1>
                   <p className='content'>Increase compared to last week</p>
                   <div className='box1-info content'>
                        <h3>Revenues Report</h3>
                        <img src={process.env.PUBLIC_URL + '/images/arrow.png'} alt=""/>
                   </div>
                </div>

                <div className='box1'>
                   <h1 className='heading'>Lost Deals</h1>
                   <h1 className='percentage'>4%</h1>
                   <p className='content'>You closed 96 out of 100 deals</p>
                   <div className='box1-info content'>
                        <h3>All Deals</h3>
                        <img src={process.env.PUBLIC_URL + '/images/arrow.png'} alt=""/>
                   </div>
                </div>

                <div className='box1 extraprop'>
                    <h1 className='heading'>Quarter Goal</h1>
                    <h1 className='goal-percent'>84%</h1>
                    <div className='box1-info content pos'>
                        <h3>All Goals</h3>
                        <img src={process.env.PUBLIC_URL + '/images/arrow.png'} alt=""/>
                   </div>
                </div>

            </div>

            <div className='middle-section'>
                <div className='left-mid-section'>
                    <div className='first-part'>
                         <h1 className='heading'>Customers</h1>
                         <p className='content'>Sort by <span>Newest  <img src={process.env.PUBLIC_URL + '/images/downerror.png'} alt=""/>  </span></p>
                    </div>

                    <ul>
                        <li className='profile mid-section-profile'>
                           <img src={process.env.PUBLIC_URL + '/images/avatar.png'} alt=""/>  
                           <div className='info mid-section-info'>
                            <h3>Chris Friedkly</h3>
                             <p>Supermarket Villanova</p>
                          </div>
                        </li>

                        <li className='profile mid-section-profile color'>
                           <img src={process.env.PUBLIC_URL + '/images/avatar.png'} alt=""/>  
                           <div className='info mid-section-info'>
                            <h3>Maggie Johnson</h3>
                             <p>Oasis Organic Inc.</p> 
                          </div>
                          <img className="putend" src={process.env.PUBLIC_URL + '/images/allimage.png'} alt=""/> 
                        </li>

                        <li className='profile mid-section-profile'>
                           <img src={process.env.PUBLIC_URL + '/images/avatar.png'} alt=""/>  
                           <div className='info mid-section-info'>
                            <h3>Gael Harry</h3>
                             <p>New York Finest Fruits</p>
                          </div>
                        </li>

                        <li className='profile mid-section-profile'>
                           <img src={process.env.PUBLIC_URL + '/images/avatar.png'} alt=""/>  
                           <div className='info mid-section-info'>
                            <h3>Jenna Sullivan</h3>
                             <p>Walmart</p>
                          </div>
                        </li>
                    </ul>

                    <div className='box1-info content' style={{bottom:'6%'}}>
                        <h3>All Customers</h3>
                        <img src={process.env.PUBLIC_URL + '/images/arrow.png'} alt=""/>
                   </div>

                </div>

                <div className='right-mid-section'>
                     
                      <div className='growth-section'>
                          <ChartComponent />
                      </div>

                      <div className='growth-res-section'>
                            
                            <div className='growth-res-box'>
                                 <h3>Top month</h3>
                                 <div>
                                 <h1>November</h1>
                                 <h3 id='changecolor'>2019</h3>
                                 </div>
                            </div>

                            <div className='growth-res-box'>
                                 <h3>Top year</h3>
                                 <div>
                                 <h1>2023</h1>
                                 <p className='content'>96K sold so far</p>
                                 </div>
                            </div>

                            <div className='growth-res-box'>
                                 <h3>Top buyer</h3>
                                 <li className='profile mid-section-profile' style={{display:'block', margin:'0'}}>
                                   <img src={process.env.PUBLIC_URL + '/images/avatar.png'} alt=""/>  
                                   <div className='info mid-section-info last-section-info'>
                                     <p>Gael Harry</p>
                                     <p>New York Finest Fruits</p>
                                   </div>
                                 </li>
                            </div>
                      </div>
                </div>
            </div>

            <div className='lower-section'>
               <div className='box1 lower-box'>
                   
                   <h1 className='heading'>Chats</h1>
                   <p className='content'>2 unread messages</p>
                   <div className='images'>
                       <img className='color' src={process.env.PUBLIC_URL + '/images/avatar.png'} alt=""/>  
                       <img className='color' src={process.env.PUBLIC_URL + '/images/avatar.png'} alt=""/>  
                       <img src={process.env.PUBLIC_URL + '/images/avatar.png'} alt=""/>  
                       <img src={process.env.PUBLIC_URL + '/images/avatar.png'} alt=""/>  
                   </div>
                </div>

                <div className='lower-second-box'>
                   
                   <h1 className='heading'>Top States</h1>
                   <ul>
                      <li style={{width:'100%'}}>
                          <h1 className='heading'>NY</h1>
                          <p className='content'>120k</p>
                      </li>

                      <li style={{width:'85%'}}>
                          <h1 className='heading'>MA</h1>
                          <p className='content'>80k</p>
                      </li>

                      <li style={{width:'75%'}}>
                          <h1 className='heading'>NH</h1>
                          <p className='content'>70k</p>
                      </li>

                      <li style={{width:'70%'}}>
                          <h1 className='heading'>OR</h1>
                          <p className='content'>50k</p>
                      </li>
                   </ul>
                </div>

                <div className='box1 last-box'>
                   
                   <h1 className='heading'>New Deals</h1>
                   <ul>
                      <li className='lower-box-last'>
                          <img src={process.env.PUBLIC_URL + '/images/plus.png'} alt=""/>
                          <p className='content'>Fruit2Go</p>
                      </li>

                      <li className='lower-box-last'>
                          <img src={process.env.PUBLIC_URL + '/images/plus.png'} alt=""/>
                          <p className='content'>Marshall's MKT</p>
                      </li>

                      <li className='lower-box-last'>
                          <img src={process.env.PUBLIC_URL + '/images/plus.png'} alt=""/>
                          <p className='content'>CCNT</p>
                      </li>

                      <li className='lower-box-last'>
                          <img src={process.env.PUBLIC_URL + '/images/plus.png'} alt=""/>
                          <p className='content'>Joana Mini-market</p>
                      </li>

                      <li className='lower-box-last'>
                          <img src={process.env.PUBLIC_URL + '/images/plus.png'} alt=""/>
                          <p className='content'>Little Brazil Vegan</p>
                      </li>

                      <li className='lower-box-last'>
                          <img src={process.env.PUBLIC_URL + '/images/plus.png'} alt=""/>
                          <p className='content'>Target</p>
                      </li>

                      <li className='lower-box-last'>
                          <img src={process.env.PUBLIC_URL + '/images/plus.png'} alt=""/>
                          <p className='content'>Organic Place</p>
                      </li>

                      <li className='lower-box-last'>
                          <img src={process.env.PUBLIC_URL + '/images/plus.png'} alt=""/>
                          <p className='content'>Morello's</p>
                      </li>
                   </ul>
                </div>
            </div>
          </div>
     </div>
</>
    );
}

export default Section;

