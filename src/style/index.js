import StyleSheet from 'stilr';

const styles = StyleSheet.create({
  app: {
    background: '#ccc'
  },
  list: {
    display: 'flex',
    flexDirection: 'column'
  },
  listItem: {
    height: '30px'
  },
  remove: {
    background: '#c00',
    color: '#fff'
  }
});

const domNode = document.createElement('style');
document.head.appendChild(domNode);
domNode.textContent = StyleSheet.render();

export default () => styles;
