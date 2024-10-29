import { FontAwesome } from '@expo/vector-icons';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Action } from './Actions';
import { TodoItem } from './todo';
import { useMemo } from 'react';

export type Todo = {
  name: string;
  category: string;
  isCompleted: boolean;
  description: string;
};
type Props = {
  todos: Todo[];
  // onToggleTodo: (name: string) => void;
  // onDeleteTodo: (name: string) => void;
};
export const Todos = ({ todos }: Props) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={{ marginTop: 20 }}
      data={todos}
      renderItem={({ item }) => (
        <TodoItem
          item={item}
          // onDeleteTodo={onDeleteTodo}
          // onToggleTodo={onToggleTodo}
        />
      )}
      contentContainerStyle={{ gap: 20 }}
      ListEmptyComponent={() => (
        <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 50 }}>
          YOU HAVE NO UPCOMING TASKS!!!
        </Text>
      )}
    />
  );
};
