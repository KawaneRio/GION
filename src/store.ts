import { TypedUseSelectorHook, useSelector as nativeUseSelector } from "react-redux"
import { configureStore, createSlice } from "@reduxjs/toolkit"
import { gionGenerator } from "./gion-gen"

export type State = {
	gion: string[],
	index: number,
}

const initialState: State = {
	gion: [gionGenerator.generate()],
	index: 0,
}

const slice = createSlice({
	initialState,
	name: "gion",
	reducers: {
		generateGion: state => ({
			...state,
			gion: [gionGenerator.generate(), ...state.gion],
			index: 0,
		}),
		goNext: state => ({
			...state,
			index: state.index - 1,
		}),
		goPrev: state => ({
			...state,
			index: state.index + 1,
		}),
	},
})

export const { generateGion, goNext, goPrev } = slice.actions

export const store = configureStore({
	reducer: slice.reducer,
})

export type RootState = ReturnType<typeof store.getState>;

export const useSelector: TypedUseSelectorHook<RootState> = nativeUseSelector