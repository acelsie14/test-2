import { Todo } from '@/components/todos';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type store = {
  todo: Todo[];
  addTodo: (todo: Todo) => void;
  toggleTodo: (name: string) => void;
  deleteTodo: (name: string) => void;
};
export const useTodo = create<store>()(
  persist(
    (set) => ({
      todo: [],

      addTodo: (newTodo: Todo) => {
        set((state) => {
          const todoExists = state.todo.find(
            (todo) => todo.name.toLowerCase() === newTodo.name.toLowerCase()
          );
          if (todoExists) {
            Alert.alert('Error', 'Todo already exists');
            return { todo: state.todo };
          }
          return { todo: [...state.todo, newTodo] };
        });
      },
      deleteTodo: (name: string) => {
        set((state) => ({
          todo: state.todo.filter((todo) => todo.name !== name),
        }));
      },

      toggleTodo: (name: string) => {
        set((state) => ({
          todo: state.todo.map((todo) => {
            if (todo.name === name) {
              return { ...todo, isCompleted: !todo.isCompleted };
            }
            return todo;
          }),
        }));
      },
    }),
    {
      name: 'todo-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
