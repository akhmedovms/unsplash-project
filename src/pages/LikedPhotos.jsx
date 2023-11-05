import Galerey from "../components/Galerey";
import { useSelector } from "react-redux";
import { removeLikedPhoto } from "../redux/features/unsplashSlice";

function LikedPhotos() {
  const { likedPhotos } = useSelector((store) => store.unsplash);

  return (
    <div>
      <h1 className="text-5xl text-center">Liked Photos ❤️</h1>

      <Galerey data={likedPhotos} removeLikedPhoto={removeLikedPhoto} />

      {likedPhotos.length === 0 && (
        <h1 className="text-3xl text-center">
          You don't have any liked photos yet 😔
        </h1>
      )}
    </div>
  );
}

export default LikedPhotos;
