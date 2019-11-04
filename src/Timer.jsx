import React from 'react';
import './Timer.css';

export default function Timer(props) {
  const [time, set_time] = React.useState(new Date());

  setInterval(() => {
    set_time(() => new Date());
  }, 1000);

  return (
    <div className='timer'>
      {time.toLocaleString()}
    </div>
  );
}
