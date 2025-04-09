import localFont from 'next/font/local';

export const degular = localFont({
  src: [
    {
      path: './fonts/DegularDisplay-Black.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/DegularDisplay-BlackItalic.otf',
      weight: '900',
      style: 'italic',
    },
    {
      path: './fonts/DegularDisplay-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/DegularDisplay-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/DegularDisplay-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/DegularDisplay-SemiboldItalic.otf',
      weight: '600',
      style: 'italic',
    },
    {
      path: './fonts/DegularDisplay-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/DegularDisplay-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/DegularDisplay-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/DegularDisplay-RegularItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/DegularDisplay-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/DegularDisplay-LightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/DegularDisplay-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/DegularDisplay-ThinItalic.otf',
      weight: '100',
      style: 'italic',
    },
  ],
  display: 'swap'
})