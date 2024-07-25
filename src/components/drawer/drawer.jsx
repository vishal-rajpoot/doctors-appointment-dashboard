import * as React from 'react';
import PropTypes from 'prop-types';

import Drawer from '@mui/material/Drawer';
import { Container } from '@mui/material';

export default function AnchorTemporaryDrawer({children, toggleDrawer, toggle, sx, box_sx}) {

  return (
    <div>
          <Drawer
            transitionDuration={800}
            sx={[{ padding: '20px', ...sx }]}
            anchor='right'
            open = {toggle.right}
            onClose={toggleDrawer({'right': false})}
            >
                <Container sx={{ background: '#0000000d', overflowY: 'auto', height: '275vh', padding: 3, ...box_sx }}>
                  {children}
                </Container>
          </Drawer>
    </div>
  );
}

AnchorTemporaryDrawer.propTypes = {
    children: PropTypes.any,
    toggleDrawer: PropTypes.any,
    toggle: PropTypes.any,
    sx: PropTypes.any,
    box_sx: PropTypes.any,
  };
