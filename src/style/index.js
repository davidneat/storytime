import StyleSheet from 'stilr';

const styles = StyleSheet.create({
  app: {
    background: '#ccc',
    fontFamily: 'sans-serif',
    padding: '20px'
  },
  list: {
    display: 'flex',
    flexDirection: 'column'
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '10px 0'
  },
  text: {
    flexGrow: 1
  },
  remove: {
    flexFlow: 'flex-end',
    background: '#c00',
    color: '#fff',
    marginLeft: '10px',
    padding: '5px 10px'
  }
});

const domNode = document.createElement('style');
document.head.appendChild(domNode);
domNode.textContent = StyleSheet.render();

export default () => styles;
