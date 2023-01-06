import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'

const newCycleFormValidationSchema = zod.object({
	task: zod.string().min(1, 'Informe a tarefa'),
	minutesAmount: zod.number().min(1).max(60),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function NewCycleForm() {
	const { register } = useForm<NewCycleFormData>({
		resolver: zodResolver(newCycleFormValidationSchema),
		defaultValues: {
			task: '',
			minutesAmount: 0,
		},
	})

	return (
		<FormContainer>
			<label htmlFor="task">Vou trabalhar em</label>
			<TaskInput
				type="text"
				id="task"
				placeholder="de um nome para o seu projeto"
				list="taskSugestion"
				disabled={!!activeCycle}
				{...register('task')}
			/>

			<datalist id="taskSugestion">
				<option value="Projeto 1" />
				<option value="Projeto 2" />
				<option value="Projeto 3" />
				<option value="teste" />
			</datalist>

			<label htmlFor="minutesAmount">Durante </label>
			<MinutesAmountInput
				type="number"
				id="minutesAmount"
				placeholder="00"
				step={5}
				disabled={!!activeCycle}
				{...register('minutesAmount', { valueAsNumber: true })}
			/>

			<span>minutos.</span>
		</FormContainer>
	)
}
