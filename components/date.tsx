import { Text, View } from 'react-native';

const DateTimeComponent = () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  const monthInWords = (() => {
    switch (month) {
      case 1:
        return 'January';
      case 2:
        return 'February';
      case 3:
        return 'March';
      case 4:
        return 'April';
      case 5:
        return 'May';
      case 6:
        return 'June';
      case 7:
        return 'July';
      case 8:
        return 'August';
      case 9:
        return 'September';
      case 10:
        return 'October';
      case 11:
        return 'November';
      case 12:
        return 'December';
      default:
        return 'Invalid month';
    }
  })();

  const formattedDate = `${monthInWords} ${day}, ${year} `;

  return (
    <View style={{ flexDirection: 'row', gap: 10 }}>
      <Text style={{ fontSize: 30, fontWeight: '500' }}>{formattedDate}</Text>
    </View>
  );
};

export default DateTimeComponent;
