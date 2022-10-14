import Image from "next/image";
import { Grid, Typography } from "@mui/material";
import axios from "axios";
const Bio = ({ data }) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography variant="h2" gutterBottom>
            Pablo Picasso
          </Typography>
          <Typography variant="body1" gutterBottom>
            {data.content}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <img src={`${data.image}`} className="bio-img" />
        </Grid>
      </Grid>
    </>
  );
};

export async function getStaticProps() {
  const { data } = await axios.get(
    "https://my-json-server.typicode.com/Mouloud-Msd/PicaJson/bio"
  );
  if (!data) {
    return {
      redirect: {
        destination: "/",
        permaneent: false,
      },
    };
  }

  return {
    props: {
      data,
    },
    revalidate: 604800,
  };
}
export default Bio;
