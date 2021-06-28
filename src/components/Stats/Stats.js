import React from 'react';
import './Stats.css';

const Stats = () => {
  return (
    <div className='stats-container'>
      <div className='card'>
        <div className='stats-list-container'>
          <div>
            <div className='stat'>
              <span className='stat-data'>$89,914</span>
              <br></br>
              <span className='stat-meta'>of $100,000 backed</span>
            </div>
          </div>
          <div>
            <div className='stat'>
              <span className='stat-data'>5,007</span>
              <br></br>
              <span className='stat-meta'>total backers</span>
            </div>
          </div>
          <div>
            <div className='stat'>
              <span className='stat-data'>56</span>
              <br></br>
              <span className='stat-meta'>days left</span>
            </div>
          </div>
        </div>
        <div className='meter-container'>
          <div className='meter'>
            <span className='scale'></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
