import express from 'express';
import bodyParser from 'body-parser';
import PrettyError from 'pretty-error';
import morgan from 'morgan';
import http from 'http';
import controllers from './controllers';

const pretty = new PrettyError();
const app = express();

const server = new http.Server(app);

app.use(bodyParser.json());
app.use(morgan('dev'));

controllers(app);

app.listen(3005, (err) => {
  if (err) {
    console.error(err);
  }
  console.info('----\n==> 🌎  API is running on port %s', 3005);
  console.info('==> 💻  Send requests to http://%s:%s', 'localhost', 3005);
});
