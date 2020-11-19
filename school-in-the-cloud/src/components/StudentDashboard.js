import React from 'react';

import StudentSearchBar from './StudentSearchBar';
import VolunteerCard from './VolunteerCard';

const StudentDashboard = () => {

    return (
        <div >
            <h1>Student Dashboard</h1>
            <div className="studentDashSearch">
                <StudentSearchBar />    
            </div>
            <div className="volunteerDiv">
                <VolunteerCard/>    
            </div>
            
        </div>
    )
}

export default StudentDashboard;