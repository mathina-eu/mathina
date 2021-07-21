function resize(nCol=4){
    //console.log(window.innerWidth);
    //
    width = window.innerWidth;
    imgWidth = 300;
    var larg = width;    
    scal = 1;
    if(larg<1200){
        var scal = larg/1200;
    }
    imgWidth = scal*imgWidth;
    document.body.style.backgroundSize = larg+'px';
    var n = document.getElementsByClassName("buttons_elem").length;
    for(var i=0; i<n; i++){
        document.getElementsByClassName("buttons_elem")[i].width = scal*60;
        document.getElementsByClassName("buttons_elem")[i].height = scal*60;
    }
    document.getElementsByClassName("content")[0].style = 'width: '+imgWidth*nCol+'px;';
}

function init() {

    setLanguage();

    $('#successMessage').hide();
    $('#errorMessage').hide();
    $('#finalMessage').hide();
    document.getElementById('successMessage').style.visibility="visible";
    document.getElementById('errorMessage').style.visibility="visible";
    document.getElementById('finalMessage').style.visibility="visible";

    lista_loaders = new Array(jogada_imgs);
    imgs = new Array(jogada_imgs);
    targets = new Array(jogada_imgs);
    errados = new Array(jogada_imgs);
    certos = new Array(jogada_imgs);
    buts = new Array(jogada_imgs);

    lista_escolhidas = new Array();
    for (var i=0; i<jogada_imgs; i++) {
        lista_loaders[i]=loadImg('loaders',"../atractor-apps-all/icons/loading_fris.gif",imgWidth*0.9);
    }
    loadImages();
}

function reloadApp(){
    location.reload();
}


function showImages(){
    var flag=true;
    for (var i=0; i<jogada_imgs; i++) {
        if(imgs[i].style.visibility="hidden" && imgs[i].complete){
            imgs[i].style.visibility="visible";
            lista_loaders[i].style.visibility="hidden";
        }
        flag = flag && imgs[i].complete;
    }
    if(flag){
        clearInterval(myInterval);
    }        
}
function novaJogada(){
    tentativas = 0;
    var escolhidos = getSelectImgs();
    
    for (var i=0; i<jogada_imgs; i++) {
        imgs[i].style.visibility="hidden";
        imgs[i].src = assetDir+escolhidos[i];
        
        targets[i].style.opacity=1;
        targets[i].style.visibility = 'hidden';            
        errados[i].style.visibility = 'hidden';
        
        buts[i].setAttribute('valor',escolhidos[i]);
        buts[i].addEventListener('click', selectImg, false);
    }
    myInterval = setInterval(showImages, 200);

    document.getElementById('confirmBut').style.display='inline';
    document.getElementById('confirmBut').style.visibility='hidden';
}

function loadImages() {        
    var escolhidos = getSelectImgs();
    
    for (var i=0; i<jogada_imgs; i++) {
        imgs[i] = loadImg('frisos',assetDir+escolhidos[i],imgWidth*0.9);
        
        targets[i] = loadImg('targets',iconsDir+"target_fris.png",imgWidth*0.9);
        targets[i].style.visibility = 'hidden';
        
        errados[i] = loadImg('errados',iconsDir+"errado_fris.png",imgWidth*0.9);
        errados[i].style.visibility = 'hidden';
        
        buts[i] = loadImg('buts',iconsDir+"transp_fris.png",imgWidth*0.9);
        buts[i].setAttribute('posicao',i);
        buts[i].setAttribute('valor',escolhidos[i]);
        buts[i].addEventListener('click', selectImg, false);
    }
    myInterval = setInterval(showImages, 500);
}

function getSelectImgs(){
    //enableBut("confirmBut",false);
    document.getElementById('confirmBut').style.visibility='hidden';
    feedbacks[jogada].src = iconsDir+"feedbackTalvez.png";
    jogada++;
    lista_certos.sort( function() { return Math.random() - .5 } );
    lista_errados.sort( function() { return Math.random() - .5 } );
    var escolhidos = new Array();
    //escolhidos = lista_certos.concat(lista_errados);
    var cert;
    var erra;
    for (var i=0; i<jogada_imgs; i++) {
        if(i<jogada_certos){
            cert = lista_certos.shift();
            escolhidos.push(cert);
            escolha_certos.push(cert);
        }else{
            erra = lista_errados.shift();
            escolhidos.push(erra);
            escolha_errados.push(erra);
        }
    }
    escolhidos.sort( function() { return Math.random() - .5 } );
    /*if(jogada==max_jogadas){
        sendData();
    }*/
    return escolhidos;
}

function enableBut(butId, flag){
    var butObj = document.getElementById(butId);
    if(flag){
        butObj.style.opacity = "1";
    }else{
        butObj.style.opacity = "0.1";
    }
    butObj.disabled = !flag;
}

function loadImg(xdiv,source,largura=imgWidth){
    var borderGross = Math.max(0,0.5*(imgWidth-largura));
    var img = document.createElement("img");        
    img.width=largura;
    img.src = source;
    document.getElementById(xdiv).appendChild(img);
    if(borderGross>0){            
        img.style.border = borderGross+"px solid transparent";
    }
    return img
}

function selectImg(e){
    somEscolha.play();      
    var qualRos = e.target;
    var pos = qualRos.getAttribute('posicao');
    var val = qualRos.getAttribute('valor');
    if (targets[pos].style.visibility=='hidden'){
        targets[pos].style.visibility='visible';
    }else{
        targets[pos].style.visibility='hidden';
    }
    numEscolhidos = 0;
    for(var i=0; i<targets.length; i++){
        if(targets[i].style.visibility=='visible' && errados[i].style.visibility!='visible'){
            numEscolhidos++;
        }
    }
    
    if(numEscolhidos==jogada_certos){
        document.getElementById("confirmBut").style.visibility='visible';
    }else{
        document.getElementById("confirmBut").style.visibility='hidden';
    }
}

function confirmar(){
    var correctFlag;
    var selectFlag;
    var nErrados = 0;
    var nCertos=0;
    for(var i=0; i<jogada_imgs; i++){
        buts[i].removeEventListener('click', selectImg, false);
        selectFlag = targets[i].style.visibility=='visible';
        if(selectFlag){
            if(estaNaLista(buts[i].getAttribute('valor'), escolha_certos)){
                nCertos++;
            }else{
                errados[i].style.visibility = 'visible';
                nErrados++;
            }
        }
    }

    if(nCertos==jogada_certos){
        var aplausosFile;
        if(tentativas==0){
            feedbacks[jogada-1].src = iconsDir+"medalhaOuro.png";
            aplausosFile = aplausos1;
        }else if(tentativas==1){
            feedbacks[jogada-1].src = iconsDir+"medalhaPrata.png";
            aplausosFile = aplausos2;
        }else if(tentativas==2){
            feedbacks[jogada-1].src = iconsDir+"medalhaBronze.png";
            aplausosFile = aplausos3;
        }else{
            feedbacks[jogada-1].src = iconsDir+"feedbackCerto.png";
            aplausosFile = yay;
        }
        aplausosFile.play();
        if(jogada<max_jogadas){
            showDialog('#successMessage');
        }else{
            if (jogada>0){
                document.getElementById("finalFeedback1").src = document.getElementById("feedback1").src;
            }
            if (jogada>1){
                document.getElementById("finalFeedback2").src = document.getElementById("feedback2").src;
            }
            if (jogada>2){
                document.getElementById("finalFeedback3").src = document.getElementById("feedback3").src;
            }
            showDialog('#finalMessage');
        }
    }else{
        tentativas++;
        showDialog('#errorMessage');
        somErrado.play();
        feedbacks[jogada-1].src = iconsDir+"feedbackErrado.png";
        for(var i=0; i<jogada_imgs; i++){
            selectFlag = targets[i].style.visibility=='visible';
            if(!selectFlag){
                buts[i].addEventListener('click', selectImg, false);
            }else{
                targets[i].style.opacity=0.5;
            }
        }
    }

    document.getElementById('confirmBut').style.visibility='hidden';
}

function showDialog(tipo='#successMessage'){
    $(tipo).show();
    $(tipo).animate( {
        left: '5%',
        top: '5%',
        width: '90%',
        height: '90%',
        opacity: 0.9
    } );
}

function hideDialog(tipo='#successMessage'){
    $(tipo).hide();
    $(tipo).css( {
        width: 0,
        height: 0
    } );
    if(tipo=='#successMessage'){
        novaJogada();
    }
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function estaNaLista(elem, lista){
    var flag = false;
    for(var i=0; i<lista.length;i++){
        if(elem==lista[i]){
            flag=true;
            break;
        }
        //console.log(i+": "+flag);
    }
    return flag;
}