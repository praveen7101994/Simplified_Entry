import React, {useState} from 'react'
import './LogEntry.css'
import QrReader from 'react-qr-reader'
import axios from 'axios'

function LogEntry({Appstate}) {
    const [state, setState] = useState({
    result: 'No result'
  })
 
  const handleScan = data => {
    if (data) {
      let ReqData = {
              Society_Name: data,
              User_Id: Appstate.user._id,
              User_Name: Appstate.user.name
      }
      console.log({Appstate})
        axios.post('http://localhost:5000/entry', ReqData)
      setState({
        result: data
      })
    }
  }
  const handleError = err => {
    console.error(err)
  }
    return (
    <div className="LogScanner">
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
        <p>{state.result}</p>
      </div>
    )
}

export default LogEntry
