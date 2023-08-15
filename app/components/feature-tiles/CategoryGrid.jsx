import React from 'react'
import ImageGrid from './imageGridV1'
import { variant } from './style'
const images = {
    desktop: {
        src: 'https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/ZZRF_001/on/demandware.static/-/Sites-apparel-m-catalog/default/dwa7c11183/images/large/B0574182_001_0.jpg?sw=1024&q=60 1024w'
    },
    tablet: {
        src: 'https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/ZZRF_001/on/demandware.static/-/Sites-apparel-m-catalog/default/dwa7c11183/images/large/B0574182_001_0.jpg?sw=1024&q=60 1024w'
    },
    mobile: {
        src: 'https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/ZZRF_001/on/demandware.static/-/Sites-apparel-m-catalog/default/dw1cb9026d/images/large/B0274213_EDS_0.jpg?sw=375&q=60 375w, https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/ZZRF_001/on/demandware.static/-/Sites-apparel-m-catalog/default/dw1ed83c8e/images/large/B0574208_CFF_L1.jpg?sw=120&q=60 120w,'
    }
}
const data = [{ buttons:[{label:'button1'}, {label:'button2'}, {label:'button3'}], images, title: 'This is testing data'}]

const CategoryGrid = ({}) => {
  return (
 <ImageGrid data= {data} aspectRatio={1} />
  )
}

export default CategoryGrid
