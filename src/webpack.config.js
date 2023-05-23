const path = require('path');

module.exports = { 
  "mode": "none", 
  "entry":  { tetris: "./src/app/games/tetris/tetris.js" },
  "output": { 
    "path": __dirname + '/dist', 
    "filename": "tetris.js" 
  },
  devServer: { 
    contentBase: path.join(__dirname, 'dist') 
  }
}