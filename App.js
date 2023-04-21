import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, ScrollView,} from 'react-native';

const App = () => {
  const [nomeDoador, setNomeDoador] = useState('');
  const [tipoSanguineo, setTipoSanguineo] = useState('');
  const [contatoDoador, setContatoDoador] = useState('');
  const [nomeReceptor, setNomeReceptor] = useState('');
  const [cidade, setCidade] = useState('');
  const [hospital, setHospital] = useState('');
  const [pedidos, setPedidos] = useState([]);

  const handleDoar = () => {
    const novoPedido = {
      nomeReceptor,
      cidade,
      hospital,
      tipoSanguineo,
    };
    setPedidos([...pedidos, novoPedido]);
    setNomeReceptor('');
    setCidade('');
    setHospital('');
    setTipoSanguineo('');
  };

  return (
    <ScrollView>
      <View>
        <Text style={{ fontSize: 30, marginTop: 50, textDecorationLine: 'underline' }}>DOE SANGUE</Text>
        <Text style={{ fontSize: 20, marginTop: 20 }}>Dados do Doador:</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ flex: 1 }}>Nome:</Text>
          <TextInput
            style={{ flex: 2, backgroundColor: '#f0f0f0', marginTop: 7}}
            value={nomeDoador}
            onChangeText={setNomeDoador}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ flex: 1 }}>Tipo Sanguíneo:</Text>
          <TextInput
            style={{ flex: 2, backgroundColor: '#f0f0f0', marginTop: 7 }}
            value={tipoSanguineo}
            onChangeText={setTipoSanguineo}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ flex: 1 }}>Contato:</Text>
          <TextInput
            style={{ flex: 2, backgroundColor: '#f0f0f0', marginTop: 7 }}
            value={contatoDoador}
            onChangeText={setContatoDoador}
          />
        </View>
        <Text style={{ fontSize: 20, marginTop: 20 }}>Dados do Receptor:</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ flex: 1 }}>Nome:</Text>
          <TextInput
            style={{ flex: 2, backgroundColor: '#f0f0f0', marginTop: 7 }}
            value={nomeReceptor}
            onChangeText={setNomeReceptor}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ flex: 1 }}>Cidade:</Text>
          <TextInput
            style={{ flex: 2, backgroundColor: '#f0f0f0', marginTop: 7 }}
            value={cidade}
            onChangeText={setCidade}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ flex: 1 }}>Hospital:</Text>
          <TextInput
            style={{ flex: 2, backgroundColor: '#f0f0f0', marginTop: 7 }}
            value={hospital}
            onChangeText={setHospital}
          />
        </View>
        <Button title="Doar" onPress={handleDoar} />
        <Text style={{ fontSize: 20, marginTop: 20 }}>Pedidos:</Text>
        <FlatList
          data={pedidos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{ padding: 10 }}>
              <Text>Nome do Receptor: {item.nomeReceptor}</Text>
              <Text>Cidade: {item.cidade}</Text>
              <Text>Hospital: {item.hospital}</Text>
              <Text>Tipo Sanguíneo: {item.tipoSanguineo}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default App;