import './Button.scss'
import clsx from 'clsx'

const Button = (props) => {
  const {
    className = '',
    type = 'button',
    children,
    onClick
  } = props

  return (
    <button
      className={clsx('button', className)}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button