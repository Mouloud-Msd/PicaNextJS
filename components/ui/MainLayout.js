import Head from "next/head";
import { Container } from "@mui/system";
import Header from "../navigation/header";

const MainLayout = (props) => {
  return (
    <>
      <Head>
        <title>Picasso MasterPieces</title>
        <meta name="viewport" content="initial-scale=1.0 ,width=device-width" />
        <meta
          name="description"
          content="This is an app to admire picasso Art"
        />
        <meta name="keywords" content="Picasso, paints, art" />
        <meta name="author" content="Mouloud MESSAD" />
      </Head>
      <Header />
      <Container maxWidth="lg">{props.children}</Container>
    </>
  );
};

export default MainLayout;
