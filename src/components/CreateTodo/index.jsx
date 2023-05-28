
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './index.module.css'
import { v4 as uuidv4 } from 'uuid';
import { useMutation } from '@tanstack/react-query';

const todoSchema = Yup.object({
  title: Yup.string()
    .min(4, 'Слишком коротко!')
    .max(25, 'Слишком длинно!')
    .required('Обязательное!'),
  description: Yup.string()
    .min(10, 'Слишком коротко!')
    .max(120, 'Слишком длинно!'),

});

export const CreateTodo = ({ closeModal }) => {

  const {mutateAsync} = useMutation({
mutationFn: async (newTodo) => {
  const res = await fetch('http://localhost:3007/todo', {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(newTodo)
  }) 
  return res
}

})

  const onSubmit = async (values) => {
    const newTodo = {
      id: uuidv4(),
      status: false,
      ...values,
    }

    const res = await mutateAsync(newTodo)
    
    // const res = await fetch('http://localhost:3007/todo', {
    //   method: 'POST',
    //   headers: {
    //     "Content-type": "application/json"
    //   },
    //   body: JSON.stringify(newTodo)
    // })
   
    if (res.ok) {
      return closeModal()
    }

    alert('не удалось')
    
  }

  const initialValues = {
    title: '',
    description: '',
   
  }

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={todoSchema}
      >
        <Form className="d-flex justify-content-center flex-column">
          <Field name="title" placeholder="Название*" type='text' />
          <ErrorMessage name="title" className={styles.error} component={'p'} />

          <Field name="description" placeholder="Описание" type='text' />
          <ErrorMessage name="description" className={styles.error} component={'p'} />

           <button type="submit" className="btn btn-success">Добавить</button>
        </Form>
      </Formik>
    </div>
  )
}
