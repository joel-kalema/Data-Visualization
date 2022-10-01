import React from 'react';
import { icons } from '../datas/icons';
import '../App.css';

function Home() {
  return (
    <div className="home">
        <h1>Home</h1>
        <div className='home_flex'>
            <div className='description'>
                <h1>Improved Efficiency</h1>
                <h3>Business transformation made easier.</h3>
                <p>
                 Multiple areas of your production line will become more
                 efficient as a result of Industry 4.0.
                </p>
            </div>
            <div className='hexa'>
            <section className="hex-grid">

                {icons.map((icon) => (
                    <div ng-repeat="item in app.items" class="grid-item repeat-animation">
                    <div className="inner">
                        <div className="inner-inner">
                            <div className="grid-info">
                                <div className ="inner-text">
                                    <div className="inner-text-inner">
                                        <h1>{icon}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
                
            </section>

            </div>
        </div>
    </div>
  );
}

export default Home;