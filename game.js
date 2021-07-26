var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
var controlaTempoMosca = 1500
var nivel = window.location.search
nivel = nivel.replace('?', '')

//METODO ESCOLHE DIFICULDADE DO JOGO
	if(nivel === 'normal') {
		controlaTempoMosca = 1500
	}else if(nivel === 'dificil') {
		controlaTempoMosca = 1000
	}else if(nivel === 'hardcore') {
		controlaTempoMosca = 750
	}

//FUNCAO QUE RETORNA A DIMENSAO DA TELA
function ajustaTamanhoTela() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoTela()

var cronometro = setInterval(function () {
	tempo -= 1

	if (tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosca)
		window.location.href = 'vitoria.html'
	} else {
		document.getElementById('cronometro').innerHTML = tempo
	}

}, 1000)

//CRIA A POSICAO ALEATORIA DA MOSCA
function posicaoRandomica() {

	//remover a mosca anterior caso exista
	if (document.getElementById('mosca')) {
		document.getElementById('mosca').remove()

		//Game Over
		if (vidas > 3) {
			window.location.href = "game-over.html"
		} else {
			document.getElementById('V' + vidas).src = "imagens/coracao_vazio.png"

			vidas++
		}
	}


	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	//CRIAR ELEMENTO HTML
	var mosca = document.createElement('img')
	mosca.src = 'imagens/mosca.png'
	mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosca.style.left = posicaoX + 'px'
	mosca.style.top = posicaoY + 'px'
	mosca.style.position = 'absolute'
	mosca.id = 'mosca'
	mosca.onclick = function () {
		this.remove()
	}

	document.body.appendChild(mosca)

}


//CRIA OS TAMAHOS ALEATORIOS PARA A MOSCA
function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)

	switch (classe) {
		case 0:
			return 'mosca1'
		case 1:
			return 'mosca2'
		case 2:
			return 'mosca3'
	}
}

//CRIA A POSICAO ALEATORIA DA MOSCA (OLHANDO PARA ESQUERDA OU PARA A DIREITA)
function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)

	switch (classe) {
		case 0:
			return 'ladoR'
		case 1:
			return 'ladoL'
	}
}
