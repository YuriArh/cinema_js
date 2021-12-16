import { getVideo } from './services.js'

const listCard = document.querySelector('.other-films__list');

const renderCard = async (data) => {
    listCard.textContent = " ";

    Promise.all(data.map(async (item) => {

        // if (!item.poster_path) return;

        const video = await getVideo(item.id, item.media_type)
        const key = video.results[0]?.key;
        let vote = item.vote_average   
        if (vote === 0) {
            vote = '-'
        }
        
        const card = document.createElement('li');
        card.className = 'other-films__item';
    
        const link = document.createElement('a');
        if (key) link.href = `https://youtu.be/${key}`
        link.className = 'other-films__link tube';
        link.dataset.rating = vote;
        
    
        const img = document.createElement('img');
        img.className = 'other-films__img';
        img.alt = `${item.name || item.title}`;
        img.src = item.poster_path ? 
        `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}` :
        'img/noPoster.jpg' ;
    
        link.append(img);
        card.append(link);

        return card;
    })).then(cards => listCard.append(...cards))
    ;

    // ;
};


export default renderCard;


