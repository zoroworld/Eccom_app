import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Spinner = ({path = 'login'}) => {

  const [count , setCount] = useState(5);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const Interval = setInterval(() => {
       setCount((prevValue) => --prevValue) 
    }, 1000);
    // count === 0 && navigate('/login', {
    //   state: location.pathname,
    // });
     count === 0 && navigate(`/${path}`, {
      state: location.pathname,
    });
    return () => clearInterval(Interval)
    }, [count, navigate , location, path])

  return (
    <>
      <div className='contain-fluid d-flex justify-content-center align-items-center w-100' style={{height:100 + 'vh'}}>
          <button className="btn btn-transparent border-0" type="button" disabled>
            <div className='h1 fw-bold text-primary mx-2'>Redirect in {count}s</div>
            <span className="d-flex align-items-center mx-5">
              <span className="spinner-border spinner-border-sm text-primary" style={{height: 2 + 'rem', width: 2 +'rem', borderWidth: 7 + 'px'}} role="status" aria-hidden="true"></span>
              <span className='px-2 h2 text-primary'>Loading..</span>
            </span>
          </button>
      </div>
    </>
  )
}

export default Spinner;