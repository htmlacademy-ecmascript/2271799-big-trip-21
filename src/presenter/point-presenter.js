import {remove, render, replace } from '../framework/render.js';
import EditPointView from '../view/edit-point-view.js';
import PointView from '../view/point-view.js';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING'
};

export default class PointPresenter {
  #pointListContainer = null;
  #handleModeChange = null;
  #handleDataChange = null;

  #pointComponent = null;
  #editPointComponent = null;

  #point = null;
  #mode = Mode.DEFAULT;

  constructor({pointListContainer, onModeChange, onDataChange}) {
    this.#pointListContainer = pointListContainer;
    this.#handleDataChange = onDataChange;
    this.#handleModeChange = onModeChange;
  }

  init(point) {
    this.#point = point;
    const prevPointComponent = this.#pointComponent;
    const prevEditComponent = this.#editPointComponent;

    this.#pointComponent = new PointView({
      data: this.#point,
      onEditClick: this.#handleEditClick,
    });
    this.#editPointComponent = new EditPointView({
      data: this.#point,
      onSubmitClick: this.#handleFormSubmit,
      onCloseEdit: this.#handleFormSubmit,
    });

    if (prevPointComponent === null || prevEditComponent === null) {
      render(this.#pointComponent, this.#pointListContainer);
      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#editPointComponent, prevEditComponent);
    }

    remove(prevPointComponent);
    remove(prevEditComponent);
  }

  destroy() {
    remove(this.#pointComponent);
    remove(this.#editPointComponent);
  }

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#replaceEditFormToPoint();
    }
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceEditFormToPoint();
    }
  };

  #handleEditClick = () => {
    this.#replacePointToEditForm();
  };

  #handleFormSubmit = (point) => {
    this.#replaceEditFormToPoint();
    this.#handleDataChange(point);
  };

  #replacePointToEditForm() {
    replace(this.#editPointComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#handleModeChange();
    this.#mode = Mode.EDITING;
  }

  #replaceEditFormToPoint() {
    replace(this.#pointComponent, this.#editPointComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = Mode.DEFAULT;
  }
}
