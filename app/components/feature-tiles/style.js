export const column = {
    variant1: {base: 1, md: 2, xl: 3}
}
export const pxToRem = (px) => {
    // const theme = useTheme()
    // const baseFontSize = theme?.typography?.body?.fontSize || 16 // Default to 16px if theme doesn't provide a font size
    const baseFontSize =  16 // Default to 16px if theme doesn't provide a font size

    return `${px / baseFontSize}rem`
}
export const spacing = {variant1: {base: pxToRem(16)}}

export const margins = {variant1: {base: pxToRem(20)}}


export const variants ={variant1 :"variant1"};