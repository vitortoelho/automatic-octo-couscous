import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { estilos as estilosCadastro } from './styles/cadastroStyles'; // mporta o estilo da tela que é outro arquivo, para economizar linhas

export default function TelaCadastro({ onClose, onSubmit }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const realizarCadastro = () => { // constante de cadastro de usuario
    if (!nome || !email || !senha || !confirmarSenha) {
      alert('Por favor, preencha todos os campos!');
      return;
    }
    if (!validarEmail(email)) { // utiliza a constante que verifica se o email é válido
      alert('Por favor, insira um e-mail válido!');
      return;
    }
    if (senha !== confirmarSenha) { // verifica se as senhas coincidem
      alert('As senhas não coincidem!');
      return;
    }
    const dadosUsuario = {
      nome,
      email,
      senha,
    };
    onSubmit(dadosUsuario);
  };

  const validarEmail = (email) => {// constante que verifica se o email está no formato exemplo@exemplo.com
    const padraoEmail = /\S+@\S+\.\S+/;
    return padraoEmail.test(email);
  };

  return ( // tela
    <View style={estilosCadastro.container}>
      <TextInput
        style={estilosCadastro.input}
        placeholder="Nome"
        onChangeText={texto => setNome(texto)}
        value={nome}
      />
      <TextInput
        style={estilosCadastro.input}
        placeholder="Email"
        onChangeText={texto => setEmail(texto)}
        value={email}
      />
      <TextInput
        style={estilosCadastro.input}
        placeholder="Senha"
        onChangeText={texto => setSenha(texto)}
        value={senha}
        secureTextEntry
      />
      <TextInput
        style={estilosCadastro.input}
        placeholder="Confirmar Senha"
        onChangeText={texto => setConfirmarSenha(texto)}
        value={confirmarSenha}
        secureTextEntry
      />
      <TouchableOpacity style={estilosCadastro.botao} onPress={realizarCadastro}>
        <Text style={estilosCadastro.textoBotao}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={estilosCadastro.botao} onPress={onClose}>
        <Text style={estilosCadastro.textoBotao}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}
