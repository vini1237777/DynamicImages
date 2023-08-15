import { Box, Button, Link, Stack } from '@chakra-ui/react'
import React from 'react'
// import {useIntl} from 'react-intl'

const getLinkInfo =(button)=>{
    const info = {}
    if (button.target) {info.href = button.url, info.isExternal = true, info.rel = "noopener noreferrer"}
    else {info.to = button.url}
    return info;
}



const LinkButtonsStack = ({buttons, labelKey, identifier, btnProps, direction, 
    btnStackProps, spacing}) => {
//   const intl = useIntl()
// let btnWidth = '40px'
//   if(buttons.length){
//     btnWidth = (100/buttons.length) + '%'
//   }
//   console.log(btnWidth, "tets")
  return (
   <Stack direction={direction} spacing={spacing} {...btnStackProps}>
    {buttons?.map((button, index)=>{
        return <Link {...getLinkInfo(button)} key={button[identifier] || button[labelKey] || button.label || button.title || index}>
        <Button {...btnProps} {...button?.props}>
        {/* {intl.formatMessage({defaultMessage: (button[labelKey] || button.label || button.title)})} */}
        {button[labelKey] || button.label || button.title}
        </Button>
        </Link>
    })}
</Stack>
  )
}

export default LinkButtonsStack
