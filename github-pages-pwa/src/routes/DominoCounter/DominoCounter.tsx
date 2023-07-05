import React from 'react';
import { Divider } from '@mui/joy';
import { useAppSelector } from '../../App/store';
import Input from './Input';
import SelectedDominos from './SelectedDominos';
import { FlexColumn, FlexColumnFullHeight, FlexRow } from '../../common/components/Layout';


function DominoCounter() {
  const state = useAppSelector(state => state.dominoCounter);
  return <FlexColumnFullHeight>
    <FlexRow><span>Total Score: {state.total}</span></FlexRow>
    <Divider orientation="horizontal" />
    <SelectedDominos/>
    <Input/>
  </FlexColumnFullHeight>
}

export default DominoCounter;