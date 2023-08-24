import BarLoader from "react-spinners/BarLoader";

const LoadingSkeleton = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center pb-40">
      <BarLoader
        color={"#fff"}
        loading={true}
        height={4}
        width={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default LoadingSkeleton;
