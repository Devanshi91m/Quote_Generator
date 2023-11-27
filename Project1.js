// variables 
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes =[
   {
      quote: 'If u want to live a happy life, tie it to a goal, not to people or things.',
      person: 'Albert Einstein'
   },
   {
      quote: "Your time is limited, so do not waste it living someone else's life",
      person: 'Steve Jobs'
   },
   {
      quote: "If you look at what you have in life, you'll always have more. if you look at what you don't have in life, you'll never have enough.",
      person: 'Oprah Winfrey'
   },
   {
      quote: 'Remember that not getting what you want is sometimes a wonderful stroke of luck ',
      person: 'Dalai Lama'
   },
   {
      quote: 'the journey of thousands miles begins with one step',
      person: 'Lao Tzu'
   },
   {
      quote: 'Success is when your signature Changes to Autograph',
      person: 'Dr. APJ Abdul Kalam'
   },
   {
      quote: 'A winner is a dreamer who never gives up',
      person: 'Nelson Mandela'
   },
   {
      quote: 'Learn from Yesterday Live for Today Hope for Tomorrow',
      person: 'Sir Issac Newton'
   },
   {
      quote: 'The future depends on what we do in the present',
      person: 'Mahatma Gandhi'
   }
];

btn.addEventListener('click', function(){
   let random = Math.floor(Math.random() * quotes.length);
   quote.innerText = quotes[random].quote;
   person.innerText = quotes[random].person;
});
