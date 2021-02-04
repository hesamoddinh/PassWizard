import React, { Component } from 'react'
import Footer from './Footer'
import { Row,Card, CardTitle, CardText,Col } from 'reactstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './/Header';
import {Modal, ModalHeader,ModalBody} from 'reactstrap';

import {Link, withRouter ,Switch} from 'react-router-dom';


import globe from '../assets/images/globe.png';
import email from '../assets/images/email.png';
import members from '../assets/images/members.png';
import barchart from '../assets/images/Barchart.png';
import data from '../assets/images/data.png';
import performance from '../assets/images/performance.png';
import BarChart from './BarChart'
import PieChart from './PieChart'
import LineChart from './LineChart'
import BarChartSecond from './BarChartSecond'
import dataVisualization from '../assets/images/dataVisualization.jpg'




export default class Visualization extends Component {
 
    render() {
        return (
                <div className="container">
                    {/* <Row className="justify-content-sm-start mt-3 "> */}
                   
                    <div class="container my-4">
                        <div class="">

                            <div class="card-body">
                                <p class="card-text">
                                    <h3 ><strong>You can find some charts here. Let's have a look for better perspective</strong></h3>
                                </p>
                            </div>
                        </div>
                    </div>

  

                    <div class="row">
                        <div class="col-sm-6 mt-4">
                            <div class="card">
                        
                                <div class="card-body">
                                    <div >
                                    <LineChart />

                                    </div>                    
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 mt-4">
                            <div class="card">
                        
                                <div class="card-body">
                                    <div>
                                        <BarChartSecond/>
                                    </div>                   
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-6 mt-4">
                            <div class="card">
                    
                                <div class="card-body">
                                    <div>
                                        <PieChart />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 mt-4">
                            <div class="card">
                    
                                <div class="card-body">
                                    <div>
                                    <BarChart/>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               
                
           
                    <br></br>
                </div>
        )
    }
}