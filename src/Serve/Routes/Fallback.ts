const express = require('express');
// express server
const router = express.Router(); // routing
// al de nodige routes
router.get('*', (req, res) => {
  res.status(404).redirect('/home');
});
router.post('*', (req, res) => {
  res.status(404).redirect('/home');
});
export default router;
