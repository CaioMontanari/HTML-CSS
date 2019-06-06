function limpaCampo() {
    event.preventDefault();
    var frm = document.formImovel;
    alert("limpando os campos para você");
    frm.proprietario.value = "";
    frm.matricula.value = "";
}
