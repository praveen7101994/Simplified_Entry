import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Dashboard.css'

function Dashboard() {
    let history = useHistory();
    return (
        <div className="Dashboard">
            <div>Praveen Patel</div>
            <div className="DashBoardActions">
                <div className="Action" onClick={() => {history.push("/LogEntry")}}>Log Entry</div>
                <div className="Action">Log Exit</div>
                <div className="Action">
                    <Link to='/ViewLogs'>View Logs </Link>
                    </div>
                <div className="Action">Logout</div>
            </div>
        </div>
    )
}

export default Dashboard
