import { StyleSheet, Text, View } from 'react-native';
import { Action } from './Actions';
import { FontAwesome } from '@expo/vector-icons';
import { Todo } from './todos';
import { useState } from 'react';
import { useTodo } from '@/lib/zustand/useTodo';

type Props = {
  item: Todo;
  // onToggleTodo: (name: string) => void;
  // onDeleteTodo: (name: string) => void;
};
export const TodoItem = ({ item }: Props) => {
  const onDeleteTodo = useTodo((state) => state.deleteTodo);
  const onToggleTodo = useTodo((state) => state.toggleTodo);
  const [visible, setVisible] = useState(false);
  const onVisible = () => setVisible(true);
  const onHide = () => setVisible(false);
  return (
    <View style={styles.itemContainer}>
      <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
        <View style={styles.circle}>
          {item.isCompleted && (
            <FontAwesome name="check" color="white" size={20} />
          )}
        </View>
        <Text style={{ fontSize: 20 }}>{item.name}</Text>
      </View>
      <Action
        onHide={onHide}
        onVisible={onVisible}
        visible={visible}
        onDeleteTodo={onDeleteTodo}
        onToggleTodo={onToggleTodo}
        name={item.name}
        isCompleted={item.isCompleted}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#eee',
  },
  circle: {
    backgroundColor: '#ccc',
    width: 20,
    height: 20,
    borderRadius: 50,
  },
});
