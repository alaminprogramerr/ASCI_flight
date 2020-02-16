import EditModal from './EditModal'
import React from "react";
import './modal.css'
import EditDemosticFlight from './EditDomesticFlight'
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button
} from "reactstrap";
import { useState } from "react";
import { useEffect } from "react";
const tipStyle={
    color: "white",
    fontSize: "10px",
    background: "#e14eca",
    borderRadius: "3px",
    padding: "0  7px",
}
const EditFlight =()=>{
  const [internationalFlieht , setInternationalFlieht]=useState([
      
    {addedTime:"12:50" ,type:"uncompleted" ,tailNumber:"123848" , time:"Sun Feb 16 2020 00:12:53 GMT-0600", id:"98124790238"},
    {addedTime:"12:50" ,type:"completed" ,tailNumber:"123848" , time:"Sun Feb 16 2020 00:12:53 GMT-0600", id:"98124790238"},
    {addedTime:"12:50" ,type:"uncompleted" ,tailNumber:"123848" , time:"Sun Feb 16 2020 00:12:53 GMT-0600", id:"98124790238"},
    {addedTime:"12:50" ,type:"completed" ,tailNumber:"123848" , time:"Sun Feb 16 2020 00:12:53 GMT-0600", id:"98124790238"},
    {addedTime:"12:50" ,type:"uncompleted" ,tailNumber:"123848" , time:"Sun Feb 16 2020 00:12:53 GMT-0600", id:"98124790238"},
    {addedTime:"12:50" ,type:"uncompleted" ,tailNumber:"123848" , time:"Sun Feb 16 2020 00:12:53 GMT-0600", id:"98124790238"}
  
    ])
    const [domesticFlight , setDomesticFlieht]=useState([
        
      {addedTime:"12:50" ,type:"uncompleted" ,tailNumber:"123848" , time:"Sun Feb 16 2020 00:12:53 GMT-0600", id:"98124790238"},
      {addedTime:"12:50" ,type:"completed" ,tailNumber:"123848" , time:"Sun Feb 16 2020 00:12:53 GMT-0600", id:"98124790238"},
      {addedTime:"12:50" ,type:"uncompleted" ,tailNumber:"123848" , time:"Sun Feb 16 2020 00:12:53 GMT-0600", id:"98124790238"},
      {addedTime:"12:50" ,type:"completed" ,tailNumber:"123848" , time:"Sun Feb 16 2020 00:12:53 GMT-0600", id:"98124790238"},
      {addedTime:"12:50" ,type:"uncompleted" ,tailNumber:"123848" , time:"Sun Feb 16 2020 00:12:53 GMT-0600", id:"98124790238"},
      {addedTime:"12:50" ,type:"uncompleted" ,tailNumber:"123848" , time:"Sun Feb 16 2020 00:12:53 GMT-0600", id:"98124790238"}
    
      ])
    useEffect(()=>{
    })
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardBody>
                  <div className="internationalFlight">
                    <div>
                      <h1 style={{color:"#e14eca", textTransform:"capitalize", fontWeight:"600"}}>International Flight <span style={{fontSize:"14px"}}>( All )</span></h1>
                    </div>
                    <Table className="tablesorter" responsive>
                      <thead className="text-primary">
                        <tr>
                          <th>Added time</th>
                          <th>Tail Number </th>
                          <th>Time  </th>
                          <th>Flight ID </th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {internationalFlieht.map((single, index)=>{
                       return(
                          <tr>
                            <td> {single.addedTime} </td>
                            <td > {single.tailNumber} </td>
                            <td > {single.time} </td>
                            <td > {single.id} <span style={tipStyle}> {single.type} </span> </td>
                            <td > <div class="dropdown">
                                <a cla ss="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  <Button color="primary" size="sm">Action</Button>
                                </a>

                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink" style={{background:"#e14eca" }}>
                                  <a class="dropdown-item " style={{color:"white"}} href="#">
                                    <EditModal flight={single}  />
                                  </a>
                                  <a class="dropdown-item " style={{color:"white"}} href="#">Delete</a>
                                </div>
                              </div>
                            </td>
                          </tr> 
                       )
                        })}
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
            </Row>
            <Row>
            <Card>
                <CardBody>
                  <div>
                    <div>
                      <h1 style={{color:"#e14eca", textTransform:"capitalize", fontWeight:"600"}}>Demostic Flight <span style={{fontSize:"14px"}}> ( All )</span></h1>
                    </div>
                    <Table className="tablesorter" responsive>
                      <thead className="text-primary">
                        <tr>
                          <th>Added time</th>
                          <th>Tail Number </th>
                          <th>Time  </th>
                          <th>Flight ID </th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {internationalFlieht.map((single, index)=>{
                       return(
                          <tr>
                            <td> {single.addedTime} </td>
                            <td > {single.tailNumber} </td>
                            <td > {single.time} </td>
                            <td > {single.id} <span style={tipStyle}> {single.type} </span> </td>
                            <td > <div class="dropdown">
                                <a cla ss="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  <Button color="primary" size="sm">Action</Button>
                                </a>

                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink" style={{background:"#e14eca" }}>
                                  <a class="dropdown-item " style={{color:"white"}} href="#">
                                    <EditDemosticFlight flight={single}/>
                                  </a>
                                  <a class="dropdown-item " style={{color:"white"}} href="#">Delete</a>
                                </div>
                              </div>
                            </td>
                          </tr> 
                       )
                        })}
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Row>
        </div>
      </>
    );
}

export default EditFlight;
