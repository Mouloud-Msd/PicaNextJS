import Image from "next/image";
import { Container } from "@mui/system";
import { Typography, Box } from "@mui/material";
import getJsonData from "../../utils/getJsonData";

const articleDetails = ({ article }) => {
  return (
    <Container maxWidth="md">
      <Box sx={{ maxHeight: "100%", marginX: "1rem" }}>
        <Typography variant="h4" gutterBottom>
          {article.name}
        </Typography>
        <img
          className="article-img"
          src={`/Art-images/${article.img}`}
          alt={article.name}
        />
      </Box>
      <Box>
        <Typography variant="body1" gutterBottom>
          &nbsp; &nbsp; {article.content}
        </Typography>
      </Box>
    </Container>
  );
};

export async function getStaticProps({ params }) {
  const { articles } = await getJsonData();
  const article = articles.find((art) => art.slug == params.slug);

  return {
    props: {
      article,
    },
  };
}

export async function getStaticPaths() {
  const { articles } = await getJsonData();
  const paths = articles.map((art) => {
    return { params: { slug: art.slug } };
  });

  return {
    paths,
    fallback: false,
  };
}

export default articleDetails;
