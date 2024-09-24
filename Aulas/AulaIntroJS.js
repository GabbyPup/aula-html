// Criar referência aos elementos que quero manipular

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(":3");
    let n1 = Number(frm.inUm.value);
    let n2 = Number(frm.inDois.value);
    let n3 = Number(frm.inTres.value);
    let n4 = Number(frm.inQuatro.value);

    const soma = n1+n2+n3+n4;
    const media = soma/4;

    console.log(soma);

    resp.innerText = `Total: ${soma}`;
    resp.innerText = `Media: ${media}`;
});