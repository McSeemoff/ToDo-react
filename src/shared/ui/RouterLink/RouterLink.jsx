import {BASE_URL} from '@/shared/constants'

const RouterLink = (props) => {
  const {
    to,
    children,
    ...rest
  } = props

  const handelClick = (event) => {
    event.preventDefault()
    window.history.pushState({}, '', to)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  return (
    <a
      href={`${BASE_URL}${to}`} onClick={handelClick} {...rest}
    >
      {children}
    </a>
  )
}

export default RouterLink