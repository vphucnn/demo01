

// import { useEffect } from 'react';

import Box from '@mui/material/Box';

// import NProgress from 'nprogress'
import { Typography } from '@mui/material';


// import TableHistory from 'src/views/table/mui/TableHistory';
import TableReward from 'src/views/table/mui/TableReward';
import Generator from './section/Generator';
import InfoSection from './section/InfoSection';
import VideoSection from './section/VideSection';
import { retrieveLaunchParams } from '@tma.js/sdk';



export default function Page() {
  const { initDataRaw } = retrieveLaunchParams();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '3rem' }}>
      <Box>
        {initDataRaw ? initDataRaw.toString() : 'null'}
      </Box>
      <Generator />
      <InfoSection/>
      <VideoSection/>


      <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '5rem' }}>
        <Box >
          <Typography variant="h1" sx={{ fontWeight: 700 }}>
            Your Reward
          </Typography>
        </Box>
        <TableReward />
      </Box>
    </Box>
  )
}
