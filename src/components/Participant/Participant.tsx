import {
  Text,
  View,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import { styles } from "./styles";

interface ParticipantProps {
  name: string;
  onRemove: (name: string) => void;
}

export function Participant({ name, onRemove }: ParticipantProps) {
  return (
    <View style={styles.container}>
      <View style={styles.name}>
        <Text>{name}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => onRemove(name)}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
