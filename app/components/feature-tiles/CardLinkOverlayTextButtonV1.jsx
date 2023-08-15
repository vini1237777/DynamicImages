import { AspectRatio, Box, Link, Text } from '@chakra-ui/react';
import React from 'react'
import CardOverlay from './CardOverlayTextButtonV1';

const CardLinkOverlay = ({ aspectRatio, children, styles, ...rest }) => {
  return (
    <Link>
     <CardOverlay />
     </Link>
  )
}

CardLinkOverlay.propTypes = {
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

export default CardLinkOverlay;
