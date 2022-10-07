import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { lineIcons } from '../datas/icons';
import { data } from '../datas/statistics';
import { ResponsiveBar } from '@nivo/bar'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './statistic.css';
import '../App.css';

const Statistics = () => {
    const percentage = 23
  return (
        <div className="statistics">
                <h1>Statistics</h1>
                <div className='sources_statistics'>
                    <div className='energie_statics'>
                    <div className='pv'>
                        <div className='statistics_title'>
                            <h1>{lineIcons[1]}</h1>
                            <h6>PV</h6>
                        </div>
                        <div className='energie_level'>
                            <CircularProgressbar
                                className='level_icon'
                                value={percentage}
                                circleRatio={0.75}
                                text={`${percentage}%`}
                                styles={buildStyles({
                                    rotation: 1 / 2 + 1 / 8,
                                    textColor: "#fff",
                                    pathColor: "aqua",
                                    trailColor: "red"
                                })}
                            />
                            <div>
                                <h1>{lineIcons[3]}</h1>
                                <h3>12.35v</h3>
                            </div>
                        </div>
                    </div>
                    <div className='grid'>
                        <div className='statistics_title'>
                            <h1>{lineIcons[0]}</h1>
                            <h6>GRID</h6>
                        </div>
                        <div className='energie_level'>
                            <CircularProgressbar
                                className='level_icon'
                                value={percentage}
                                circleRatio={0.75}
                                text={`${percentage}%`}
                                styles={buildStyles({
                                    rotation: 1 / 2 + 1 / 8,
                                    textColor: "#fff",
                                    pathColor: "aqua",
                                    trailColor: "red"
                                })}
                            />
                            <div>
                                <h1>{lineIcons[4]}</h1>
                                <h3>120Kw</h3>
                            </div>
                        </div>
                        </div>
                    <div className='generator'>
                        <div className='statistics_title'>
                            <h1>{lineIcons[2]}</h1>
                            <h6>GENERATOR</h6>
                        </div>
                        <div className='energie_level'>
                            <CircularProgressbar
                                className='level_icon'
                                value={percentage}
                                circleRatio={0.75}
                                text={`${percentage}%`}
                                styles={buildStyles({
                                    rotation: 1 / 2 + 1 / 8,
                                    textColor: "#fff",
                                    pathColor: "aqua",
                                    trailColor: "red"
                                })}
                            />
                            <div>
                                <h1>{lineIcons[5]}</h1>
                                <h3>23liter</h3>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div className='statistic_bar'>
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
    );
}

export default Statistics;