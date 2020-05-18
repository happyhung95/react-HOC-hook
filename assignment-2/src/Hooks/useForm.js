import {useState} from 'react';

const useForm = () => {
  const [state,setState] = useState('');

  const handleChange = e => {
    e.persist();
    setState(e.target.value)
  }
  return [state,handleChange]
}

export default useForm;