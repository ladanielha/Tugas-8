import React, { useState } from "react";
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Tugas04 = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const hadleAddTask = () => {
    if (task !== "") {
      setTaskList([...taskList, task]);
      setTask("");
    }
  };

  const handleDelete = (index) => {
    const taskData = [...taskList];
    taskData.splice(index, 1);
    setTaskList(taskData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>Add Task </Text>
          <TextInput
            style={styles.formControl}
            value={task}
            onChangeText={setTask}
          />
          <View style={styles.buttonGroup}>
            <TouchableOpacity onPress={hadleAddTask} style={styles.button}>
              <Text style={styles.buttonText}>Add </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.formLabel}>
          <Text style={styles.formLabel}>Task List</Text>
          {taskList.map((task, index) => (
            <View key={index} style={styles.taskItem}>
              <Text style={styles.taskText}>{task}</Text>
              <TouchableOpacity
                onPress={() => handleDelete(index)}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Delete </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  wrapper: {
    flex:1,
    backgroundColor: "grey",
    justifyContent: "center",
    height: "100%",
    gap: 24,
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: "#ff006e",
    borderColor: "#fb6f92",
    borderWidth: 1,
  },
  buttonDelete: {
    backgroundColor: "#ff006e",
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginHorizontal: 58,
    borderRadius: 20,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 24,
    fontWeight: "800",
  },
  formGroup: {
    marginBottom: 20,
    marginHorizontal: 58,
    gap: 8,
    flexDirection: "row",
  },
  formLabel: {
    
    color: "#fff",
    fontSize: 18,
    marginBottom: 5,
  },
  formControl: {
    borderWidth: 1,
    backgroundColor: "#ffe5ec",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  taskText: {
    flex: 1,
    fontSize: 16,
    color:'white'
  },
});

export default Tugas04;
