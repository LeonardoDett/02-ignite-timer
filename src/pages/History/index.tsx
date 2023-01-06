import { HistoryList, HystoryContainer, Status } from './styles'

export function History() {
	return (
		<HystoryContainer>
			<h1>Meu Histórico</h1>

			<HistoryList>
				<table>
					<thead>
						<tr>
							<th>Tarefa</th>
							<th>Duração</th>
							<th>Tarefa</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Tarefa</td>
							<td>20 min</td>
							<td>Há 2 meses</td>
							<td>
								<Status statusColor="green">Concluido</Status>
							</td>
						</tr>
						<tr>
							<td>Tarefa</td>
							<td>20 min</td>
							<td>Há 2 meses</td>
							<td>
								<Status statusColor="green">Concluido</Status>
							</td>
						</tr>
						<tr>
							<td>Tarefa</td>
							<td>20 min</td>
							<td>Há 2 meses</td>
							<td>
								<Status statusColor="green">Concluido</Status>
							</td>
						</tr>
						<tr>
							<td>Tarefa</td>
							<td>20 min</td>
							<td>Há 2 meses</td>
							<td>
								<Status statusColor="green">Concluido</Status>
							</td>
						</tr>
						<tr>
							<td>Tarefa</td>
							<td>20 min</td>
							<td>Há 2 meses</td>
							<td>
								<Status statusColor="green">Concluido</Status>
							</td>
						</tr>
						<tr>
							<td>Tarefa</td>
							<td>20 min</td>
							<td>Há 2 meses</td>
							<td>
								<Status statusColor="green">Concluido</Status>
							</td>
						</tr>
						<tr>
							<td>Tarefa</td>
							<td>20 min</td>
							<td>Há 2 meses</td>
							<td>
								<Status statusColor="green">Concluido</Status>
							</td>
						</tr>
					</tbody>
				</table>
			</HistoryList>
		</HystoryContainer>
	)
}
