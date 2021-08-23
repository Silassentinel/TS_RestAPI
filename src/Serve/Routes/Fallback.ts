import Express from 'express';
// express server
const router = Express.Router(); // routing
// al de nodige routes
router.get('*', (req, res) => {
  res.status(404).redirect('/home');
});
router.post('*', (req, res) => {
  res.status(404).redirect('/home');
});
export default router;
