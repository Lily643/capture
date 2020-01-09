import { Component, OnInit, NgModule } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  private dbName = 'captureTemplate';
  private storeName = 'profileStore';
  private db = null;
  constructor() { }

  ngOnInit() {
    

    var openReq = indexedDB.open(this.dbName);
    //　DB名を指定して接続。DBがなければ新規作成される。

    openReq.onupgradeneeded = (event) => {
      //onupgradeneededは、DBのバージョン更新(DBの新規作成も含む)時のみ実行
      this.db = openReq.result;
      var objectStore = this.db.createObjectStore(this.storeName, { keyPath: 'id' })
      objectStore.createIndex("title", "title", { unique: false });
      objectStore.createIndex("poekemon1", "poekemon1", { unique: false });
      objectStore.createIndex("use_poekemon1", "use_poekemon1", { unique: false });
      objectStore.createIndex("down_poekemon1", "down_poekemon1", { unique: false });
      objectStore.createIndex("poekemon2", "poekemon2", { unique: false });
      objectStore.createIndex("use_poekemon2", "use_poekemon2", { unique: false });
      objectStore.createIndex("down_poekemon2", "down_poekemon2", { unique: false });
      objectStore.createIndex("poekemon3", "poekemon3", { unique: false });
      objectStore.createIndex("use_poekemon3", "use_poekemon3", { unique: false });
      objectStore.createIndex("down_poekemon3", "down_poekemon3", { unique: false });
      objectStore.createIndex("poekemon4", "poekemon4", { unique: false });
      objectStore.createIndex("use_poekemon4", "use_poekemon4", { unique: false });
      objectStore.createIndex("down_poekemon4", "down_poekemon4", { unique: false });
      objectStore.createIndex("poekemon5", "poekemon5", { unique: false });
      objectStore.createIndex("use_poekemon5", "use_poekemon5", { unique: false });
      objectStore.createIndex("down_poekemon5", "down_poekemon5", { unique: false });
      objectStore.createIndex("poekemon6", "poekemon6", { unique: false });
      objectStore.createIndex("use_poekemon6", "use_poekemon6", { unique: false });
      objectStore.createIndex("down_poekemon6", "down_poekemon6", { unique: false });
      objectStore.createIndex("poekemon7", "poekemon7", { unique: false });
      objectStore.createIndex("use_poekemon7", "use_poekemon7", { unique: false });
      objectStore.createIndex("down_poekemon7", "down_poekemon7", { unique: false });
      objectStore.createIndex("poekemon8", "poekemon8", { unique: false });
      objectStore.createIndex("use_poekemon8", "use_poekemon8", { unique: false });
      objectStore.createIndex("down_poekemon8", "down_poekemon8", { unique: false });
      objectStore.createIndex("poekemon9", "poekemon9", { unique: false });
      objectStore.createIndex("use_poekemon9", "use_poekemon9", { unique: false });
      objectStore.createIndex("down_poekemon9", "down_poekemon9", { unique: false });
      objectStore.createIndex("poekemon10", "poekemon10", { unique: false });
      objectStore.createIndex("use_poekemon10", "use_poekemon10", { unique: false });
      objectStore.createIndex("down_poekemon10", "down_poekemon10", { unique: false });
    }
    openReq.onsuccess = (event) =>{
      //onupgradeneededの後に実行。更新がない場合はこれだけ実行
      console.log('db open success');
      this.db = openReq.result;

    }
    openReq.onerror = function (event) {
      // 接続に失敗
      console.log('db open error');
    }
  }
  onTitleNotify() {
    var tran = this.db.transaction(this.storeName,'readwrite');
    var store = tran.objectStore(this.storeName);
    var putReq = store.put({id:1,title:'sampleのタイトル'});
    putReq.onsuccess = function(){
      console.log('put data success');
    }

    tran.oncomplete = function(){
    // トランザクション完了時(putReq.onsuccessの後)に実行
      console.log('transaction complete');
    }
  }

}
