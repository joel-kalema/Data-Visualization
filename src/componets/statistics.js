import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { lineIcons } from '../datas/icons';
import './statistic.css';
import '../App.css';

function Statistics() {
    const percentage = 23
  return (
        <div className="statistics">
            <div>
                <h1>Statistics</h1>
                <div className='sources_statistics'>
                    <div className='pv'>
                        <div>
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
                                <h1>12.3v</h1>
                            </div>
                        </div>
                    </div>
                    <div className='grid'>
                        <div>
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
                                <h1>120Kw</h1>
                            </div>
                        </div>
                    </div>
                    <div className='generator'>
                        <div>
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
                                <h1>23liter</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Statistics;