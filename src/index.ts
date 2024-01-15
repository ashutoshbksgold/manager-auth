import express from 'express';

const app = express();

app.get('/', (req, res) => {});

function getData(num: string) {
  console.log(num);
}

app.listen(8080, () => {
  console.log('listening on port 8080');
});
