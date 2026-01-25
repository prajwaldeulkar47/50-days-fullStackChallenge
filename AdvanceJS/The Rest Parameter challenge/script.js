const giveWishes = (text, sender, ...people) =>
  people.map(({ name }) => `
        <div class="wish-card">
            <p class="dear">Dear ${name},</p>
            <p class="text">${text}</p>
            <p class="best">Best wishes,</p>
            <p class="sender">${sender}</p>
        </div>`
    ).join('')

const text = 'Thank you for all your hard work through the year!🙏🎁'
const sender = 'Tom'

document.getElementById('wishes-el').innerHTML = giveWishes(
    text,
    sender,
    { name: 'Sally' },
    { name: 'Mike' },
    { name: 'Rob' },
    { name: 'Harriet' },
    { name: 'Prajwal' },
    { name: 'Jam' },
    { name: 'Cake' },
    { name: 'Nilima'}
)