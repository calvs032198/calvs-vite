type logoType = {
    mySql: string
    js: string
    java: string
    mui: string
    reactQuery: string
    react: string
    typeScript: string
    spring: string
    tailwind: string
    node: string
}
export const images = {
    profile: '../../src/assets/images/profile.jpg',
    toga: '../../src/assets/images/toga.jpg',
    hooli: '../../src/assets/images/hooli.jpeg',
    rp: '../../src/assets/images/rp-logo.png',
    logo: {
        mySql: '../../src/assets/images/mysql-logo.png',
        js: '../../src/assets/images/js-logo.png',
        java: '../../src/assets/images/java-logo.png',
        mui: '../../src/assets/images/mui-logo.webp',
        reactQuery: '../../src/assets/images/react-query.png',
        react: '../../src/assets/images/react-logo.webp',
        typeScript: '../../src/assets/images/typescript.png',
        spring: '../../src/assets/images/spring-logo.png',
        tailwind: '../../src/assets/images/Tailwind_CSS_Logo.svg.png',
        node: '../../src/assets/images/node-logo.png',
    } as logoType,
}
export const logoAsArray = Object.keys(images.logo).map(
    (item) => images.logo[item as keyof logoType]
)
type certs = {
    bit: string
    pl: string
    dl: string
    aws: string
    blending: string
    gmaps: string
    iT: string
    journey: string
    jsEs6: string
    keeping: string
}
export const docs = {
    resume: '../../public/cv_calvs.pdf',
    certificates: {
        bit: '../../public/js-bit.png',
        pl: '../../public/pl.pdf',
        dl: '../../public/dl.pdf',
        aws: '../../public/aws.pdf',
        blending: '../../public/blending.pdf',
        gmaps: '../../public/googlemaps.pdf',
        iT: '../../public/it-career.JPG/',
        journey: '../../public/journey.png',
        jsEs6: '../../public/js-es6.pdf',
        keeping: '../../public/keeping-htm.pdf',
    } as certs,
}

export const certificatesArray = Object.keys(docs.certificates).map(
    (key) => docs.certificates[key as keyof certs]
)
