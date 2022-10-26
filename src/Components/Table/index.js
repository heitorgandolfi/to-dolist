import { TableRow } from './TableRow';
import './table.css';

export function Table({ tasks, removeTask }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Descrição da Tarefa</th>
                    <th>Data de Início</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {
                    tasks.map(task => (
                        <TableRow
                            key={task.id}
                            task={task}
                            removeTask={removeTask} />
                    ))

                }
            </tbody>
        </table>
    )
}