import React, {useState, useEffect} from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { firebaseApp } from '../datas/firebase';
import { lineIcons } from '../datas/icons';
import { getDatabase,ref, onValue, set} from 'firebase/database'
import 'react-circular-progressbar/dist/styles.css';
import machinesData from '../datas/machine'
import '../App.css';
import { Link } from 'react-router-dom';

function Control() {
    const percentage = 30;
  
    let SolarVol= 0;
    let GridVol= 0;
    let GenVolt= 0;

    const[line, setLine] = useState('')

    const sheckSource = (event) =>{
        setLine(event.target.value)
    }

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

  if(line === 'generator') {
      GenVolt= 220
  }else if(line === 'grid') {
      GridVol= 220
  }else if(line === 'solar') {
      SolarVol= 220
  }else {
      GenVolt= 0
      GridVol= 0
      SolarVol= 0
  }

  
  // console.log(voltage)
  return (
      <div className="control">
          <h1>Controls</h1>
          <div className='controls_lines'>

          <div className='control_container'>
              <div className='control_statistics'>
                  <h5>Machines: </h5>
                  <div className='in_funtion'></div>
                  <p>in function</p>
                  <div className='stoped'></div>
                  <p>stoped </p>
              </div>
              <div className='jauge'>
                  <div className='percentage'>
                      <h6>Machines in function</h6>
                      <CircularProgressbar
                          value={percentage}
                          circleRatio={0.75}
                          text={`${percentage}%`}
                          styles={buildStyles({
                            rotation: 1 / 2 + 1 / 8,
                            textColor: "#fff",
                            pathColor: "rgb(9, 255, 0)",
                            trailColor: "red"
                          })}
                      />
                  </div>
                  <div>
                      <h1>1/3</h1>
                      <span className='machine_suplyed'>Machines</span>
                  </div>
              </div>
              </div>

              <div className='control_container_v voltage'>
                  <div className='jauge_voltage'>
                  <h1>{lineIcons[0]}</h1>
                  <h6>GRID</h6>
                  <div className='percentage jauge_detail'>
                      <CircularProgressbar
                          value={GridVol/2.3}
                          circleRatio={0.75}
                          text={`${GridVol}v`}
                          styles={buildStyles({
                              rotation: 1 / 2 + 1 / 8,
                              textColor: "#fff",
                              pathColor: "darkorange",
                          })}
                      /> 
                      <span>0-230V/50-60Hz</span>
                  </div>
              </div>

              <div className='jauge_voltage'>
                  <h1>{lineIcons[1]}</h1>
                  <h6>PV</h6>
                  <div className='percentage jauge_detail'>
                      <CircularProgressbar
                          value={SolarVol/2.3}
                          circleRatio={0.75}
                          text={`${SolarVol}v`}
                          styles={buildStyles({
                              rotation: 1 / 2 + 1 / 8,
                              textColor: "#fff",
                              pathColor: "rgb(9, 255, 0)",
                          })}
                      /> 
                      <span>0-230V/50-60Hz</span>
                  </div>
              </div>

              <div className='jauge_voltage'>
                  <h1>{lineIcons[2]}</h1>
                  <h6>GENERATOR</h6>
                  <div className='percentage jauge_detail'>
                      <CircularProgressbar
                          value={GenVolt/2.3}
                          circleRatio={0.75}
                          text={`${GenVolt}v`}
                          styles={buildStyles({
                              rotation: 1 / 2 + 1 / 8,
                              textColor: "#fff",
                              pathColor: "aqua",
                          })}
                      /> 
                      <span>0-230V/50-60Hz</span>
                  </div>
              </div>

              <form onChange={sheckSource}>
                  <input type="radio" id="grid" name="fav_language" value="grid" />
                  <label for="grid">GRID</label><br />
                  <input type="radio" id="css" name="fav_language" value="solar" />
                  <label for="solar">SOLAR</label><br />
                  <input type="radio" id="javascript" name="fav_language" value="generator" />
                  <label for="generator">GENERATOR</label>
              </form>

              <div>
                  <h1>1/2</h1>
                  <p className='power_suply'>Power suply</p>
              </div>

            </div>     
          </div>


            <div>
                <div className='machines'>
                      <div className='machine'>
                        <h3>Motor</h3>
                        <h1>0{machines.id}</h1>
                        <h6>Temperture: 0{machines.temperature}°C</h6>
                        <h6>Voltage: {machines.voltage}V</h6>
                        <Link to={`/machine01/${machines.id}`} >Details</Link>
                      </div>
                  {
                    machinesData.map((item) => (
                      <div className='machine'>
                        <h3>Motor</h3>
                        <h1>0{item.id}</h1>
                        <h6>Temperture: 0{item.temperature}°C</h6>
                        <h6>Voltage: 0{item.voltage}V</h6>
                        <Link to={`/machine/${item.id}`} >Details</Link>
                      </div>
                    ))
                  }
                </div>
            </div>
    </div>
  );
}

export default Control;