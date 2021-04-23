let pecas = 'CAVALOS'.toLowerCase();
switch (pecas) {
    case 'rei' :
        console.log("Se movimenta para qualquer lado ou direção, todavia somente de casa em casa.")
        break;   
            case 'bispo' :
        console.log("Se movimenta somente na diagonal por todo o tabuleiro.")
        break;
        case 'cavalos' :
        console.log("Se movimenta em L.")
        break;
        case 'torres' :
        console.log("Se movimentam em linha reta ou para os lados, por todas as casas.")
        break;
        case 'peoes' :
            console.log("Só podem se mover uma casa ou duas casas para frente (durante a primeira jogada), e também podem matar na diagonal peças do time adversário.")
            break;
            case 'Rainha' :
            console.log("Pode se movimentar para qualquer lado e direção.")
            break;
        default:
            console.log("erro404")
}