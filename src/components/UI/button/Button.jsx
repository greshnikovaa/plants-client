import React from 'react';
import styles from './Button.module.css'

const Button = ({children, className, ...props}) => {
   return (
      <div className={`${styles.btns} ${className}`} {...props}>
        {children}
      </div>
   );
};

export default Button;