import { Link } from '@chakra-ui/react'
import React from 'react'

const IsLink = ({children, to, href, ...rest}) => {
  return (
  to || href ? <Link to={to} href={href} {...rest}>
   {children}
   </Link> : {children}
  )
}

export default IsLink
