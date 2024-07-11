

// import { useEffect } from 'react';

import Box from '@mui/material/Box';

// import NProgress from 'nprogress'
import { Typography } from '@mui/material';


// import TableHistory from 'src/views/table/mui/TableHistory';
import TableReward from 'src/views/table/mui/TableReward';
import Generator from './section/Generator';
import InfoSection from './section/InfoSection';
import VideoSection from './section/VideSection';

// import { retrieveLaunchParams } from '@telegram-apps/sdk';


export default function Page() {
  // const { initDataRaw, initData } = retrieveLaunchParams();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '3rem' }}>
      <h1>Hello</h1>
      {/* <Box>
        {initDataRaw ? initDataRaw.toString() : '3'}
      </Box>

      <Box>
        {initData ? initData.toString() : '4'}
      </Box> */}
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
