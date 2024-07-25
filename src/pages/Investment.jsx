import { Helmet } from 'react-helmet-async';

import { UserView } from 'src/sections/investment/view';

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> Investment | Triangle Investment </title>
      </Helmet>

      <UserView />
    </>
  );
}
