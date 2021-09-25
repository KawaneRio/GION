import "modern-css-reset"
import { goNext, goPrev, useSelector } from "@/store"
import styled, { keyframes } from "styled-components"
import Arrow from "./Arrow"
import Control from "./Control"
import React from "react"
import Result from "./Result"
import UserMatch from "./Card/UserMatch"
import { useDispatch } from "react-redux"

const gradient = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

const Container = styled.section`
	font-family: "RocknRoll One", sans-serif;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 32px;
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: ${gradient} 15s ease infinite;
`

const App = (): JSX.Element =>
{
	const dispatch = useDispatch()
	const selector = useSelector(state => state)

	const specialWord = selector.gion[selector.index].getSpecialWord()

	return (
		<Container>
			<>
				{
					selector.gion[selector.index + 1] &&
						<Arrow direction="left" onClick={ () => dispatch(goPrev()) } />
				}
				{
					selector.gion[selector.index - 1] &&
						<Arrow direction="right" onClick={ () => dispatch(goNext()) } />
				}
			</>
			{
				specialWord?.category === "UserMatch" &&
					<UserMatch username={ specialWord.title } description={ specialWord.description } />
			}
			<Result />
			<Control />
		</Container>
	)
}

export default App