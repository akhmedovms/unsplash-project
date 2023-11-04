import Galerey from "../components/Galerey";
import { useDispatch, useSelector } from "react-redux";
import { removeLikedPhoto } from "../redux/features/unsplashSlice";

function LikedPhotos() {
  const { likedPhotos } = useSelector((store) => store.unsplash);
  const dispatch = useDispatch();

  console.log(likedPhotos);
  return (
    <div>
      <h1>Liked Photos</h1>
      <Galerey data={likedPhotos} />

      {likedPhotos.length === 0 && (
        <h1 className="text-3xl text-center">
          You don't have any liked photos yet 😔
        </h1>
      )}
    </div>
  );
}

export default LikedPhotos;
