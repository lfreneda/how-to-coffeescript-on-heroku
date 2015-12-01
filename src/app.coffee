#!/usr/bin/env coffee

http = require 'http'

http.createServer (request, response) ->
  response.writeHead 302, "Location":"https://github.com/lfreneda/how-to-coffeescript-on-heroku"
  response.end '\n'

.listen process.env.PORT or 5000
