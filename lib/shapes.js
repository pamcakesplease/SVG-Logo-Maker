class shape {
    constructor() {
      this.color = "";
    }

setColor(colorVar) {
      this.color = colorVar;
    }
  }

  class triangle extends shape {
    render() {
    return `<polygon points="250,60 100,400 400,400" fill="$(this.color)"/>`;
    }
  }

  class circle extends shape {
    render() {
        return `<circle r="45" cx="50" cy="50" fill="$(this.color)"/>`;
        }
  }
  
  class square extends shape {
    render () {
        return `<rect x="100" y="150" rx="0" ry="0" width="400" height="300" fill="$(this.color)"/>`;
    }
  }

  module.exports = { triangle, circle, square }