import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle } from "reactstrap";

import { axiosWithAuth } from '../utils/axiosWithAuth';

const VolunteerCard = () => {
    const [volunteerData, setVolunteerData] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('/users/filter?role=volunteer')
            .then(res => {
                console.log("VOLUNTEERS", res)
                setVolunteerData(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return(
        <div className="volunteerHolder">
            <h3>Volunteers</h3>
            {volunteerData.map(volunteer => (
                <div className="cardHolder">
                    <Card className="volunteerCard">
                        <CardTitle>Volunteer's Username: {volunteer.username}</CardTitle>
                    </Card>
                </div>
                
            ))}
        </div>
    )
}

export default VolunteerCard;