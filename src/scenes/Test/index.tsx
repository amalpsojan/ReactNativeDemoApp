import React from 'react';
import {Text, View, SafeAreaView, TextInput, StyleSheet} from 'react-native';

export default function TestScreen() {
  let [reminders, setReminders] = React.useState([]);
  const [text, onChangeText] = React.useState('');

  React.useEffect(() => {
    fetchReminders();
  }, []);

  const fetchReminders = () => {
    fetch('/api/reminders')
      .then(res => res.json())
      .then(json => setReminders(json.reminders));
  };

  const onEndEditing = () => {
    console.log('onEndEditing...');
    fetch('/api/reminders', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({text}),
    })
      .then(() => onChangeText(''))
      .finally(() => {
        fetchReminders();
      });
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.container}>
        {reminders.map((reminder: {id: number; text: string}) => (
          <Text key={reminder.id}>
            {reminder.id} {reminder.text}
          </Text>
        ))}

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          onEndEditing={onEndEditing}
          value={text}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%%',
  },
});
