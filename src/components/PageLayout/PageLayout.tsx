import { FC } from "react"

interface Props{
    children: JSX.Element,
    className?: string
}

export const PageLayout:FC<Props> = ({children, className = " "}) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}>
        {children}
    </div>
  )
}

