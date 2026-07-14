import './Field.scss'
import clsx from 'clsx'

const Field = (props) => {
  const {
    className,
    id,
    label,
    onInput,
    value,
    error,
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
        className={clsx('field__input', error ? 'is-invalid' : '')}
        id={id}
        placeholder=" "
        autoComplete="off"
        type={type}
        value={value}
        onInput={onInput}
        ref={ref}
      />
      {error && (
        <span className="field__error" title={error}>{error}</span>
      )}
    </div>
  )
}

export default Field