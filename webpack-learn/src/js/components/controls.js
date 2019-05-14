export class Controls {
  constructor() {
    this.render();
    this.init();
  }

  handleClick(e) {
    switch(e.target.id) {
      case 'play': return console.log('play');
      case 'stop': return console.log('stop');
      default: return;
    }

  }

  init() {
    this.handleClick = this.handleClick.bind(this);
    const container = document.querySelector('#controlsContainer');
    container.addEventListener('click', this.handleClick);
  }
  
  render() {
    const playButton = document.createElement('button');
    playButton.innerHTML = '>';
    playButton.id = 'play';
    const stopButton = document.createElement('button');
    stopButton.innerHTML = '||';
    stopButton.id = 'stop';
    const container = document.createElement('div');
    container.id = 'controlsContainer';
    container.appendChild(playButton);
    container.appendChild(stopButton);
    document.body.appendChild(container);
    
  }
}