function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];
}

HashTable.prototype.hash = function (key) {
  let sum = 0;
  for (let i = 0; i < key.length; i++) {
    sum += key.charCodeAt(i);
  }
  return sum % this.numBuckets;
};

HashTable.prototype.set = function (key, value) {
  // set bucket[hash(key)]={key:value}

  if (typeof key !== "string") {
    throw TypeError("Keys must be strings");
  }

  let i = this.hash(key);
  if (this.buckets[i] === undefined) {
    this.buckets[i] = {};
  }
  this.buckets[i][key] = value;
};

HashTable.prototype.get = function (key) {
  let i = this.hash(key);

  return this.buckets[i][key]; //buckets[0].key1 => returns val1
};

HashTable.prototype.hasKey = function (key) {
  let i = this.hash(key);
  return this.buckets[i].hasOwnProperty(key);
};

let table = new HashTable();
table.set("key1", "val1");
table.set("key2", "val2");
console.log(table.buckets);

// it('deberia guardar y buscar valores por key', function() {
//   hashTable.set('key1', 'val1');
//   hashTable.set('key2', 'val2');
//   hashTable.set('this is a very different string', 44.4);
//   expect(hashTable.get('key1')).toBe('val1');
//   expect(hashTable.get('key2')).toBe('val2');
//   expect(hashTable.get('this is a very different string')).toBe(44.4);
// });

// it('deberia devolver un error cuando el key no es un string', function() {
//   expect(function() {
//     hashTable.set(false, 'hi');
//   }).toThrowError(TypeError, 'Keys must be strings');
// });
