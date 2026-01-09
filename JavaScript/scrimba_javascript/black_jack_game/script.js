            
            let player = {
                name:"Prajwal",
                chips: 190
            }
            let cards = []
            let sum = 0
            let hasBlackJack = false
            let isAlive = false
            let message = ''
            let messageEl = document.getElementById('#message-el')
            // let sumEl = document.getElementById('sum-el')
            let sumEl = document.querySelector('.sum-el')
            let cardEl = document.querySelector('.card-el')
            let playerEl = document.querySelector('.player-el')
            // console.log(playerEl)
            playerEl.textContent = player.name + ": $" + player.chips
            function getRandomCard() { 
                random = Math.floor(Math.random() * 13) +1
                if (random === 1){
                    return 11
                } else if (random > 10){
                    return 10
                } else {
                    return random 
                }
            }

            function startGame() {
                isAlive = true
                hasBlackJack = false
                let firstCard = getRandomCard()
                let secondCard = getRandomCard()
                cards=[firstCard,secondCard]
                sum = firstCard + secondCard
                // cards.push(getRandomCard())
                // sum += cards[0]
                renderGame()
            }
            function renderGame() {
                cardEl.textContent = "Cards: " 
                for (let i = 0; i < cards.length; i++){
                    cardEl.textContent +=  cards[i] + " "
                }
                
                sumEl.textContent = 'Sum: ' + sum
                if (sum <= 20){
                    message ='Do you want to draw a new card?'
                } else if (sum === 21){
                    message ='Wohooo! You\'ve got Blackjack!'
                    hasBlackJack = true
                } else {
                    message ='You\'re out of the game!'
                    isAlive = false
                }
                messageEl.textContent = message
                
            }
            function newCard(){
                    
                    if (isAlive === true && hasBlackJack === false){
                        let card = getRandomCard()
                        sum += card
                        cards.push(card)
                        renderGame()
                    } 
                }
