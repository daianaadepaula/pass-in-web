import { Search, MoreHorizontal, ChevronLeft, ChevronsLeft, ChevronRight, ChevronsRight } from "lucide-react"
import { IconButton } from "./icon-button"
import { Table } from "./table/table"
import { TableHeader } from "./table/table-header"
import { TableCell } from "./table/table-cell"
import { TableRow } from "./table/table-row"
import { ChangeEvent, useState } from "react"

export function AttendeeList() {
	const [search, setSearch] = useState('')

	function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
		setSearch(event.target.value)
	}

	return (
		<main className="flex flex-col gap-4">

			<div className="flex gap-3 items-center">
				<h1 className="text-2xl font-bold">Participantes</h1>

				<div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg flex items-center gap-3">
					<Search className="size-4 text-emerald-300" />
					<input onChange={onSearchInputChanged} className="bg-transparent flex-1 outline-none border-0 p-0 text-sm" placeholder="Buscar participante..." />
				</div>
				{search}
			</div>

			<Table>

				<thead>
					<tr className="border-b border-white/10">
						<TableHeader style={{ width: 48 }}>
							<input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10" />
						</TableHeader>
						<TableHeader>Código</TableHeader>
						<TableHeader>Participante</TableHeader>
						<TableHeader>Data de inscrição</TableHeader>
						<TableHeader>Data de check-in</TableHeader>
						<TableHeader style={{ width: 64 }}></TableHeader>
					</tr>
				</thead>

				<tbody>
					{Array.from({ length: 8 }).map((_, i) => {
						return (
							<TableRow key={i} >
								<TableCell>
									<input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10" />
								</TableCell>
								<TableCell>13840</TableCell>
								<TableCell>
									<div className="flex flex-col gap-1">
										<span className="font-semibold text-white">Daiana de Paula</span>
										<span>daiana@gmail.com</span>
									</div>
								</TableCell>
								<TableCell>7 dias atrás</TableCell>
								<TableCell>3 dias atrás</TableCell>
								<TableCell>
									<IconButton transparent>
										<MoreHorizontal className="size-4" />
									</IconButton>
								</TableCell>
							</TableRow>
						)
					})}
				</tbody>

				<tfoot>
					<tr>
						<TableCell colSpan={3}>
							Mostrando 10 de 228 items
						</TableCell>
						<TableCell className="text-right" colSpan={3}>
							<div className="inline-flex items-center gap-8">
								<span>Página 1 de 23</span>

								<div className="flex gap-1.5">
									<IconButton>
										<ChevronsLeft className="size-4" />
									</IconButton>
									<IconButton>
										<ChevronLeft className="size-4" />
									</IconButton>
									<IconButton>
										<ChevronRight className="size-4" />
									</IconButton>
									<IconButton>
										<ChevronsRight className="size-4" />
									</IconButton>
								</div>
							</div>
						</TableCell>
					</tr>
				</tfoot>

			</Table>

		</main>
	)
}