import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useParams } from 'react-router-dom';
import machinesData from '../datas/machine';
import { ResponsiveBar } from 'recharts';
import { FaTemperatureHigh } from 'react-icons/fa';
import './details.css';
import '../App.css';

const Details = () => {
    const data = [
        {
          day: "Monday",
          degress: 59
        },
        {
          day: "Tuesday",
          degress: 61
        },
        {
          day: "Wednesday",
          degress: 55
        },
        {
          day: "Thursday",
          degress: 78
        },
        {
          day: "Friday",
          degress: 71
        },
        {
          day: "Saturday",
          degress: 56
        },
        {
          day: "Sunday",
          degress: 67
        }
      ];
    const { id } = useParams()
    const detail = machinesData.filter(machine => machine.id == id)
    const voltage = 220
    return(
        <div className="details">
            <h1>details</h1>
            {detail.map((mach, index) => (
                <div key={index} className='details-container' >
                    <div>
                        <img src='/machine.jpg' alt=''/>
                        <h1>Machine {id}</h1>
                        <p>{mach.description}</p>
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
                    </div>
                    <div>
                        <div className='imspection'>
                        <ResponsiveBar
      data={data}
      keys={["degress"]}
      indexBy="day"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.4}
      valueScale={{ type: "linear" }}
      colors="#3182CE"
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
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Details;