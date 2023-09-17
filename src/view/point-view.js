import AbstractView from '../framework/view/abstract-view';
import dayjs from 'dayjs';

function pointItem ({type, name, offers, price, isFavorite, dateFrom, dateTo}) {
  const startDay = dayjs(dateFrom).format('MMM D').toUpperCase();
  const timeStartHours = dayjs(dateFrom).format('hh');
  const timeStartMinutes = dayjs(dateFrom).format('mm');
  const timeFinishHours = dayjs(dateTo).format('hh');
  const timeFinishMinutes = dayjs(dateTo).format('mm');
  const differenceTimeinMinutes = dayjs(dateTo).diff(dateFrom, 'minute');
  const hours = Math.floor(differenceTimeinMinutes / 60);
  const minute = differenceTimeinMinutes % 60;

  return (
    `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="${dateFrom}">${startDay}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="${type.img}" alt="Event type icon">
      </div>
      <h3 class="event__title">${type.name} ${name}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${dateFrom}">${timeStartHours}:${timeStartMinutes}</time>
          &mdash;
          <time class="event__end-time" datetime="${dateTo}">${timeFinishHours}:${timeFinishMinutes}</time>
        </p>
        <p class="event__duration">${hours}H ${minute}M</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${price}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
      ${
    offers.map((element) => (
      `<li class="event__offer">
          <span class="event__offer-title">${element.title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${element.price}</span>
        </li>`
    )).join('')
    }
      </ul>
      <button class="event__favorite-btn ${isFavorite ? 'event__favorite-btn--active' : ''}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`
  );
}
export default class PointView extends AbstractView {
  #data = null;
  #handleClick = null;
  #onFavoriteClick = null;

  constructor({data, onEditClick, onFavoriteClick}) {
    super();
    this.#data = data;
    this.#handleClick = onEditClick;
    this.#onFavoriteClick = onFavoriteClick;
    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#clickHandler);
    this.element.querySelector('.event__favorite-btn')
      .addEventListener('click', this.#favoriteClickHandler);
  }

  get template() {
    return pointItem(this.#data);
  }

  #clickHandler = (evt) => {
    evt.preventDefault();
    this.#handleClick();
  };

  #favoriteClickHandler = (evt) => {
    evt.preventDefault();
    this.#onFavoriteClick();
  };
}
