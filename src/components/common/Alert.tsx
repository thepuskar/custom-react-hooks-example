interface IAlertProps {
  message: string
  type?: 'info' | 'warning' | 'error' | 'default'
}
export const Alert = (props: IAlertProps) => {
  const className = ' border px-4 py-3 rounded relative'
  const alertType = (): string => {
    switch (props.type) {
      case 'error':
        return 'bg-red-100 border-red-400 text-red-700' + className
      case 'info':
        return 'bg-green-100 border-green-400 text-green-700' + className
      case 'warning':
        return 'bg-yellow-100 border-yellow-400 text-yellow-700' + className
      default:
        return 'bg-blue-100 border-blue-400 text-blue-700' + className
    }
  }
  return (
    <div className={alertType()} role="alert">
      <span className="block sm:inline">{props?.message}</span>
    </div>
  )
}

Alert.defaultProps = {
  type: 'default',
}
