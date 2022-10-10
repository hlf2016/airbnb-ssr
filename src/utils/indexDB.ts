export default class DB {
  private dbName: string
  private db: any

  constructor(dbName: string) {
    this.dbName = dbName
  }

  // 打开数据库
  openStore(storeName: string, keyPath: string, indexs: Array<string>) {
    if (!window.indexedDB)
      throw new Error('Your browser doesn\'t support a stable version of IndexedDB. Such and such feature will not be available.')

    const request = window.indexedDB.open(this.dbName, 1)

    request.onsuccess = (event) => {
      const { result }: any = event.target
      this.db = result
    }

    request.onerror = () => {

    }

    request.onupgradeneeded = (event) => {
      const { result: db }: any = event.target
      const objectStore = db.createObjectStore(storeName, { autoIncrement: true, keyPath })

      indexs.map(idx => objectStore.createIndex(idx, idx, { unique: false }))

      objectStore.transaction.oncomplete = () => {
        // const todoStore = db.transaction(storeName, 'readwrite').objectStore(storeName)
        // todoStore.add({ id: 1, title: 'todo1', completed: false })
        // todoStore.add({ id: 2, title: 'todo2', completed: false })
        // todoStore.add({ id: 3, title: 'todo3', completed: false })
      }
    }
  }

  // 添加单个项目
  addItem(storeName: string, data: any) {
    const transaction = this.db.transaction(storeName, 'readwrite')
    const objectStore = transaction.objectStore(storeName)
    const request = objectStore.add(data)

    request.onsuccess = () => {

    }

    request.onerror = () => {
    }
  }

  // 删除单个对象
  deleteItem(storeName: string, key: string) {
    const transaction = this.db.transaction(storeName, 'readwrite')
    const objectStore = transaction.objectStore(storeName)
    const request = objectStore.delete(key)

    request.onsuccess = () => {

    }

    request.onerror = () => {
    }
  }

  // 更新单个对象
  updateItem(storeName: string, data: any) {
    const transaction = this.db.transaction(storeName, 'readwrite')
    const objectStore = transaction.objectStore(storeName)
    const request = objectStore.put(data)

    request.onsuccess = () => {

    }

    request.onerror = () => {
    }
  }

  // 获取单个对象
  getItem(storeName: string, key: string) {
    const transaction = this.db.transaction(storeName, 'readwrite')
    const objectStore = transaction.objectStore(storeName)
    const request = objectStore.get(key)

    request.onsuccess = () => {

    }

    request.onerror = () => {
    }
  }

  // 直接获取所有对象
  getAllItems(storeName: string) {
    const transaction = this.db.transaction(storeName, 'readwrite')
    const objectStore = transaction.objectStore(storeName)
    const request = objectStore.getAll()

    request.onsuccess = () => {

    }

    request.onerror = () => {
    }
  }

  // 使用 cursor 获取所有对象
  getCursors(storeName: string) {
    const transaction = this.db.transaction(storeName, 'readwrite')
    const objectStore = transaction.objectStore(storeName)
    const request = objectStore.openCursor()

    request.onsuccess = (event: any) => {
      const cursor = event.target.result
      if (cursor) {
        alert(`Name for SSN ${cursor.key} is ${cursor.value.name}`)
        cursor.continue()
      }
      else {
        alert('No more entries!')
      }
    }

    request.onerror = () => {
    }
  }
}
