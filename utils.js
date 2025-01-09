function generateRandomNumber() {
  return Math.floor(Math.random() * 100);
}

const posts = [
    {
        id: 1,
        title: 'Post 1',
    },
    {
        id: 2,
        title: 'Post 2',
    }
]

const getPosts = () => posts;

export { generateRandomNumber, getPosts };