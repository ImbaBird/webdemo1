// 项目前缀，避免冲突
var storage = {
  // 设置存储
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  // 获取存储
  get(key) {
    return JSON.parse(localStorage.getItem(key))
    //  JSON.stringify()的作用是将 JavaScript 对象转换为 JSON 字符串，而JSON.parse()可以将JSON字符串转为一个对象。
  },
  // 删除指定存储
  remove(key) {
    localStorage.removeItem(key);
  },
  // 删除所有存储
  clear() {
    localStorage.clear();
  }
}

export default storage;
