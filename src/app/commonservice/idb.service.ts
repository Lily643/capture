import { Injectable } from '@angular/core';
import { openDB, deleteDB, wrap, unwrap } from 'idb';
import { Observable, Subject } from 'rxjs';
import { captureTemplate } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class IdbService {
  private _dataChange: Subject<captureTemplate> = new Subject<captureTemplate>();
  private _dbPromise;
  private _dbName = 'captureTemplate';

  constructor() {
  }

  connectToIDB() {
    this._dbPromise = openDB(this._dbName, 1, {
      upgrade(db, oldVersion, newVersion, transaction) {
        // …
      },
      blocked() {
        // …
      },
      blocking() {
        // …
      },
      terminated() {
        // …
      }

    });
  }

  addItems(target: string, value: captureTemplate) {
    this._dbPromise.then((db: any) => {
      const tx = db.transaction(target, 'readwrite');
      tx.objectStore(target).put({
        id: value.id,
        title: value.title,
        pokemon1: value.pokemon1,
        use_pokemon1: value.use_pokemon1,
        down_pokemon1: value.down_pokemon1,
        pokemon2: value.pokemon2,
        use_pokemon2: value.use_pokemon2,
        down_pokemon2: value.down_pokemon2,
        pokemon3: value.pokemon3,
        use_pokemon3: value.use_pokemon3,
        down_pokemon3: value.down_pokemon3,
        pokemon4: value.pokemon4,
        use_pokemon4: value.use_pokemon4,
        down_pokemon4: value.down_pokemon4,
        pokemon5: value.pokemon5,
        use_pokemon5: value.use_pokemon5,
        down_pokemon5: value.down_pokemon5,
        pokemon6: value.pokemon6,
        use_pokemon6: value.use_pokemon6,
        down_pokemon6: value.down_pokemon6,
        pokemon7: value.pokemon7,
        use_pokemon7: value.use_pokemon7,
        down_pokemon7: value.down_pokemon7,
        pokemon8: value.pokemon8,
        use_pokemon8: value.use_pokemon8,
        down_pokemon8: value.down_pokemon8,
        pokemon9: value.pokemon9,
        use_pokemon9: value.use_pokemon9,
        down_pokemon9: value.down_pokemon9,
        pokemon10: value.pokemon10,
        use_pokemon10: value.use_pokemon10,
        down_pokemon10: value.down_pokemon10
      });
      this.getAllData(target).then((items: captureTemplate) => {
        this._dataChange.next(items);
      });
      return tx.complete;
    });
  }

  deleteItems(target: string, value: captureTemplate) {
    this._dbPromise.then((db: any) => {
      const tx = db.transaction(target, 'readwrite');
      const store = tx.objectStore(target);
      store.delete(value);
      this.getAllData(target).then((items: captureTemplate) => {
        this._dataChange.next(items);
      });
      return tx.complete;
    });
  }

  getAllData(target: string) {
    return this._dbPromise.then((db: any) => {
      const tx = db.transaction(target, 'readonly');
      const store = tx.objectStore(target);
      return store.getAll();
    });
  }

  dataChanged(): Observable<captureTemplate> {
    return this._dataChange;
  }
}