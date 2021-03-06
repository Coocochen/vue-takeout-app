const data = require('./data2.json')
const goods = data.goods
const create = data.create
const detail = data.detail
const cancel = data.cancel
const list = data.list

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  devServer: {
    before(app) {
      app.get('/sell/buyer/product/list', function(req, res) {
        res.json(goods)
      })
      app.post('/sell/buyer/order/create', function(req, res) {
        res.json(create)
      })
      app.get('/sell/buyer/order/detail', function(req, res) {
        res.json(detail)
      })
      app.post('/sell/buyer/order/cancel', function(req, res) {
        res.json(cancel)
      })
      app.get('/sell/buyer/order/list', function(req, res) {
        res.json(list)
      })
    },
    disableHostCheck: true
  }
}