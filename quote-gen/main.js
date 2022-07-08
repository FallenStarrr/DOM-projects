
let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes = [
  {
    quote: `
      "The best way to find yoursef is to lose yoursef in the service of others."
    `,
    person: "Mahatma Gandi"
  },
  {
    quote: `
      "The journey of a thousand miles begins with one step."
    `,
    person: "Lao Tzu"
  },

  {
    quote: `
      "That which does not kill us makes us stronger."
    `,
    person: "Friedrich Nietzsche"
  },
  {
    quote: `
      "Life is what happens when you’re busy making other plans."
    `,
    person: "John Lennon"
  },
  {
    quote: `
      "When the going gets tough, the tough get going."
    `,
    person: "Joe Kennedy"
  },
  {
    quote: `
      "You must be the change you wish to see in the world."
    `,
    person: "Mahatma Gandhi"
  },
  {
    quote: `
      "You only live once, but if you do it right, once is enough."
    `,
    person: "Mae West"
  },
  {
    quote: `
      "Tough times never last but tough people do."
    `,
    person: "Robert H. Schuller"
  },
  {
    quote: `
      "Get busy living or get busy dying."
    `,
    person: "Stephen King"
  },
  {
    quote: `
      "Whether you think you can or you think you can’t, you’re right"
    `,
    person: "Henry Ford"
  },
]

  btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length)

    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].person
  })