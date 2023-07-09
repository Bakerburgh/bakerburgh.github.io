import React from 'react';
import { Divider, styled } from '@mui/joy';
import { useAppSelector } from '../../App/store';
import Input from './Input';
import SelectedDominos from './SelectedDominos';
import { FlexColumnFullHeight, FlexRow } from '../../common/components/Layout';

const ScoreSpan = styled('span')(() => ({
  margin: '0px 10px'
}))

function DominoCounter() {
  const state = useAppSelector(state => state.dominoCounter);
  return <FlexColumnFullHeight>
    <FlexRow><ScoreSpan>Total Score: {state.total}</ScoreSpan></FlexRow>
    <Divider orientation="horizontal" />
    <SelectedDominos/>
    <Input/>
  </FlexColumnFullHeight>
}

export default DominoCounter;