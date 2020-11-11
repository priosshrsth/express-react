import { userInfo } from 'os';
import { routeLogger } from '../../bootstrap/middlewares/routeLogger';
import Test from '../../models/test';

const testRouter = routeLogger
  .route('/test')
  .get((req, res) => {
    res.json({ username: userInfo().username });
  })
  .post((req, res) => {
    const { text } = new Test(`This is what you posted: ${req.body.text}`);
    res.json({ text });
  })
  .put((req, res) => {
    res.json({ text: `I put this somewhere: ${req.body.text}` });
  })
  .delete((req, res) => {
    res.json({ text: `I deleted this one : ${req.body.text}` });
  });

export { testRouter };
