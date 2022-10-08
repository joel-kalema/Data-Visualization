/* eslint-disable eqeqeq */
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useParams } from 'react-router-dom';
import { exData } from '../datas/machine';
import machinesData from '../datas/machine';
import { ResponsiveBar } from '@nivo/bar'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { FaTemperatureHigh } from 'react-icons/fa';
import './details.css';
import '../App.css';

const Details = () => {

    const { id } = useParams()
    const detail = machinesData.filter(machine => machine.id == id)
    const voltage = 0
    return(
        <div className="details">
            <h1>details</h1>
            {detail.map((mach, index) => (
                <div key={index} className='details-container' >
                    <div>
                        <img src='/machine.jpg' alt=''/>
                        <h1>Machine {id}</h1>
                        <p className='machine_description'>{mach.description}</p>
                    </div>
                    <div>
                        <div className='circular'>
                            <CircularProgressbar
                                value={voltage/2.3}
                                circleRatio={0.75}
                                text={`${voltage}v`}
                                styles={buildStyles({
                                rotation: 1 / 2 + 1 / 8,
                                textColor: "#fff",
                                pathColor: "rgb(9, 255, 0)",
                            })}
                            /> 
                            <p>0-230v/60Hz</p>
                        </div>
                        <div className='temp_details'>
                            <FaTemperatureHigh className='temp_details_icon'/>
                            <p>Temperature: 0°C</p>
                        </div>
                    </div>
                    <div>
                        <div className='inspection'>
                            <ResponsiveBar
                                data={ exData }
                                keys={["degress"]}
                                indexBy="day"
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
                                data={ exData }
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
            ))}
        </div>
    )
}

export default Details;