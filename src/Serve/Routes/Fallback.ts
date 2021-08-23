import Express from 'express';
// express server
const router = Express.Router(); // routing
// al de nodige routes
router.get('*', (res : Express.Response) => {
  res.status(404).redirect('/home');
});
router.post('*', (res: Express.Response) => {
  res.status(404).redirect('/home');
});
export default router;
