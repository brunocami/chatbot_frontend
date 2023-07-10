import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault();
    
    setErrors(validate(values))
    // VERIFICAR SI EL MAIL DEL USUARIO QUE SE ESTA REGISTRANDO YA EXISTE
    const res = await fetch(`http://localhost:8000/login`);

    const data = await res.json();

    let usuarioExistente = false;

    data.map(email => {
      if (email[2] === values.email) {
        usuarioExistente = true;
      }
      return email
    });

    if (usuarioExistente) {
      alert('El usuario ya existe');
    } else {
      setIsSubmitting(true)
    }
  }

  function generarIDUsuario() {
    let id = '';
    const digitos = '0123456789';
  
    const timestamp = new Date().getTime(); // Obtener la fecha actual en milisegundos
  
    for (let i = 0; i < 15; i++) {
      const indiceAleatorio = Math.floor((Math.random() + timestamp) * digitos.length);
      id += digitos[indiceAleatorio % digitos.length];
    }
  
    return id;
  }

  
  
  useEffect(() => {
    
    if (isSubmitting) {
      console.log(generarIDUsuario())
      const randomId = generarIDUsuario()
      // Si el usuario no existe, puedes proceder con el POST
      fetch(`http://localhost:8000/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id_user: randomId,
          name: values.username,
          email: values.email,
          password: values.password
        })
      });
      // GUARDAR LAS NOTICIAS EN EL LOCAL STORAGE
      sessionStorage.setItem('user', JSON.stringify(values));
    }

  }, [isSubmitting]);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback()
    }
  }, [errors])

  return { handleChange, values, handleSubmit, errors }
};

export default useForm;