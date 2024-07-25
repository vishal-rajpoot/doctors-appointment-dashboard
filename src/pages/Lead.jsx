import { Helmet } from 'react-helmet-async';

import { UserView } from 'src/sections/lead/view';

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> Lead | Triangle Investment </title>
      </Helmet>

      <UserView />
    </>
  );
}
