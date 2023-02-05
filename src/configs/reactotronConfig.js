import Reactotron from 'reactotron-react-native';

const reactotron = Reactotron.configure({
  name: 'RN SQLITE Example',
  host: '192.168.1.12',
}).useReactNative();

if (reactotron) {
  reactotron.connect();
  reactotron.clear();
}
export default reactotron;
console.tron = reactotron;
