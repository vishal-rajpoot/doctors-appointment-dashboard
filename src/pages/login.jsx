import { Helmet } from 'react-helmet-async';
// import { useSelector, useDispatch } from 'react-redux';

import { LoginView } from 'src/sections/login';
// import { increment, decrement, incrementByAmount } from '../redux/slices/CounterSlice';

// ----------------------------------------------------------------------

export default function LoginPage() {

  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();
  return (
    <>
      <Helmet>
        <title> Login | Triangle Investment</title>
      </Helmet>
      
    {/* <button type="button" aria-label="Increment value" onClick={() => dispatch(increment())}>
  Increment
</button>
{count}
<button type="button" aria-label="Decrement value" onClick={() => dispatch(decrement())}>
  Decrement
</button>

<button type="button" aria-label="Increment by 5" onClick={() => dispatch(incrementByAmount(5))}>
  Increment by 5
</button> */}
      <LoginView />
    </>
  );
}
