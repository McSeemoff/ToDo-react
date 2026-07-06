import './Field.scss'
import clsx from 'clsx'

const Field = (props) => {
  const {
    className,
    id,
    label,
    onInput,
    value,
    type = 'text',
    ref
  } = props

  return (
    <div className={clsx('field', className)}>
      <label
        className="field__label"
        htmlFor={id}
      >
          {label}
      </label>
      <input
        className="field__input"
        id={id}
        placeholder=" "
        autoComplete="off"
        type={type}
        value={value}
        onInput={onInput}
        ref={ref}
      />
    </div>
  )
}

export default Field