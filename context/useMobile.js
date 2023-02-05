import React from 'react';

const IsMobileContext = React.createContext();

export function MobileProvider(props) {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth);

  const onresize = () => {
    setIsMobile(window.innerWidth);
  };
  React.useEffect(() => {
    window.addEventListener('resize', onresize);
    return () => {
      window.removeEventListener('resize', onresize);
    };
  });
  const value = React.useMemo(() => {
    return {
      isMobile,
    };
  }, [isMobile]);

  return <IsMobileContext.Provider value={value} {...props} />;
}

export function useIsMobile() {
  const context = React.useContext(IsMobileContext);
  if (!context) {
    throw new Error('Error');
  }
  return context;
}
