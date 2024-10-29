import { Text, View } from 'react-native';

export const Greetings = () => {
  const date = new Date();
  const hours = date.getHours();

  const greeting = (() => {
    if (hours > 3 && hours < 12) {
      return 'GOOD MORNING!';
    } else if (hours >= 12 && hours < 17) {
      return 'GOOD AFTERNOON!';
    } else if (hours >= 17) {
      return 'GOOD EVENING!';
    } else {
      return null;
    }
  })();
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 300 }}>{greeting}</Text>
    </View>
  );
};
