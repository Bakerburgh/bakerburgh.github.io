import { createSlice } from '@reduxjs/toolkit'

const defaultColors = [
  '#FF00FF',
  '#1ba0de', // 1
  '#265c00', // 2
  '#cf0404', // 3
  '#753f05', // 4
  '#051075', // 5
  '#ced106', // 6
  '#52425e', // 7 
  '#005c2e', // 8
  '#280847', // 9
  '#ffa305', // 10
  '#000000', // 11
  '#7d7d7d', // 12
]

export interface SelectedDomino {
  top: number;
  bottom?: number;
  total?: number;
}


export const dominoSlice = createSlice({
  name: 'dominoCounter',
  initialState: {
    selected: [] as SelectedDomino[],
    total: 0,
    isSelectingTop: true,
    colors: defaultColors,
  },
  reducers: {
    addDomino: (state, action: {payload: number}) => {

      if (state.isSelectingTop) {
        var newTile = {
          top: action.payload,
          total: action.payload
        };
        state.selected.push(newTile);
      }
      else {
        var lastTile = state.selected[state.selected.length - 1];
        lastTile.bottom = action.payload;
        lastTile.total = lastTile.top + lastTile.bottom;
      }

      state.total += action.payload
      state.isSelectingTop = !state.isSelectingTop;

    },
    backspace: (state) => {
      if (state.selected.length === 0)
        return;
      if (state.isSelectingTop) {
        // Remove bottom half of tile
        var lastTile = state.selected[state.selected.length - 1];
        state.total -= lastTile.bottom ?? 0;
        lastTile.bottom = undefined;
        lastTile.total = lastTile.top;
        state.isSelectingTop = false;
        return;
      }
      // Remove top half of tile
      var removedTile = state.selected.pop();
      state.total -= removedTile?.top ?? 0;
      state.isSelectingTop = true;
    },
    clear: (state) => {
      state.selected = [];
      state.total = 0;
      state.isSelectingTop = true;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addDomino, backspace, clear } = dominoSlice.actions

export default dominoSlice.reducer