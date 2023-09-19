import { confirmPasswordReset } from "firebase/auth";
import { useState } from "react";
import { TextInput } from "react-native-paper";
import { cnpj, cpf } from "cpf-cnpj-validator";

export default function InputCCValidator() {
  const [valor, setValor] = useState("");
  const [isValid, setIsValid] = useState(false);

  function validar(valor) {
    setIsValid(valor);
    setIsValid(texto.length === 11 ? cpf.isValid(texto) : cnpj.isValid(texto));
  }

  const Masked = () => {
    
  };

  return (
    <View>
      <TextInput
        placeholder="CPF"
        value={valor}
        onCHangeText={validar}
      ></TextInput>
      {isValid ? null : <Text>Cpf/Cnpj inválido</Text>}
    </View>
  );
}
