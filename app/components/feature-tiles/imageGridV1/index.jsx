import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import DesktopTabletMobileImage from '../../desktop-tablet-mobile-image/Index'
import CardLinkOverlay from '../CardLinkOverlayTextButtonV1'
import { column, spacing, margins, variants } from '../style'

    // variant=variants.variant1,
    // images={}, 
    // altText="", 
    // imageStyles={}, 
    // loading='lazy', 
    // widths, 
    // breakpoints={defaultBreakpoints}, 
    // imageVariant=variants.variant1,
    // as
const ImageGrid = ({gridVariants={column:variants.variant1, 
    spacing:variants.variant1, margins:variants.variant1, },
     styles={}, data, uniqueKeys={} , aspectRatio, customProps={}}) => {
  return (
      <SimpleGrid 
       columns={column[gridVariants.column]}
       spacing={ spacing[gridVariants.spacing]} 
       m={ margins[gridVariants.margins] ||  margins.variant1} 
       {...styles.grid}>
          {data?.map((item, i) => {
              return (
                  <CardLinkOverlay
                  aspectRatio={aspectRatio}  
                  key={item[uniqueKeys?.dataItem || "id"] } 
                  data={item || {}}
                  customProps={customProps?.btnStackProps}
                  styles={styles}
                  btnIdentifier={uniqueKeys?.button}
                  linkProps={{}}
                  > 
                  <DesktopTabletMobileImage 
                  altText={item?.altText || ''} 
                  images={item?.images || {}}
                  imageStyles={styles.image}
                  />
                  </CardLinkOverlay>
              )
          })}
      </SimpleGrid>
  )
}
ImageGrid.propTypes = {
  gridVariants: PropTypes.shape({
    column: PropTypes.oneOf(variants.variant1), 
    spacing: PropTypes.oneOf(variants.variant1),
    margins: PropTypes.oneOf(variants.variant1),
  }),
  styles: PropTypes.shape({
    grid: PropTypes.object,
    gridItem: PropTypes.object,
    aspect: PropTypes.object,
    overlay: PropTypes.object,
    title: PropTypes.object,
    image: PropTypes.object,
  }),
  data: PropTypes.arrayOf(PropTypes.object),
  uniqueKeys: PropTypes.shape({
    dataItem: PropTypes.string,
    button: PropTypes.string
  }),
  aspectRatio: PropTypes.number,
//   cardOverlay: PropTypes.shape({})
 customProps: PropTypes.shape({
    buttonStackProps: PropTypes.shape({
      direction: PropTypes.oneOf('row', 'column'),
      labelKey: PropTypes.string,
      btnProps: PropTypes.object,
      btnStackProps: PropTypes.object,
      spacing: PropTypes.any
    })
  })
};

// cardStyles, aspectStyle, aspectRatio, direction, 
//   identifier, btnStackProps, btnProps, spacing, labelKey,
//    overlayStyles, children, titleProps, data


  ImageGrid.defaultProps = {
  gridVariants: {
    column: 'variant1',
    spacing: 'variant1',
    margins: 'variant1',
  },
  styles: {},
  data: [],
  uniqueKeys: {},
};
export default ImageGrid
