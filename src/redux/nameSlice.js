import { createSlice, createAction } from "@reduxjs/toolkit";

export const setName = createAction("setName");
export const setLastName = createAction("setLastName");

const wrapWithinSpan = (text) => {
  return `<span class="highlight">${text}</span>`;
};

const highlightText = (text, symbols) => {
  const TWO_CHARS_ELEMENTS = symbols.filter((el) => el.length === 2);
  const ONE_CHAR_ELEMENTS = symbols.filter((el) => el.length === 1);
  let foundSymbols = [];
  let output = text;

  for (const symbol of TWO_CHARS_ELEMENTS) {
    if (output.includes(symbol)) {
      output = output.replace(symbol, wrapWithinSpan(symbol));
      foundSymbols.push(symbol);
      break;
    }
  }
  if (foundSymbols.length === 0) {
    for (const symbol of ONE_CHAR_ELEMENTS) {
      if (output.includes(symbol)) {
        output = output.replace(symbol, wrapWithinSpan(symbol));
        foundSymbols.push(symbol);
        break;
      }
    }
  }
  return {
    highlightedText: output,
    foundSymbols: foundSymbols,
  };
};

const nameSlice = createSlice({
  name: "name",
  initialState: {
    name: "",
    lastName: "",
    highlightedName: "",
    highlightedLastName: "",
    foundSymbols: [],
  },
  reducers: {
    highlightName: (state, action) => {
      const result = highlightText(state.name, action.payload.ELEMENTS);
      state.highlightedName = result.highlightedText;
      state.foundSymbols = result.foundSymbols;
    },
    highlightLastName: (state, action) => {
      const filteredElements = action.payload.ELEMENTS.filter(
        (symbol) => !state.foundSymbols.includes(symbol)
      );
      state.highlightedLastName = highlightText(
        state.lastName,
        filteredElements
      ).highlightedText;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setName, (state, action) => {
        state.name = action.payload;
      })
      .addCase(setLastName, (state, action) => {
        state.lastName = action.payload;
      });
  },
});

export const { highlightName, highlightLastName } = nameSlice.actions;
export default nameSlice.reducer;
