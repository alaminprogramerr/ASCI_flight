import React from 'react'
import { Card, CardBody , FormGroup ,Table, Col, Row, Form, Input, Button ,  } from 'reactstrap'
import { useState } from 'react'

const GenereateInvoice = () => {
    const [generatodInvoice , setGeneratodInvoice]= useState([
        {startDate:"02-16-2020" , endDate:"02-28-2020" , operator:"Brad", ID:"84098234"}, 
        {startDate:"02-16-2020" , endDate:"02-28-2020" , operator:"Brad", ID:"84098234"}, 
        {startDate:"02-16-2020" , endDate:"02-28-2020" , operator:"Brad", ID:"84098234"}, 
        {startDate:"02-16-2020" , endDate:"02-28-2020" , operator:"Brad", ID:"84098234"}, 
        {startDate:"02-16-2020" , endDate:"02-28-2020" , operator:"Brad", ID:"84098234"}, 
        {startDate:"02-16-2020" , endDate:"02-28-2020" , operator:"Brad", ID:"84098234"}, 
    ])
    return (
        <>
        <div className="content mt-5">
            <div className="col-md-8 offset-md-2 mt-5">
            <Row>
            <Card>
                <CardBody>
                <h3 style={{color:"#e14eca", textTransform:"capitalize", fontWeight:"500"}}>Genereate Invoice </h3>
                    
                  <Form>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>START DATE</label>
                          <Input
                            placeholder="Enter Start Date"
                            type="date"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>END DATE</label>
                          <Input
                            placeholder="Enter End Date"
                            type="date"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="12">
                        <FormGroup>
                          <label>OPERATOR</label>
                          <Input
                            placeholder="Enter Opereator Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button color="primary"  > Add Domestic  Flight</Button>
                  </Form>
                </CardBody>
            </Card>
            </Row>
            </div>
            <div>
                
          <Row>
            <Col md="12" className="mt-5">
              <Card>
                <CardBody>
                  <div className="internationalFlight">
                    <div>
                      <h1 style={{color:"#e14eca", textTransform:"capitalize", fontWeight:"600"}}>Generated Invoice <span style={{fontSize:"14px"}}>( All )</span></h1>
                    </div>
                    <Table className="tablesorter" responsive>
                      <thead className="text-primary">
                        <tr>
                          <th>Start time</th>
                          <th>End Time </th>
                          <th>Operator  </th>
                          <th>Invoice ID </th>
                        </tr>
                      </thead>
                      <tbody>
                        {generatodInvoice.map((single, index)=>{
                       return(
                          <tr>
                            <td> {single.startDate} </td>
                            <td > {single.endDate} </td>
                            <td > {single.operator} </td>
                            <td > {single.ID}</td>
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
            </div>
        </div>
        </>
    )
}

export default GenereateInvoice