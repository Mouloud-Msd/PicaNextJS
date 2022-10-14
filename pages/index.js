import styles from "../styles/Home.module.css";
import getJsonData from "../utils/getJsonData";
import SimpleSlider from "../components/ui/carousel";
import Articles from "../components/articles";
export default function Home(props) {
  return (
    <>
      <SimpleSlider data={props.data} />
      <Articles data={props.data} />
    </>
  );
}

export async function getStaticProps() {
  const data = await getJsonData();
  return {
    props: {
      data,
    },
  };
}
