const Counter = {
  generateId() {
    const timestamp = new Date().getTime();
    const randomNumber = Math.floor(Math.random() * 1000);
    return 'id-' + String(timestamp) + '-' + String(randomNumber);
  },
};

export default Counter;