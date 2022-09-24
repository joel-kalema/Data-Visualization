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
    const percentage = 33.3;

    const [machines, setMachines] = useState([])
    const [lamp, setLamps] = useState('')

    const [source, setSource] = useState([])

    const [generator, setGenerator] = useState('')
    const [grid, setGrid] = useState('')
    const [pv, setPv] = useState('')

    const App = firebaseApp
    const db = getDatabase(App)
  
    let SolarVol = 0;
    let GridVol = 0;
    let GenVolt = 0;

    const setRange = () => {
        lamp.lamps === 'on'?
        set(ref(db, 'lamps', 'l1'), {
          lamps: 'off',
        })
        :set(ref(db, 'lamps', 'l1'), {
            lamps: 'on',
        })
    }

    const setPvLine = () => {
        source.pv === 'off' && source.grid === 'on' && source.generator === 'off' || source.generator === 'on' || source.grid === 'off'?
        set(ref(db, 'source'), {
            grid: 'off',
            generator: 'off',
            pv: 'on'
        }) 
        : set(ref(db, 'source', 'grid'), {
            grid: 'off',
            generator: 'off',
            pv: 'off'
        })
    }

    const setGridLine = () => {
        source.grid === 'off' && source.pv === 'on' && source.generator === 'off' || source.generator === 'on' || source.pv === 'on'?
        set(ref(db, 'source'), {
            grid: 'on',
            generator: 'off',
            pv: 'off'
        })
        : set(ref(db, 'source', 'grid'), {
            grid: 'off',
            generator: 'off',
            pv: 'off'
        })
    }

    const setGeneratorLine = () => {
        source.generator === 'off' && source.grid === 'on' && source.pv === 'off' || source.pv === 'on' || source.grid === 'on'?
        set(ref(db, 'source'), {
            grid: 'off',
            generator: 'on',
            pv: 'off'
        })
        : set(ref(db, 'source', 'grid'), {
            grid: 'off',
            generator: 'off',
            pv: 'off'
        })
    }

    useEffect(() => {
        onValue(ref(db), snapshot => {
        const data = snapshot.val();
        if (data !== null) {
            setLamps(Object.values(data)[0])
            setMachines(Object.values(data)[1])
            setSource(Object.values(data)[3])
        }
    })  
    }, [])

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

                <div className='switch_lines'>
                    <h3>Lines</h3>
                    <button type='button' className= {source.generator} onClick={(event) => { setGenerator(event.target.value); setGeneratorLine()}}>generator</button>< br/>
                    <button type='button' className= {source.grid} onClick={(event) => { setGrid(event.target.value); setGridLine()}}>grid</button>< br/>
                    <button type='button' className= {source.pv} onClick={(event) => { setPv(event.target.value); setPvLine()}}>pv</button>
                </div>

                <div className='lamps'>
                    <h3>Lamps</h3>
                    <h1>{lineIcons[6]}</h1>
                    <h5>{lamp.lamps}</h5>
                    <button type='button' className={lamp.lamps} onClick={(event) => { setLamps(event.target.value); setRange()}}>Switch</button>
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