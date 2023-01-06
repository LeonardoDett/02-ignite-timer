import { differenceInSeconds } from 'date-fns'
import { useEffect, useState } from 'react'
import { CountdownContainer, Separator } from './styles'

export function Countdown() {
	const [amountSecondPassed, setAmountSecondPassed] = useState(0)

	const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

	useEffect(() => {
		let interval: any
		if (activeCycle) {
			interval = setInterval(() => {
				const secondsDifference = differenceInSeconds(
					new Date(),
					activeCycle.startDate,
				)
				if (secondsDifference >= totalSeconds) {
					setCycles((cycles) =>
						cycles.map((cycle) => {
							if (cycle.id === activeCycleId) {
								return { ...cycle, interruptedDate: new Date() }
							} else {
								return cycle
							}
						}),
					)
					setAmountSecondPassed(totalSeconds)
					clearInterval(interval)
				} else {
					setAmountSecondPassed(secondsDifference)
				}
			}, 1000)
		}

		return () => {
			clearInterval(interval)
		}
	}, [activeCycle, totalSeconds, activeCycleId])

	return (
		<CountdownContainer>
			<span>{minutes[0]}</span>
			<span>{minutes[1]}</span>
			<Separator>:</Separator>
			<span>{seconds[0]}</span>
			<span>{seconds[1]}</span>
		</CountdownContainer>
	)
}
