import React from 'react'
import { AspectRatio, Box, SimpleGrid } from '@chakra-ui/react'

const Features = () => {
  return (
      <SimpleGrid columns={[2, 2, 3]} spacing={[4]} m={4}>
          {[...new Array(20)].map((_, i) => {
              return (
                  <Box bgColor={'red'}>
                      <AspectRatio ratio={1}>
                          <picture>
                              {/* Desktop Image (Large Screens) */}
                              <source
                                  media="(min-width: 1024px)"
                                  srcSet="https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/ZZTE_053/on/demandware.static/-/Sites-apparel-m-catalog/default/dw26464123/images/large/PG.60114686.JJE25XX.PZ.jpg?sw=1024&q=60"
                              />
                              {/* Tablet Image */}
                              <source
                                  media="(min-width: 768px) and (max-width: 1023px)"
                                  srcSet="https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/ZZTE_053/on/demandware.static/-/Sites-apparel-m-catalog/default/dw934a5afb/images/large/PG.60114025.JJ169XX.PZ.jpg?sw=768&q=60"
                              />
                              {/* Mobile Image */}
                              <source
                                  media="(max-width: 767px)"
                                  // style={{maxWidth: "100%", maxHeightheight: "100%"}}
                                  srcSet="https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/ZZTE_053/on/demandware.static/-/Sites-apparel-m-catalog/default/dw16c4b721/images/large/PG.10252329.JJI15XX.PZ.jpg?sw=90&sh=40&q=60"
                              />
                              {/* Fallback for older browsers */}
                              {/* style={{maxWidth: "100%", maxHeight: "100%"}}  */}
                              <img src="https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/ZZTE_053/on/demandware.static/-/Sites-apparel-m-catalog/default/dwdefb5e5d/images/large/PG.1022"
                                  alt='Responsive image'
                                //   style={{maxWidth: "100%", maxHeight: "100%"}}
                                // style={{width: "100%"}}
                              />
                          </picture>
                      </AspectRatio>
                  </Box>
              )
          })}
      </SimpleGrid>
  )
}

export default Features;
