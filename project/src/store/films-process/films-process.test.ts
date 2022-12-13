import { fetchFilmsAction } from '../api-actions';
import { filmsProcess } from './films-process';
import { Film } from '../../types/types';
import { FilmsState } from '../../types/state';
import { makeFakeFilm } from '../../mocks/mocks';

const films: Film[] = Array.from({length: 24}, makeFakeFilm);

describe('Reducer: filmsProcess', () => {
  let state: FilmsState;

  beforeEach(() => {
    state = {films: [], isLoading: true};
  });

  it('without additional parameters should return initial state', () => {
    expect(filmsProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({films: [], isLoading: true});
  });

  describe('filmsProcess test', () => {
    it('fetchFilmsAction pending', () => {
      expect(filmsProcess.reducer(state, {type: fetchFilmsAction.pending.type}))
        .toEqual({isLoading: true, films: []});
    });
    it('fetchFilmsAction fulfilled', () => {
      expect(filmsProcess.reducer(state, {type: fetchFilmsAction.fulfilled.type, payload: films}))
        .toEqual({isLoading: false, films: films});
    });
    it('fetchFilmsAction rejected', () => {
      expect(filmsProcess.reducer(state, {type: fetchFilmsAction.rejected.type}))
        .toEqual({isLoading: false, films: []});
    });
  });

});
