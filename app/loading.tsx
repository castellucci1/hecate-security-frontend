'use client';

import { Box, CircularProgress, Container } from '@mui/material';

export default function Loading() {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh'
        }}
      >
        <CircularProgress />
      </Box>
    </Container>
  );
} 