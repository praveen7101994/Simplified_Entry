import React, {useState, useEffect} from 'react'
import './ViewLogs.css'
import axios from 'axios'

function ViewLogs({Appstate}) {
    let User_Id = Appstate.user._id;
    const [LogEntries, setLogEntries] = useState(null)

    let formatDate = (date_parameter) => {
    let newDate = new Date(date_parameter);
    let Day = newDate.toLocaleString("default", { weekday: "long" });
    let date = newDate.getDate();
    let monthname = newDate.toLocaleString("default", { month: "short" });
    let year = newDate.getFullYear();
    return `${Day}  ${date} ${monthname} ${year}`;
  };

    useEffect(() => {
        console.log({Appstate})
        const handleViewLogs = async () => {
            console.log('called...')
            let Entries = await axios.get('http://localhost:5000/entry',{headers: {User_Id}})
            console.log({Entries})
            setLogEntries(Entries.data.data)
        }
        handleViewLogs()
    })
    return (
        <div className="ViewLogs">
            {
                LogEntries === null ? <h4>Loading...</h4> : null
            }
            {
                LogEntries && LogEntries.map(item => {
                    return (
                        <>
                            <div className="Entry">
                                <div className="EntryRow1">
                                    <div>{item.User_Name}</div>
                                    <div>{item.Society_Name}</div>
                                </div>
                                <div>At: {formatDate(item.At)}</div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default ViewLogs
