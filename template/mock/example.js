module.exports = {
  'GET /api/example': function(req, res) {
    res.json({
      success: true,
      meta: {
        code: 200,
      },
      data: {
        name: 'expample',
        age: 18,
      },
    });
  },
};
