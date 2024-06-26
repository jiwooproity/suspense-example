type LocationHooksType = () => [() => void];

const useLocation: LocationHooksType = () => {
  const refresh = () => {
    window.location.reload();
  };

  return [refresh];
};

export default useLocation;
