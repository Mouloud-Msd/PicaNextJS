import CardArt from "./ui/Card";
import Masonry from "react-masonry-css";

const Articles = ({ data }) => {
  const breaks = {
    default: 4,
    1168: 3,
    768: 2,
    500: 1,
  };
  return (
    <>
      <Masonry
        breakpointCols={breaks}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data.articles.map((article) => {
          return <CardArt article={article} />;
        })}
      </Masonry>
    </>
  );
};

export default Articles;
