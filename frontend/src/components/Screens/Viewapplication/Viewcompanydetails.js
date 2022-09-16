import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Alert, Button, Card, Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import './Viewcompany.css'
import Adminheader from '../../header/Adminheader'
import SuccessMessage from '../../ErrorMessage'

const Viewcompanydetails = () => {
     let {companyid}=useParams()
    const [process, setProcess] = useState('')
    const [approve, setApprove] = useState('')
    const [reject,setReject]=useState('')
    const [confirm,setConfirm]=useState('')
      const [state,setState]=useState({
       name:'',
            email:'',
            address:'', city:'', state:'', number:'',
            company:'', team:'', product:'',
            problem:'', solution:'', proposition:'', competators:'',
            revenue:'', potential:'', plan:'', type:'', proposel:''
      })
      
      const getCompanydate=async(companyid)=>{
           const getcompanydata=await axios.get(`/api/admins/viewcompany/${companyid}`)
           console.log(companyid);
           console.log(getcompanydata.data);  
           setState(getcompanydata.data)  
      }

      const setProcessing=async(companyid)=>{
          const setprocess = await axios.put(`/api/admins/processStatus/${companyid}`)
          console.log(setprocess);
          setProcess(setprocess)
      }
    const setApproved = async (companyid) => {
        const setapprove = await axios.put(`/api/admins/updatestatus/${companyid}`)
        console.log(setapprove);
        setApprove(setapprove)
    }
    const setRejected = async (companyid) => {
        const setreject = await axios.put(`/api/admins/rejectstatus/${companyid}`)
        console.log(setreject);
        setReject(setreject)
    }
      useEffect(()=>{
         getCompanydate(companyid)
          

      },[])

  return (
      <>
         <Adminheader/>
          <div style={{ marginTop: '3%' }} >
              <div className="d-flex justify-content-around">
                  <Container>
                      <Card style={{ width: "100%", backgroundColor: '#f7f7f7' }}>
                          <Card.Body>
                              <div className="row">
                                  <div className="col-md-3">
                                      <Card.Title>Company Name:</Card.Title>
                                      <Card.Text>
                                        {state.company}  
                                      </Card.Text>
                                  </div>
                                  <div className="col-md-3">
                                      <Card.Title>Address:</Card.Title>
                                      <Card.Text>
                                         {state.address}
                                      </Card.Text>
                                  </div>
                                  <div className="col-md-3">
                                      <Card.Title>City:</Card.Title>
                                      <Card.Text>
                                         {state.city}
                                      </Card.Text>
                                  </div>
                                  <div className="col-md-3">
                                      <Card.Title>State:</Card.Title>
                                      <Card.Text>
                                         {state.state} 
                                      </Card.Text>
                                  </div>
                              </div>
                              <br></br>
                              <div style={{ textAlign: "center" }}>
                                  {/* <h2> Description</h2> */}
                              </div>
                              <div className="row">
                                  <div className="col-md-6">
                                      <Card.Title>Team and Backgorund:</Card.Title>
                                      <Card.Text>
                                          {state.team}
                                      </Card.Text>
                                  </div>
                                  <div className="col-md-6">
                                      <Card.Title>Company and products:</Card.Title>
                                      <Card.Text>
                                          {state.product}
                                      </Card.Text>
                                  </div>
                              </div>
                              <br></br>
                              <div className="row">
                                  <div className="col-md-6">
                                      <Card.Title>Solution and uniqueness:</Card.Title>
                                      <Card.Text>
                                         {state.solution}
                                      </Card.Text>
                                  </div>
                                  <div className="col-md-6">
                                      <Card.Title>Value Propostions:</Card.Title>
                                      <Card.Text>
                                          {state. proposition}
                                      </Card.Text>
                                  </div>
                              </div>
                              <br></br>
                              <div className="row">
                                  <div className="col-md-6" style={{}}>
                                      <Card.Title>Incubation Type:</Card.Title>
                                      <Card.Text>
                                        {state.type}
                                      </Card.Text>
                                  </div>
                                 
                                      {/* <div className="col-md-6" style={{}}>
                                          <Card.Title>Slot Code:</Card.Title>
                                          <Card.Text>

                                          </Card.Text>
                                      </div> */}
                                 
                              </div>
                              <div className='buttonContainer'>
                                  <Button variant="success" onClick={() => {setProcessing(state._id)
                                  setConfirm('status updated')
                                }}>processing</Button>
                                  <Button variant="success" onClick={() => {setApproved(state._id)
                                      setConfirm('status updated')
                                }}>Approved</Button>
                                  <Button variant="success" onClick={() => {setRejected(state._id)
                                      setConfirm('status updated')
                                }}>Rejected</Button>
                              </div>
                          </Card.Body>
                      </Card>
                     
                      <br></br>
                      
                      {confirm ? <Alert  severity="success">{confirm}</Alert> : " "}
                  </Container>
              </div>
          </div>
      </>
  )
}

export default Viewcompanydetails
