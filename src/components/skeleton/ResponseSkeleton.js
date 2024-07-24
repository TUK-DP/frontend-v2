import LoadingSkeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const ResponseSkeleton = () => {
  return <LoadingSkeleton containerClassName={"flex h-full w-full"} />;
};
