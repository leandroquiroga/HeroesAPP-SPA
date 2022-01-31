import { useState } from "react"


export const useForm = ( initialValue = {} ) => {
  const [state, setState] = useState(initialValue);

  const resetForm = () => setState(initialValue);


  const handleChangeText = ({ target }) => {

    setState({
      ...state,
      [target.name]: target.value,
    });

  };
  return [state, handleChangeText, resetForm];
}