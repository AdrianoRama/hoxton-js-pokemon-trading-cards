// - Make sure you check and understand the data that is given to you!
// - Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html
// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <ul class="cards"></ul>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// pokemon.sprites.other['official-artwork'].front_default

// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

console.log(data)

function createPokemonCard(data){
    const liEl=document.createElement('li')
    liEl.setAttribute('class','card')

    const h2El=document.createElement('h2')
    h2El.textContent=data.name

    const imgEl=document.createElement('img')
    imgEl.setAttribute('class','card--img')
    imgEl.setAttribute('width','250')
    imgEl.setAttribute('src', data.sprites.other["official-artwork"].front_default)

    const ulEl=document.createElement('ul')
    ulEl.setAttribute('class','card--text')

    const liTextEl=document.createElement('li')
    liTextEl.textContent=`${data.stats[0].stat.name}: ${data.stats[0].base_stat}`

    const liAttackEl=document.createElement('li')
    liAttackEl.textContent=`${data.stats[1].stat.name}: ${data.stats[1].base_stat}`

    const liDefenseEl=document.createElement('li')
    liDefenseEl.textContent=`${data.stats[2].stat.name}: ${data.stats[2].base_stat}`

    const liSpecialAttackEl=document.createElement('li')
    liSpecialAttackEl.textContent=`${data.stats[3].stat.name}: ${data.stats[3].base_stat}`

    const liSpecialDefenseEl=document.createElement('li')
    liSpecialDefenseEl.textContent=`${data.stats[4].stat.name}: ${data.stats[4].base_stat}`

    const liSpeedEl=document.createElement('li')
    liSpeedEl.textContent=`${data.stats[5].stat.name}: ${data.stats[5].base_stat}`

    liEl.append(h2El,imgEl,ulEl)
    ulEl.append(liTextEl,liAttackEl,liDefenseEl,liSpecialAttackEl,liSpecialDefenseEl,liSpeedEl)
    const card = document.querySelector('.cards')
    card.append(liEl)
}

for(const element of data){
createPokemonCard(element)
}