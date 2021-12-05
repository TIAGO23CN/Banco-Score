function solucao(idade, ehEmancipada, documentacaoOK, score) {
    if((idade >= 18 || ehEmancipada == true) && (documentacaoOK == true)){ 
        if(score < 500) {
            console.log(500)
        } else if(score >=500 && score <=699) {
            console.log(1500) 
        } else if(score >= 700){
            console.log(3000)
        }
    }else {
        console.log("CONTA NEGADA")
    }
}

function processData(input) {
    const { idade, ehEmancipada, documentacaoOK, score } = JSON.parse(input);
    solucao(idade, ehEmancipada, documentacaoOK, score);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});