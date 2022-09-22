import React from 'react';
import { useEffect, useState } from 'react';
import { firebaseApp } from '../datas/firebase';
import { getDatabase,ref, onValue, set} from 'firebase/database'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { data } from '../datas/machine';
import { ResponsiveBar } from '@nivo/bar'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { FaTemperatureHigh } from 'react-icons/fa';
import './details.css';
import '../App.css';

const Details01 = () => {

const [machines, setMachines] = useState([])
const [lines, setLines] = useState([])

const App = firebaseApp
const db = getDatabase(App)

    useEffect(() => {
        onValue(ref(db), snapshot => {
        const data = snapshot.val();
        if (data !== null) {
            setLines(Object.values(data)[0])
            setMachines(Object.values(data)[1])
        }
    })
    
    }, [])

    console.log('machine',machines)

    return(
        <div className="details">
            <h1>details01</h1>
            <div key={machines.id} className='details-container' >
                    <div>
                        <img src='/machine.jpg' alt=''/>
                        <h1>Machine {machines.id}</h1>
                        <p className='machine_description'>{machines.description}</p>
                    </div>
                    <div>
                        <div className='circular'>
                            <CircularProgressbar
                                value={machines.voltage/2.3}
                                circleRatio={0.75}
                                text={`${machines.voltage}v`}
                                styles={buildStyles({
                                rotation: 1 / 2 + 1 / 8,
                                textColor: "#fff",
                                pathColor: "darkorange",
                            })}
                            /> 
                            <p>0-230v/60Hz</p>
                        </div>
                        <div className='temp_details'>
                            <FaTemperatureHigh className='temp_details_icon'/>
                            <p>Temperature: {machines.temperature}°C</p>
                        </div>
                    </div>
                    <div>
                        <div className='imspection'>
                            <ResponsiveBar
                                data={data} keys={["degress"]} indexBy="day"
                                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                                padding={0.4}
                                valueScale={{ type: "linear" }}
                                colors="#fff"
                                animate={true}
                                enableLabel={false}
                                axisTop={null}
                                axisRight={null}
                                axisLeft={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: "degrees",
                                legendPosition: "middle",
                                legendOffset: -40
                                }}
                            />
                            <LineChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                              top: 5,
                              right: 30,
                              left: 20,
                              bottom: 5
                              }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line
                              type="monotone"
                              dataKey="power"
                              stroke="#8884d8"
                              activeDot={{ r: 8 }}
                            />
                            <Line type="monotone" dataKey="time" stroke="#82ca9d" />
                            </LineChart>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Details01;