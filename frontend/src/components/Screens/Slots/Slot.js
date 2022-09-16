import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

import Adminheader from '../../header/Adminheader'

const Slots = () => {
    const [slotId, setSlotId] = useState([])
    const [slotSection, setSlotSection] = useState('')
    const [show, setShow] = useState(false);



    const handleClose = () => {
        setShow(false);
    };


    const [appId, setApplicantId] = useState("");
    const [application, setApplication] = useState([])
    const [sectionA, setSectionA] = useState([])
    const [sectionB, setSectionB] = useState([])
    const [sectionC, setSectionC] = useState([])
    const [sectionD, setSectionD] = useState([])


    const getSlots = async () => {
        const getslots = await axios.get('/api/admins/slots')
        const slots = getslots.data
        // console.log(slots);
        let displaySecA = slots.filter((item) => {
            return item.section === 'A'
        });

        setSectionA(displaySecA)

        let displaySecB = slots.filter((item) => {
            return item.section === 'B'
        });

        setSectionB(displaySecB)

        let displaySecC = slots.filter((item) => {
            return item.section === 'C'
        });

        setSectionC(displaySecC)

        let displaySecD = slots.filter((item) => {
            return item.section === 'D'
        });

        setSectionD(displaySecD)
    }


    const handleShow = (slot_id, slot_section) => {
        setSlotId(slot_id);
        // slotSection=slot_section
        setSlotSection(slot_section);
        // console.log("sotttt"+slotId, slotSection);

        setShow(true);
    };

    const displayApplication = async () => {
        const displayapp = await axios.get('/api/admins/getApplication')
        const response =displayapp.data
        console.log('response');
        const records=response.filter((item)=>{
            return !item.bookingstatus

        })
        console.log('&&&');
        console.log(records);
        setApplication(records)
    }

    const slotBooking=async(id)=>{
        let appid=id
        console.log('%%%');
        setApplicantId(appid)
        console.log(appid,slotId,slotSection);
        const slotdata={appid,slotId,slotSection}
        const slotbook = await axios.put('/api/admins/updateslot', slotdata)
        console.log(slotbook.data);

    }

    const removeCompany=async()=>{
        if (appId){
            console.log('***');
            console.log(appId);
            const data={appId}
            console.log(data);
            const response =await axios.put('/api/admins/removeduplicate',data)
            console.log(response.data);
            if (response.data){
                setApplicantId("")
                handleClose()
            }
        }else{
            console.log("apllnull");
            handleClose();
        }
        }
    



    useEffect(() => {
        getSlots()
        displayApplication()
    }, [])

    
    return(
        <>
            <Adminheader />
            <div className='container'>
                <h1 className=' mt-3'>BOOK SLOT</h1>
                <div className="row g-5 ">
                    <div className=" row-12">
                        <div className="row g-3">
                            {sectionA &&
                                sectionA.map((item, index) => {
                                    return (
                                        <div className="col-1">
                                            <div
                                                style={{ height: "80px" }}
                                                key={index}
                                                className={`${item.selected ? " bg-success" : "bg-info"
                                                    } `}
                                                onClick={() => {
                                                    return item.selected
                                                        ? " "
                                                        : handleShow(item._id, item.section);
                                                }}

                                            ></div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                    <div className=" row-12">
                        <div className="row g-3">
                            {sectionB &&
                                sectionB.map((item, index) => {
                                    return (
                                        <div className="col-1">
                                            <div
                                                style={{ height: "80px" }}
                                                key={index}
                                                className={`${item.selected ? " bg-success" : "bg-info"
                                                    } `}
                                                onClick={() => {
                                                    return item.selected
                                                        ? " "
                                                        : handleShow(item._id, item.section);
                                                }}

                                            ></div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                    <div className=" row-12">
                        <div className="row g-3">
                            {sectionC &&
                                sectionC.map((item, index) => {
                                    return (
                                        <div className="col-1">
                                            <div
                                                style={{ height: "80px" }}
                                                key={index}
                                                className={`${item.selected ? " bg-success" : "bg-info"
                                                    } `}
                                                onClick={() => {
                                                    return item.selected
                                                        ? " "
                                                        : handleShow(item._id, item.section);
                                                }}

                                            ></div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                    <div className=" row-12">
                        <div className="row g-3">
                            {sectionD &&
                                sectionD.map((item, index) => {
                                    return (
                                        <div className="col-1">
                                            <div
                                                style={{ height: "80px" }}
                                                key={index}
                                                className={`${item.selected ? " bg-success" : "bg-info"
                                                    } `}
                                                onClick={() => {
                                                    return item.selected
                                                        ? " "
                                                        : handleShow(item._id, item.section);
                                                }}

                                            ></div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>



                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                onChange={(e) => {
                                    slotBooking(e.target.value);
                                }}
                            >
                                <option selected>--select--</option>

                                {application &&
                                    application.map((item, index) => {
                                        return (
                                            <option key={index} value={item._id}>

                                                {item.company}
                                            </option>
                                        );
                                    })}
                            </select>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={removeCompany}>
                                Close
                            </Button>
                           
                        </Modal.Footer>
                    </Modal>

                </div>

            </div>

        </>
    );
}

export default Slots
