import React, { useState } from 'react';
import './RewardCardRadio.css';

const RewardCardRadio = (props) => {
  const {
    title,
    description,
    minimumPledge,
    stockLeft,
    disable,
    handleRewardChange,
    selectedReward,
    onSubmitPledge
  } = props;

  const [reward, setReward] = useState(minimumPledge);

  return (
    <>
      <label
        className={!disable ? ' card-outline' : 'card-outline disabled'}
        style={
          title === selectedReward ? { border: '2px solid #3cb3ab' } : null
        }
      >
        <div className='reward-container'>
          <div>
            <input
              type='radio'
              className='radio'
              name='reward-card'
              value={title}
              disabled={disable?.toString()}
              checked={title === selectedReward}
              onChange={handleRewardChange}
            />
          </div>

          <div className='reward-card-header'>
            <div>
              <p className='reward-card-title'>{title}</p>

              <span className='reward-minimum-pledge'>
                {minimumPledge === undefined ? null : (
                  <> Pledge $ {minimumPledge} or more </>
                )}
              </span>
            </div>
            <div className='reward-stock-left-container'>
              {minimumPledge === undefined ? null : (
                <>
                  <span className='reward-stock-left reward-stock-left-desktop'>
                    {stockLeft}
                  </span>
                  <span
                    style={{
                      color: '#7a7a7a'
                    }}
                  >
                    &nbsp; left
                  </span>
                </>
              )}
            </div>
            <div
              style={{
                paddingLeft: '10px',
                paddingTop: '15px',
                marginBottom: '25px'
              }}
            >
              <span
                className={!disable ? 'reward-radio-description' : 'disabled'}
              >
                {description}
              </span>
            </div>

            {minimumPledge === undefined ? null : (
              <div className='reward-stock-left-container-mobile'>
                <span className='reward-stock-left'>{stockLeft}</span>
                <span
                  style={{
                    color: '#7a7a7a'
                  }}
                >
                  &nbsp;left
                </span>
              </div>
            )}
          </div>
        </div>

        {selectedReward === title && minimumPledge > 0 ? (
          <>
            <hr></hr>
            <div className='reward-radio-footer'>
              <div>
                <p>Enter your pledge</p>
              </div>
              <div className='pledge-input-container'>
                <div className='input-icon'>
                  <p className='dollar-sign'>$</p>
                  <input
                    type='number'
                    className='pledge-input'
                    value={reward}
                    min={reward}
                    onChange={(e) => setReward(e.target.value)}
                  ></input>
                </div>
                &nbsp; &nbsp;
                <button className='btn' onClick={onSubmitPledge}>
                  Continue
                </button>
              </div>
            </div>
          </>
        ) : null}
      </label>
    </>
  );
};

export default RewardCardRadio;
