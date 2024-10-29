import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Label } from './Label';
import { CustomButton } from './CustomButton';
import { useState } from 'react';
import { Todo } from './todos';
import { useTodo } from '@/lib/zustand/useTodo';

type Props = {
  closeBottomSheet: () => void;
  // onCreateTodo: (todo: Todo) => void;
};
export const AddTask = ({ closeBottomSheet }: Props) => {
  const [task, setTask] = useState('');
  const addTodo = useTodo((state) => state.addTodo);
  const [category, setCategory] = useState('Personal');
  const onSelectCategory = (cat: 'Personal' | 'Work') => {
    setCategory(cat);
  };
  const [description, setDescription] = useState('');
  const onCreateTodo = (todo: Todo) => {
    addTodo(todo);
    closeBottomSheet();
  };
  const newTodo: Todo = {
    name: task,
    category,
    description,
    isCompleted: false,
  };
  const isValid = task.length > 2 && description.length > 2;
  const onAddTodo = () => {
    onCreateTodo(newTodo);
    setTask('');
    setDescription('');
  };
  const onCancelTodo = () => {
    setTask('');
    setDescription('');
    closeBottomSheet();
  };
  const isActivePersonal = category === 'Personal' ? 'skyblue' : '#eee';
  const isActiveWork = category === 'Work' ? 'skyblue' : '#eee';
  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Task</Text>
      <View style={styles.divider} />
      <View style={styles.inputContainer}>
        <Label text="Title Task" />
        <TextInput
          style={styles.input}
          placeholder="Add Task Name"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
      </View>
      {/* end of input container */}
      {/** category */}
      <View style={styles.inputContainer}>
        <Label text="Category" />
        <View style={styles.buttonStyle}>
          <CustomButton
            title="Personal"
            backgroundcolor={isActivePersonal}
            onPress={() => onSelectCategory('Personal')}
          />
          <CustomButton
            title="Work"
            backgroundcolor={isActiveWork}
            onPress={() => onSelectCategory('Work')}
          />
        </View>
      </View>
      {/** end of category */}
      <View style={styles.inputContainer}>
        <Label text="Description" />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Add Task Description"
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
      </View>
      <View style={[styles.buttonStyle, { marginTop: 50 }]}>
        <CustomButton
          title="Cancel"
          backgroundcolor="skyblue"
          onPress={onCancelTodo}
        />
        <CustomButton
          title="Create"
          backgroundcolor="#eee"
          onPress={onAddTodo}
          disabled={!isValid}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  divider: {
    backgroundColor: '#ccc',
    width: '60%',
    height: 2,
    marginHorizontal: 'auto',
    marginTop: 20,
  },
  inputContainer: {
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonStyle: {
    flexDirection: 'row',
    gap: 20,
  },
  textArea: {
    height: 80,
    textAlignVertical: 'center',
  },
});
