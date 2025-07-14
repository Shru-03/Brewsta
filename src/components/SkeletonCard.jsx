import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = () => (
  <div className="p-4 w-[250px] h-[300px] bg-[#1C1D1F] rounded-xl">
    <Skeleton
      height={160}
      baseColor="#2a2a2a"
      highlightColor="#3f3f3f"
      duration={1.5}
    />
    <Skeleton
      height={20}
      width={150}
      className="mt-4"
      baseColor="#2a2a2a"
      highlightColor="#3f3f3f"
      duration={1.5}
    />
    <Skeleton
      height={20}
      width={100}
      className="mt-2"
      baseColor="#2a2a2a"
      highlightColor="#3f3f3f"
      duration={1.5}
    />
  </div>
);

export default SkeletonCard;
