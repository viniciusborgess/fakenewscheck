function calcular() {
    const fakenews = document.getElementById('input1').value
    const fakenewslink = document.getElementById('input2').value
    const res = document.getElementById('res')
    const color = document.getElementById('body')


const fakes = [
    {title: 'A cloroquina ajuda no tratamento contra covid-19?', reply: 'Não, ela pode melhorar seu bem-estar pelo "efeito placebo", mas não vai reduzir sua chance de ir parar no hospital ou te ajudar a curar-se do vírus (e lembre que ainda há são muitos os efeitos colaterais possíveis)', links: [
        'https://canaltech.com.br/saude/china-recomenda-cloroquina-contra-covid-19-mas-reprova-hidroxicloroquina-170344/',
        'sitecomfakenews.com']
    },
    {title: 'As vacinas contra covid-19 alteram o dna humano?', reply: 'Não, É importante lembrar, ainda, que apesar de ser considerada inovadora, a tecnologia já foi testada e aprovada em medicamentos anteriores, além de compor os estudos clínicos das vacinas com centenas de milhares de voluntários, que não registraram qualquer efeito adverso dessa natureza.', links: [
        'sitecomfakenews.com',
        'sitecomfakenews.com']
    },
    {title: 'Ivermectina ajuda no tratamento contra covid-19?', reply: 'A Ivermectina não é eficaz no tratamento contra o covid-19', links: [
        'sitecomfakenews.com',
        'sitecomfakenews.com']
    },
    {title: '', reply: 'COLOQUE UMA FAKE NEWS', links: [
        'sitecomfakenews.com',
        'sitecomfakenews.com']
    }
    ];

const fakeElement = fakes.filter(
    element => element.title == fakenews || element.links.includes(fakenewslink)
);
if (fakeElement.length > 0) {
    document.body.style.backgroundColor = 'red';
    res.innerHTML = fakeElement[0].reply
} else {
    document.body.style.backgroundColor = 'green';
}
}