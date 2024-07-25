import { Helmet } from 'react-helmet-async';

import { UserView } from 'src/sections/employee/view';

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> Employee | Triangle Investment </title>
      </Helmet>

      <UserView />
    </>
  );
}
