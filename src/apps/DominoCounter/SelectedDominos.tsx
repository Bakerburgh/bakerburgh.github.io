import { styled } from '@mui/joy';
import React, { useEffect, useRef } from 'react';
import { useAppSelector } from '../../App/store';
import { SelectedDomino } from './dominoSlice';
import Defs from './SvgParts/Defs';
import DominoBackgroundFull from './SvgParts/DominoBackgroundFull';
import DotPattern from './SvgParts/DotPattern';

const Container = styled('div')(() => ({
  flexGrow: 1,
  overflow: 'auto'
}));

function TopDots(props: { value?: number, colors: string[] }) {
  const { value, colors } = props;
  if (value === undefined || value === null) {
    return <></>
  }

  return <DotPattern value={value} color={colors[value]}
    groupTransform='translate(2, 2)'
  />
}

function BottomDots(props: { value?: number, colors: string[] }) {
  const { value, colors } = props;
  if (value === undefined || value === null) {
    return <g transform='translate(2,22)'>
      <rect x='0' y='0' width='16' height='16' rx='3' fill='#A0A0A0' />
    
    </g>
  }

  return <DotPattern value={value} color={colors[value]}
    groupTransform='translate(2, 22)'
  />
}

function Domino(props: { selected: SelectedDomino, colors: string[] }) {
  const { selected, colors } = props;
  return <svg width="60" height="120" viewBox='0 0 20 40' style={{margin: '5px'}}>
    <Defs />
    <DominoBackgroundFull />
    <TopDots value={selected.top} colors={colors} />
    <BottomDots value={selected.bottom} colors={colors} />
  </svg>
}


function SelectedDominos() {
  const bottomRef = useRef<HTMLDivElement>(null);
  const state = useAppSelector(state => state.dominoCounter);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [state.total, state.selected.length, bottomRef])


  return <Container>
    {state.selected.map((selected, index) =>
      <Domino selected={selected} key={index} colors={state.colors} />
    )}
      <div style={{ float:"left", clear: "both" }}
             ref={bottomRef}></div>
  </Container>
}

export default SelectedDominos;