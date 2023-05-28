import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import styles from './index.module.css'

const todoSchema = Yup.object({
  title: Yup.string()
    .min(4, 'Слишком коротко!')
    .max(25, 'Слишком длинно!')
    .required('Обязательное!'),
  description: Yup.string()
    .min(10, 'Слишком коротко!')
    .max(120, 'Слишком длинно!'),

});

export const UpdateForm = () => {
  const navigate = useNavigate()
  const { idOfTodo } = useParams()
  // const { getCurrentTodo, updateTodo } = useContext(TodosHelpersContext)

  const onSubmit = (values) => {
    // updateTodo(idOfTodo, values)

    return navigate('..', { relative: 'path' })
  }

  // const initialValues = getCurrentTodo(idOfTodo)

 

  return (
    <div>
      <Formik
        // initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={todoSchema}
      >
        <Form className="d-flex justify-content-center flex-column">
          <Field name="title" placeholder="Название*" type='text' />
          <ErrorMessage name="title" className={styles.error} component={'p'} />

          <Field name="description" placeholder="Описание" type='text' />
          <ErrorMessage name="description" className={styles.error} component={'p'} />

          <button type="submit" className="btn btn-success">Изменить</button>
        </Form>
      </Formik>
    </div>
  )
}
