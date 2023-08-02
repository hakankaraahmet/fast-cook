const LoadingSkeleton = () => {
  const isDarkTheme = global?.window?.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  return (
   <div>loading...</div>
  );
};

export default LoadingSkeleton;
