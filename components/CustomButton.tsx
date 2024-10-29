import { Pressable, Text, View } from 'react-native';

type Props = {
  title: string;
  backgroundcolor: string;
  onPress: () => void;
  disabled?: boolean;
};
export const CustomButton = ({
  title,
  backgroundcolor,
  onPress,
  disabled,
}: Props) => {
  return (
    <Pressable
      disabled={disabled}
      style={({ pressed }) => [
        {
          backgroundColor: backgroundcolor,
          paddingHorizontal: 15,
          paddingVertical: 5,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          height: 50,
          opacity: pressed ? 0.5 : 1,
        },
        { opacity: disabled ? 0.4 : 1 },
      ]}
      onPress={onPress}
    >
      <Text style={{ fontSize: 25 }}>{title}</Text>
    </Pressable>
  );
};
