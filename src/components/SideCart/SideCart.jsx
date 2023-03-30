import React, { useEffect, useState } from 'react';

const SideCart = ({ watchTime }) => {
  const [time, setTime] = useState(watchTime);

  useEffect(() => {
    const getWatchTimeFromLocalStorage = localStorage.getItem('watchTime');
    setTime(getWatchTimeFromLocalStorage);
  }, [watchTime]);
  return (
    <div>
      <h1>My cart</h1>
      <div className="mt-5 text-center">
        <p>total watch time</p>
        <input type="text" value={time} disabled />
      </div>
      <h5 className="mt-5">Add Break Time</h5>
      <button className="w-25 btn-circle m-1 btn btn-info">15</button>
      <button className="w-25 btn-circle m-1 btn btn-warning">20</button>
      <button className="w-25 btn-circle m-1 btn btn-danger">25</button>
      <input className="mt-3" type="text" value={0} disabled />
      <button className="mt-5 btn btn-info w-100">Complete</button>
    </div>
  );
};

export default SideCart;
