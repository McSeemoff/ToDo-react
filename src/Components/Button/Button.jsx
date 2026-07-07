import './Button.scss'
import clsx from 'clsx'

const Button = (props) => {
  const {
    className = '',
    type = 'button',
    children,
    isDisabled,
    onClick
  } = props

  return (
    <button
      className={clsx('button', className)}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button