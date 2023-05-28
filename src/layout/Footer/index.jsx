import styles from './footer.module.css'
import React from 'react';

const Footer = () => {
  return (
    <footer className={styles['wrapper-knjasd']}>Footer</footer>
  )
}

export const MemoFooter = React.memo(Footer)
