import {
	HomeContainer,
	StartCountdownButton,
	StopCountdownButton,
} from './styles'

import { HandPalm, Play } from 'phosphor-react'

import { useEffect, useState } from 'react'
import { differenceInSeconds } from 'date-fns'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'

interface Cycle {
	id: string
	task: string
	minutesAmount: number
	startDate: Date
	interruptedDate?: Date
	finishedDate?: Date
}

export function Home() {
	const [cycles, setCycles] = useState<Cycle[]>([])
	const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

	const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

	function handleCreateNewCicle(data: NewCycleFormData) {
		const newCycle: Cycle = {
			id: String(new Date().getTime()),
			task: data.task,
			minutesAmount: data.minutesAmount,
			startDate: new Date(),
		}

		setCycles((state) => [...state, newCycle])
		setActiveCycleId(newCycle.id)
		setAmountSecondPassed(0)
		reset()
	}
	function handleInterruptCycle() {
		setCycles((cycles) =>
			cycles.map((cycle) => {
				if (cycle.id === activeCycleId) {
					return { ...cycle, interruptedDate: new Date() }
				} else {
					return cycle
				}
			}),
		)

		setActiveCycleId(null)
	}

	const isSubmitDisabled = !watch('task')

	const currentSeconds = activeCycle ? totalSeconds - amountSecondPassed : 0

	const minutesAmount = Math.floor(currentSeconds / 60)
	const secondsAmount = currentSeconds % 60

	const minutes = String(minutesAmount).padStart(2, '0')
	const seconds = String(secondsAmount).padStart(2, '0')

	useEffect(() => {
		if (activeCycle) {
			document.title = `${minutes}:${seconds}`
		}
	}, [minutes, seconds, activeCycle])
	return (
		<HomeContainer>
			<form action="" onSubmit={handleSubmit(handleCreateNewCicle)}>
				<NewCycleForm />
				<Countdown />

				{activeCycle ? (
					<StopCountdownButton onClick={handleInterruptCycle} type="button">
						<HandPalm size="24" />
						Interromper
					</StopCountdownButton>
				) : (
					<StartCountdownButton disabled={isSubmitDisabled} type="submit">
						<Play size="24" />
						Começar
					</StartCountdownButton>
				)}
			</form>
		</HomeContainer>
	)
}
