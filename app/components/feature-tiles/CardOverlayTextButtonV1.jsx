import { AspectRatio, Box, Text } from '@chakra-ui/react';
import React from 'react'
import LinkButtonsStack from './imageGridV1/LinkButtonsStack';

const Overlay = ({data, customProps, btnIdentifier}) => { 
  return <Box w={'100%'} position = {'absolute'} {...styles?.overlay}>
              <Text {...styles?.title}>{data.title}</Text>
            <LinkButtonsStack 
            buttons={data.buttons}
            direction={ customProps.direction || 'row'}
            identifier= {btnIdentifier}
            btnStackProps = {customProps.btnStackProps}
            btnProps= {customProps.btnProps}
            spacing= {customProps.spacing}
            labelKey= {customProps.labelKey}
            />
            </Box>
}

const CardOverlay = ({ aspectRatio, children, styles, ...rest }) => {
  return (
      <Box position = {'relative'} {...styles.card}>
          {aspectRatio ? 
          <AspectRatio ratio={aspectRatio} {...styles?.aspect}>
            <Box>
             {children}
             <Overlay {...rest}/>
            </Box>
          </AspectRatio>
          : <>
            {children}
             <Overlay {...rest}/>
           </>}
      </Box>
  )
}

CardOverlay.propTypes = {
  styles: PropTypes.shape({
    aspect: PropTypes.object,
    overlay: PropTypes.object,
    title: PropTypes.object
  }),
  data: PropTypes.arrayOf(PropTypes.object),
  btnIdentifier: PropTypes.string,
  aspectRatio: PropTypes.number,
  customProps: PropTypes.shape({
    buttonStackProps: PropTypes.shape({
      direction: PropTypes.oneOf('row', 'column'),
      labelKey: PropTypes.string,
      btnProps: PropTypes.object,
      btnStackProps: PropTypes.object,
      spacing: PropTypes.any
    })
  }),
  children: PropTypes.any,
};

export default CardOverlay;
