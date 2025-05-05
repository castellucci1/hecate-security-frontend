'use client';

import { Box, CircularProgress, Container } from '@mui/material';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111216]">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-[#8b9696] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-[#8b9696] termina tracking-[0.3em]">CARGANDO...</p>
      </div>
    </div>
  );
} 