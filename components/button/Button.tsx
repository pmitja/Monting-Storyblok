import Link from 'next/link'

interface ButtonProps {
  children?: React.ReactNode
  onClick?: () => void
  to: string
}

const Button: React.FC<ButtonProps> = ({ children, onClick, to }) => {
  return (
    <Link
      href={to}
      className="focus:shadow-outline mr-6 inline-flex h-12 max-w-fit items-center justify-center rounded bg-red-700 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-red-900 focus:outline-none"
    >
      {children}
    </Link>
  )
}

export default Button
