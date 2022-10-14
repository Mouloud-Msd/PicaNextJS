import * as React from "react";
import Link from "next/link";
import Card from "@mui/material/Card";
import {
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import { Fade } from "react-awesome-reveal";

export default function MediaCard({ article }) {
  return (
    <>
      <Fade>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={`/Art-images/${article.img}`}
            imagePosition="top"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {article.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {article.excerpt}
            </Typography>
          </CardContent>
          <CardActions sx={{ backgroundColor: "#256D85" }}>
            <Link href={`/articles/${article.slug}`}>
              <Button sx={{ color: "#ffffff" }} size="small">
                Learn More
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Fade>
    </>
  );
}
