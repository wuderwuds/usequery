import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import style from './modal.module.css'

const ModalContent = ({ children, closeModal }) => {
  useEffect(() => {
    const listner = (event) => {
      if (event.key === 'Escape') closeModal()
    }

    document.addEventListener('keydown', listner)

    return () => {
      document.removeEventListener('keydown', listner)
    }
  }, [closeModal])


  return (
    <div className={style.modal_content}>
      <button className='btn btn-primary' onClick={closeModal}>Close</button >
      {children}
    </div>
  )
}

export const Modal = ({ isOpen = false, closeModal, children }) => {
  if (!isOpen) return null;

  const handleExit = (event) => {
    if (event.target === event.currentTarget) closeModal()
  }

  return createPortal(
    <div onClick={handleExit} className={style.modal_wrapper}>
      <ModalContent closeModal={closeModal}>
        {children}
      </ModalContent>
    </div>,
    document.getElementById('modal')
  );
}

