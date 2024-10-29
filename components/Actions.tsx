import { AntDesign } from '@expo/vector-icons';
import { Text } from 'react-native';
import { Menu, MenuDivider, MenuItem } from 'react-native-material-menu';

type Props = {
  visible: boolean;
  onVisible: () => void;
  onHide: () => void;
  onToggleTodo: (name: string) => void;
  onDeleteTodo: (name: string) => void;
  name: string;
  isCompleted: boolean;
};
export const Action = ({
  onHide,
  onVisible,
  visible,
  onDeleteTodo,
  onToggleTodo,
  name,
  isCompleted,
}: Props) => {
  const text = isCompleted ? 'unset completed' : 'set completed';
  return (
    <Menu
      anchor={
        <AntDesign
          name="ellipsis1"
          size={24}
          color="black"
          onPress={onVisible}
        />
      }
      visible={visible}
      onRequestClose={onHide}
    >
      <MenuItem
        onPress={() => {
          onToggleTodo(name);
          onHide();
        }}
      >
        <Text>{text}</Text>
      </MenuItem>
      <MenuDivider />
      <MenuItem
        onPress={() => {
          onDeleteTodo(name);
          onHide();
        }}
      >
        <Text>Delete</Text>
      </MenuItem>
    </Menu>
  );
};
