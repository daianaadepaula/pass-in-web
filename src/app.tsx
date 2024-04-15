interface MeuBotaoProps{
	texto: string
}

function MeuBotao(props: MeuBotaoProps){
	
	return <button className="bg-orange-400">{props.texto}</button>
}

export function App() {  

  return (
		<div className="flex gap-2">
			<MeuBotao texto="clique aqui" />
			<MeuBotao texto="botão 2" />
			<MeuBotao texto="botão 3" />
			
		</div>
	)
}
