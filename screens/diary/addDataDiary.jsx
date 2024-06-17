import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { useState } from "react";
import Menu from "../../components/Menu.jsx";
import { Ionicons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const AddDataDiary = ({ navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [journalContent, setJournalContent] = useState("");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date.toLocaleDateString());
    hideDatePicker();
  };

  const handleSave = () => {
    navigation.navigate("Diary");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack("diaryScreen")}>
          <Ionicons name="arrow-back-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity style={styles.dateButton} onPress={showDatePicker}>
          <Text style={styles.dateButtonText}>
            {selectedDate ? selectedDate : "Date"}
          </Text>
        </TouchableOpacity>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />

        <Text style={styles.sectionTitle}>Contenu du journal</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Ecrire votre ressenti, votre journée ..."
          placeholderTextColor="#888"
          multiline={true}
          value={journalContent}
          onChangeText={setJournalContent}
        />

        <Text style={styles.sectionTitle}>Humeur</Text>
        <View style={styles.moodContainer}>
          <TouchableOpacity style={styles.moodButton}>
            <Text style={styles.moodButtonText}>Triste</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.moodButton}>
            <Text style={styles.moodButtonText}>Anxieuse</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.moodButton}>
            <Text style={styles.moodButtonText}>Joyeuse</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.moodButton}>
            <Text style={styles.moodButtonText}>En colère</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Enregistrer</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.footer}>
        <Menu navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#120B2D",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#3F317E",
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexGrow: 1,
    justifyContent: "space-between",
  },
  dateButton: {
    backgroundColor: "#7259E4",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  dateButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: 10,
    padding: 15,
    height: 150,
    textAlignVertical: "top",
    marginBottom: 20,
  },
  moodContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  moodButton: {
    backgroundColor: "#7259E4",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
  moodButtonText: {
    color: "#fff",
    fontSize: 14,
  },
  saveButton: {
    alignSelf: "center",
    backgroundColor: "#00E0FF",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  saveButtonText: {
    color: "#120B2D",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    backgroundColor: "#3F317E",
  },
});

export default AddDataDiary;
