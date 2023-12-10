window.localStorage.setItem('hello', 'Hey whats up');

const hello = window.localStorage.getItem('hello');
// console.log(hello);

const setAge = () => {
    window.localStorage.setItem('age', 21);
}