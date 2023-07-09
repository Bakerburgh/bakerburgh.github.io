import { AspectRatio, Button, styled } from '@mui/joy';
import React, { ReactNode, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../App/store';
import { FlexColumn, FlexRow } from '../../common/components/Layout';
import { addDomino, backspace, clear } from './dominoSlice';
import { Backspace, Clear } from '@mui/icons-material';
import DominoBackgroundBottomHalf from './SvgParts/DominoBackgroundBottomHalf';
import DominoBackgroundTopHalf from './SvgParts/DominoBackgroundTopHalf';
import DotPattern from './SvgParts/DotPattern';
import Defs from './SvgParts/Defs';

interface InputTileProperties {
  value: number,
  color: string,
  onTileClick: (value: number) => void,
  isSelectingTop: boolean,
}

function InputTileContainer(props: { children?: ReactNode }) {
  return <AspectRatio ratio='1/1' variant='plain' sx={{
    flexGrow: 1,
    margin: '5px'
  }}>
    {props.children}
  </AspectRatio>
}

const InputRootColumn = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '5px',
  marginLeft: '3px',
  marginRight: '3px'
}))

function InputTile(props: InputTileProperties) {
  let groupTransform = `translate(2, 2)`;
  return <InputTileContainer>
    <svg width='100%' height='100%' viewBox='0 0 20 20' onClick={() => props.onTileClick(props.value)}>
      <Defs/>
      {props.isSelectingTop ? <DominoBackgroundTopHalf /> : <DominoBackgroundBottomHalf />}
      <DotPattern color={props.color} value={props.value} groupTransform={groupTransform}/>
    </svg>
    
  </InputTileContainer>
}
function Input() {
  const state = useAppSelector(state => state.dominoCounter);
  const dispatch = useAppDispatch();
  const onTileClick = useCallback((value: number) => {
    dispatch(addDomino(value));
  }, [dispatch]);

  var inputTileProps = state.colors.map((color, index) => ({
    color,
    isSelectingTop: state.isSelectingTop,
    onTileClick,
    value: index
  } as InputTileProperties))


  return <InputRootColumn>
    <FlexRow>
      {inputTileProps.slice(0, 5).map((props, key) => <InputTile key={key} {...props} />)}
    </FlexRow>
    <FlexRow>
      {inputTileProps.slice(5, 10).map((props, key) => <InputTile key={key} {...props} />)}
    </FlexRow>
    <FlexRow>
      {inputTileProps.slice(10, 13).map((props, key) => <InputTile key={key} {...props} />)}
      <InputTileContainer>
        <div>
          <Button onClick={() => dispatch(backspace())}>
            <Backspace />
          </Button>
        </div>
      </InputTileContainer>
      <InputTileContainer>
        <div>
          <Button onClick={() => dispatch(clear())}>
            <Clear />
          </Button>
        </div>
      </InputTileContainer>    </FlexRow>
  </InputRootColumn>
}

export default Input;