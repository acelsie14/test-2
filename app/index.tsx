import { AddButton } from '@/components/AddButton';
import { AddTask } from '@/components/Addtask';
import { CustomButton } from '@/components/CustomButton';
import DateTimeComponent from '@/components/date';
import { Greetings } from '@/components/greeting';
import { Todo, Todos } from '@/components/todos';
import { useTodo } from '@/lib/zustand/useTodo';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { useMemo, useRef, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  const BottomSheetRef = useRef<BottomSheet>(null);
  const todos = useTodo((state) => state.todo);
  // const [todos, setTodos] = useState<Todo[]>([]);
  const [category, setCategory] = useState('Personal');
  const snapPoints = useMemo(() => ['50%', '70%'], []);
  const filteredTodos = useMemo(
    () =>
      todos.filter(
        (todo) => todo.category.toLowerCase() === category.toLowerCase()
      ),
    [todos, category]
  );
  const openBottomSheet = () => {
    BottomSheetRef.current?.expand();
  };
  const closeBottomSheet = () => {
    BottomSheetRef.current?.close();
  };
  // const onCreateTodo = (todo: Todo) => {
  //   setTodos((prevTodos) => {
  //     const todoExists = prevTodos.find(
  //       (t) => t.name.toLowerCase() === todo.name.toLowerCase()
  //     );
  //     if (todoExists) {
  //       Alert.alert('Error', 'Todos already exists', [
  //         {
  //           text: 'OK',
  //         },
  //         {
  //           text: 'Cancel',
  //         },
  //       ]);
  //       return prevTodos;
  //     }
  //     return [...prevTodos, todo];
  //   });
  //   closeBottomSheet();
  // };
  // const onDeleteTodo = (name: string) => {
  //   setTodos((prevTodo) => prevTodo.filter((todo) => todo.name !== name));
  // };
  // const onToggleTodo = (name: string) => {
  //   const todosToAlter = [...todos];
  //   const todoIndex = todosToAlter.findIndex((todo) => todo.name === name);
  //   todosToAlter[todoIndex].isCompleted = !todosToAlter[todoIndex].isCompleted;
  //   setTodos(todosToAlter);
  //   {
  //     /**search for another way to do it */
  //   }
  // };
  const isActivePersonal = category === 'Personal' ? 'skyblue' : '#eee';
  const isActiveWork = category === 'Work' ? 'skyblue' : '#eee';

  return (
    <View style={styles.parentView}>
      <View style={styles.viewForAllDates}>
        <Greetings />
        <DateTimeComponent />
      </View>
      <View style={styles.card}>
        <Text
          style={{
            fontSize: 27,
            color: 'white',
            fontWeight: '600',
            fontStyle: 'italic',
          }}
        >
          Keep it up!! complete your task. You are almost there!
        </Text>
      </View>
      <View style={styles.buttonStyle}>
        <CustomButton
          title="Personal"
          backgroundcolor={isActivePersonal}
          onPress={() => setCategory('Personal')}
        />
        <CustomButton
          title="Work"
          backgroundcolor={isActiveWork}
          onPress={() => setCategory('Work')}
        />
      </View>
      <Todos
        todos={filteredTodos}
        // onDeleteTodo={onDeleteTodo}
        // onToggleTodo={onToggleTodo}
      />
      <AddButton onPress={openBottomSheet} />
      <BottomSheet
        ref={BottomSheetRef}
        snapPoints={snapPoints}
        index={-1}
        enablePanDownToClose
      >
        <BottomSheetScrollView style={{ flex: 1 }}>
          <AddTask
            closeBottomSheet={closeBottomSheet}
            // onCreateTodo={onCreateTodo}
          />
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  parentView: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 10,
  },

  card: {
    marginTop: 20,
    height: 150,
    width: '100%',
    backgroundColor: 'skyblue',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonStyle: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 20,
  },
  viewForAllDates: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
    alignItems: 'flex-start',
    gap: 5,
    paddingVertical: 10,
  },
});
