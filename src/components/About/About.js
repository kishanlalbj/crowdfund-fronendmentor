import React, { useState } from 'react';
import RewardCard from '../RewardCard/RewardCard';
import './About.css';

const About = () => {
  const [rewards] = useState([
    {
      title: 'Bamboo Stand',
      description:
        "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      rewardLeft: 101,
      pledgeAmount: 25
    },
    {
      title: 'Black Edition Stand',
      description:
        'You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
      rewardLeft: 64,
      pledgeAmount: 75
    },
    {
      title: 'Mahogany Special Stand',
      description:
        'You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list.  Shipping is included.',
      rewardLeft: 0,
      pledgeAmount: 200,
      outOfStock: true
    }
  ]);

  return (
    <div className='about-container'>
      <div className='card'>
        <h3>About this project</h3>
        <p className='about-text'>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p className='about-text'>
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>

        {rewards.map((reward, index) => (
          <div key={index} className='reward-item'>
            <RewardCard
              title={reward.title}
              description={reward.description}
              pledgeAmount={reward.pledgeAmount}
              rewardLeft={reward.rewardLeft}
              outOfStock={reward.outOfStock}
            ></RewardCard>
          </div>
        ))}
      </div>
      <br></br>
      <br></br>
    </div>
  );
};

export default React.memo(About);
