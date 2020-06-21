// Fullpagejs responsiveWidth slide flicker fix
exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition
}) => {

  if (location.hash) {
    return false;
  }

  return true;
};
