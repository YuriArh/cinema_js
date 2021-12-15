const listCard = document.querySelector('.other-films__list');

const renderCard = async (data) => {
    listCard.textContent = " ";

    const cards = data.map((item) => {
        let vote = item.vote_average   
        if (vote === 0) {
            vote = '-'
        }
                

        const card = document.createElement('li');
        card.className = 'other-films__item';
    
        const link = document.createElement('a');
        link.className = 'other-films__link';
        link.dataset.rating = vote;
        
    
        const img = document.createElement('img');
        img.className = 'other-films__img';
        img.alt = `${item.name || item.title}`;
        img.src = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`;
    
        link.append(img);
        card.append(link);

        return card;
    });

    listCard.append(...cards);
};


export default renderCard;