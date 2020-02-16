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
                    {/*  thi is  exit and entry way point */}
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                            <label>ENTRY WAYPOINT</label>
                          <select style={{background:"#27293d"}} className="form-control">
                              <option style={{ color:"white"}}>Choose a Entry Way Poing</option>
                              <option value="EPLAS">EPLAS</option>
                              <option value="ANTAX">ANTAX</option>
                              <option value="AVAGI">AVAGI</option>
                              <option value="RUDOL">RUDOL</option>
                              <option value="ALEMU">ALEMU</option>
                              <option value="AVEDI">AVEDI</option>
                              <option value="MANDERA">MANDERA</option>
                              <option value="ENABO">ENABO</option>
                              <option value="KESOM">KESOM</option>
                              <option value="GETAT">GETAT</option>
                              <option value="ITMAR">ITMAR</option>
                              <option value="NETAR">NETAR</option>
                              <option value="ANVET">ANVET</option>
                              <option value="XABON">XABON</option>
                              <option value="AMSAD">AMSAD</option>
                              <option value="KISAK">KISAK</option>
                              <option value="ITSIR">ITSIR</option>
                              <option value="AVIGO">AVIGO</option>
                              <option value="ELAVA">ELAVA</option>
                              <option value="UVUKO">UVUKO</option>
                              <option value="EPTEL">EPTEL</option>
                              <option value="LUDOL">LUDOL</option>
                              <option value="AVUNO">AVUNO</option>
                              <option value="UTATA">UTATA</option>
                              <option value="APDIK">APDIK</option>
                              <option value="EVATO">EVATO</option>
                              <option value="XAKRI">XAKRI</option>
                              <option value="MAGAD">MAGAD</option>
                              <option value="PARIN">PARIN</option>
                              <option value="APLOG">APLOG</option>
                              <option value="AKUMU">AKUMU</option>
                              <option value="ALKON">ALKON</option>
                              <option value="GONGU">GONGU</option>
                              <option value="PATAR">PATAR</option>
                          </select>
                        </FormGroup>
                      </Col>
                      
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                            <label>EXIT WAYPOINT</label>
                          <select style={{background:"#27293d"}} className="form-control">
                              <option style={{ color:"white"}}>Choose a Exit Way Poing</option>
                              <option value="EPLAS">EPLAS</option>
                              <option value="ANTAX">ANTAX</option>
                              <option value="AVAGI">AVAGI</option>
                              <option value="RUDOL">RUDOL</option>
                              <option value="ALEMU">ALEMU</option>
                              <option value="AVEDI">AVEDI</option>
                              <option value="MANDERA">MANDERA</option>
                              <option value="ENABO">ENABO</option>
                              <option value="KESOM">KESOM</option>
                              <option value="GETAT">GETAT</option>
                              <option value="ITMAR">ITMAR</option>
                              <option value="NETAR">NETAR</option>
                              <option value="ANVET">ANVET</option>
                              <option value="XABON">XABON</option>
                              <option value="AMSAD">AMSAD</option>
                              <option value="KISAK">KISAK</option>
                              <option value="ITSIR">ITSIR</option>
                              <option value="AVIGO">AVIGO</option>
                              <option value="ELAVA">ELAVA</option>
                              <option value="UVUKO">UVUKO</option>
                              <option value="EPTEL">EPTEL</option>
                              <option value="LUDOL">LUDOL</option>
                              <option value="AVUNO">AVUNO</option>
                              <option value="UTATA">UTATA</option>
                              <option value="APDIK">APDIK</option>
                              <option value="EVATO">EVATO</option>
                              <option value="XAKRI">XAKRI</option>
                              <option value="MAGAD">MAGAD</option>
                              <option value="PARIN">PARIN</option>
                              <option value="APLOG">APLOG</option>
                              <option value="AKUMU">AKUMU</option>
                              <option value="ALKON">ALKON</option>
                              <option value="GONGU">GONGU</option>
                              <option value="PATAR">PATAR</option>
                          </select>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button  color="primary" > Add International Flight</Button>
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
// +ORIGIN,
// +DESTINATION,

// +ENTRY WAYPOINT 
// +EXIT WAYPOINT 


// EPLAS
// ANTAX
// AVAGI
// RUDOL
// ALEMU
// AVEDI
// MANDERA
// ENABO
// KESOM
// GETAT
// ITMAR
// NETAR
// ANVET
// XABON
// AMSAD
// KISAK
// ITSIR
// AVIGO
// ELAVA
// UVUKO
// EPTEL
// LUDOL
// AVUNO
// UTATA
// APDIK
// EVATO
// XAKRI
// MAGAD
// PARIN
// APLOG
// AKUMU
// ALKON
// GONGU
// PATAR
