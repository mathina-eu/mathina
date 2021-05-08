// Point construtor
function Point(x, y) {
    this.x = x;
    this.y = y;
}

// ditância entre dois pontos
function dist(A, B) {
    return Math.sqrt(Math.pow((A.x-B.x),2)+Math.pow((A.y-B.y),2));
}

// obter a reflexão do ponto P sobre o eixo vertical que passa por x=a
function getRefVertical(P,a){
    var newX = P.x+2*(a-P.x);
    return new Point(newX,P.y);
}

// obter a rotação do ponto P de centro O e angulo ang
function getRot(P,O,ang){
    var P2 = new Point(P.x-O.x,P.y-O.y);
    var P3 = new Point(Math.cos(ang)*P2.x+Math.sin(ang)*P2.y, -Math.sin(ang)*P2.x+Math.cos(ang)*P2.y);
    return new Point(P3.x+O.x, P3.y+O.y);
}

// norma de um vetor
function norma(vetor){
    return Math.sqrt(Math.pow(vetor[0],2)+Math.pow(vetor[1],2));
}

// vetor unitário
function uni(vetor){
    var norm = norma(vetor);
    return [vetor[0]/norm,vetor[1]/norm];
}

// vetor AB
function vetorAB(A,B){
    return [B.x-A.x,B.y-A.y];
}

// vetor com comprimento d e direção de AB
function vetorkAB(d, A, B){
    var vTemp = uni(vetorAB(A,B));
    return [d*vTemp[0],d*vTemp[1]];
}