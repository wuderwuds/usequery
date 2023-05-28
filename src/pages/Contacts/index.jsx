import { Link } from 'react-router-dom'

export const Contacts = () => {

  return (
    <>
      <h2>Contacts</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an <Link to='/todos'>unknown</Link> printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was <a href='https://www.lipsum.com/'>popularised</a> in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </>
    // <Navigate to="/dashboard" /> // navigate('/dashboard')
  )
}
