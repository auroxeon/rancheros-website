'use client'

import { useState, useEffect } from 'react'
import styles from './LoginModal.module.css'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [isLogin, setIsLogin] = useState(true)

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button 
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>

        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${isLogin ? styles.tabActive : ''}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`${styles.tab} ${!isLogin ? styles.tabActive : ''}`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        <div className={styles.content}>
          {isLogin ? (
            <form className={styles.form} onSubmit={(e) => {
              e.preventDefault()
              // Handle login
              console.log('Login submitted')
            }}>
              <div className={styles.formGroup}>
                <label htmlFor="login-email">Email</label>
                <input
                  id="login-email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="login-password">Password</label>
                <input
                  id="login-password"
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit" className={styles.submitBtn}>
                Login
              </button>
            </form>
          ) : (
            <form className={styles.form} onSubmit={(e) => {
              e.preventDefault()
              // Handle registration
              console.log('Registration submitted')
            }}>
              <div className={styles.formGroup}>
                <label htmlFor="register-name">Name</label>
                <input
                  id="register-name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="register-email">Email</label>
                <input
                  id="register-email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="register-password">Password</label>
                <input
                  id="register-password"
                  type="password"
                  placeholder="Create a password"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="register-confirm">Confirm Password</label>
                <input
                  id="register-confirm"
                  type="password"
                  placeholder="Confirm your password"
                  required
                />
              </div>
              <button type="submit" className={styles.submitBtn}>
                Register
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

