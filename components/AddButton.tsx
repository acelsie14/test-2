import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';

type AddButtonProps = {
  onPress: () => void;
};

export const AddButton = ({ onPress }: AddButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.Pressable,
        { opacity: pressed ? 0.5 : 1 },
      ]}
      onPress={onPress}
    >
      <AntDesign name="plus" color={'white'} size={30} />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  Pressable: {
    backgroundColor: 'skyblue',
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 10,
  },
});
