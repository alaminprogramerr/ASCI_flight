import React from 'react'
import { Card, CardBody , FormGroup , Col, Row, Form, Input, Button ,  } from 'reactstrap'

const DomesticFlight = () => {
    return (
        <div className="col-md-10 offset-md-1 mt-3">
            <Card>
                <CardBody>
                    
                  <Form>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>DATE & TIME</label>
                          <Input
                            placeholder="Enter Date & time"
                            type="date"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>TAIL NUMBER</label>
                          <Input
                            placeholder="Enter Tail number"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>OPERATOR</label>
                          <Input
                            placeholder="Enter Opereator Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>ICAO</label>
                          <Input
                            placeholder="ICAO"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label> AIRCRAFT TYPE</label>
                          <Input
                            placeholder="Enter  Aircraft Type"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>CALLSIGN</label>
                          <Input
                            placeholder="CallSign"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                            <label>ORIGIN</label>
                          <select style={{background:"#27293d"}} className="form-control">
                              <option>Choose a  Origin</option>
                              <option value="item" >item</option>
                              <option value="item" >item</option>
                              <option value="item" >item</option>
                              <option value="item" >item</option>
                              <option value="item" >item</option>
                          </select>
                        </FormGroup>
                      </Col>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                            <label>DESTINATION</label>
                          <select style={{background:'#27293d'}} className="form-control">
                              <option>Choose a  Destination</option>
                              <option  value="item" >item</option>
                              <option  value="item" >item</option>
                              <option  value="item" >item</option>
                              <option  value="item" >item</option>
                              <option  value="item" >item</option>
                          </select>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button color="primary"  > Add Domestic  Flight</Button>
                  </Form>
                </CardBody>
                <p style={{visibility:"hidden" , lineHeight:"0"}}>
                ownload all the team icons you need. Choose between 17309 team icons in both vector SVG and PNG format. Related icons include group icons, people iconsownload all the team icons you need. Choose between 17309 team icons in both vector SVG and PNG format. Related icons include group icons, people icons
                ownload all the team icons you need. Choose between 17309 team icons in both vector SVG and PNG format. Related icons include group icons, people iconsownload all the team icons you need. Choose between 17309 team icons in both vector SVG and PNG format. Related icons include group icons, people icons
                ownload all the team icons you need. Choose between 17309 team icons in both vector SVG and PNG format. Related icons include group icons, people iconsownload all the team icons you need. Choose between 17309 team icons in both vector SVG and PNG format. Related icons include group icons, people icons
                </p>
            </Card>
        </div>
    )
}

export default DomesticFlight


// +DATE&TIME, //MENDETORY FILLUP CREATING TIME
// +TAIL NUMBER, //MENDETORY FILLUP CREATING TIME
// +OPERATOR, 
// +ICAO, 
// +AIRCRAFT TYPE, 
// +CALLSIGN, 
// +ORIGIN,
// +DESTINATION, 