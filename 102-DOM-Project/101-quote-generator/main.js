let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes = [{
        quote: ` You should write because you love the shape of stories and sentences and the creation of different words on a page. Writing comes from reading, and reading is the finest teacher of how to write.`,
        person: `Annie Proulx`
    },
    {
        quote: ` The strongest among you is the one who controls his anger.`,
        person: `Prophet Muhammad (peace be upon him)`
    },
    {
        quote: ` Even if we don't have the power to choose where we come from, we can still choose where we go from there.`,
        person: `Stephen Chbosky`
    },
    {
        quote: ` A father gives nothing better than good education.`,
        person: `Prophet Muhammad (peace be upon him)`
    },
    {
        quote: ` Life is never fair, and perhaps it is a good thing for most of us that it is not.`,
        person: `Oscar Wilde`
    },
    {
        quote: ` Do not waste water even if you were at a running stream.`,
        person: `Prophet Muhammad (peace be upon him)`
    },
    {
        quote: ` Don't cry because it's over. Smile because it happened.`,
        person: `Dr. Seuss`
    },
    {
        quote: ` However much the faith of a man increases, his regard for women increases.`,
        person: `Prophet Muhammad (peace be upon him)`
    },
    {
        quote: ` Everything is hard before it is easy.`,
        person: `Johann Wolfgang von Goethe`
    },
    {
        quote: ` Speak good or remain silent.`,
        person: `Prophet Muhammad (peace be upon him)`
    }
]

btn.addEventListener('click', ()=>{
    let random = Math.floor(Math.random() * quotes.length) 
    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].person
})
