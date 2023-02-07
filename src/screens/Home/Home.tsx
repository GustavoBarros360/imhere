import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [typedName, setTypedName] = useState<string>();

  const handleParticipantAdd = (name: string) => {
    if (participants.includes(name ?? "")) {
      return Alert.alert(
        "Participante Existe",
        "Já existe um participante com esse nome na lista"
      );
    }
    setParticipants((prev) => [...prev, name]);
    setTypedName(undefined);
  };

  const handleParticipantRemove = (name: string) => {
    const removeParticipant = () => {
      const filteredParticipants = participants.filter(
        (participant) => participant !== name
      );
      setParticipants(filteredParticipants);
    };
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: removeParticipant,
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.event}>Nome do Evento</Text>
      <Text style={styles.date}>14 de Janeiro de 2023</Text>
      <View style={{ flexDirection: "row", marginTop: 16, marginBottom: 32 }}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          onChangeText={setTypedName}
          value={typedName}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleParticipantAdd(typedName ?? "")}
        >
          <Text>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={({ item, index }) => (
          <Participant
            key={`${item}-${index}`}
            name={item}
            onRemove={handleParticipantRemove}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Adicione participantes ao evento
          </Text>
        )}
      />
    </View>
  );
}
