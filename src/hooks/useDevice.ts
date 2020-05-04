// node_modules
import { useMediaQuery } from 'react-responsive';
// constants
import widths from '@constants/widths';

const useDevice = (deviceWidth?: number) => {
  const width = deviceWidth
    ? {
      width: deviceWidth,
    }
    : undefined;
  const isWideDesktop = useMediaQuery(
    {
      minWidth: widths.WIDE_DESKTOP,
    },
    width,
  );
  const isLargeDesktop = useMediaQuery(
    {
      minWidth: widths.LARGE_DESKTOP,
      maxWidth: widths.WIDE_DESKTOP - 1,
    },
    width,
  );
  const isDesktop = useMediaQuery(
    {
      minWidth: widths.DESKTOP,
      maxWidth: widths.LARGE_DESKTOP - 1,
    },
    width,
  );
  const isTablet = useMediaQuery(
    {
      minWidth: widths.TABLET,
      maxWidth: widths.DESKTOP - 1,
    },
    width,
  );
  const isLandscapeMobile = useMediaQuery(
    {
      minWidth: widths.LANDSCAPE_MOBILE,
      maxWidth: widths.TABLET - 1,
    },
    width,
  );
  const isMobile = useMediaQuery(
    {
      minWidth: widths.MOBILE,
      maxWidth: widths.LANDSCAPE_MOBILE - 1,
    },
    width,
  );
  const isSmallMobile = useMediaQuery(
    {
      maxWidth: widths.MOBILE - 1,
    },
    width,
  );

  const greaterWideDesktop = isWideDesktop;
  const greaterLargeDesktop = greaterWideDesktop || isLargeDesktop;
  const greaterDesktop = greaterLargeDesktop || isDesktop;
  const greaterTablet = greaterDesktop || isTablet;
  const greaterLandscapeMobile = greaterTablet || isLandscapeMobile;
  const greaterMobile = greaterLandscapeMobile || isMobile;
  const greaterSmallMobile = greaterMobile || isSmallMobile;

  return {
    isWideDesktop,
    isLargeDesktop,
    isDesktop,
    isTablet,
    isLandscapeMobile,
    isMobile,
    isSmallMobile,

    greaterWideDesktop,
    greaterLargeDesktop,
    greaterDesktop,
    greaterTablet,
    greaterLandscapeMobile,
    greaterMobile,
    greaterSmallMobile,
  };
};

export default useDevice;
