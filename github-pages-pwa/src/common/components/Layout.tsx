import React from 'react';
import { styled } from '@mui/joy';


export const FlexRow = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row'
}))

export const FlexColumn = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column'
}))

export const FlexColumnFullHeight = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
}))