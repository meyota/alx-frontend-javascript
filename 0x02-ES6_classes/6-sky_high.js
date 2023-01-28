import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (typeof sqft !== 'number') {
      throw new Error('sqft must be a number');
    }
    super(sqft);

    if (typeof floors !== 'number') {
      throw new Error('floors must be a number');
    }
    this._floors = floors;
  }

  // Getter and Setter
  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
