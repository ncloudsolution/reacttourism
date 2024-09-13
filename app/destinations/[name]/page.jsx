import { SeoGetter } from "@/libs/Seo";
import DestinationComp from "./DestinationComp";
import { notFound } from "next/navigation";

// Dynamically generate metadata based on the `name` parameter
export async function generateMetadata({ params }, parent) {
  const selectedLabel = params.name;

  // Fetch SEO data using the label
  const seoDataValue = SeoGetter(selectedLabel);

  // If no SEO data is found, return a 404
  if (!seoDataValue) {
    return notFound();
  }

  // Optionally extend parent metadata (e.g., for OpenGraph)
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: seoDataValue.title,
    description: seoDataValue.description,
    icons: {
      icon: ["/destination.ico"],
    },
    keywords: seoDataValue.keywords,
    // openGraph: {
    //   images: ["/some-specific-page-image.jpg", ...previousImages],
    // },
  };
}

const SingleDestination = ({ params }) => {
  const selectedLabel = params.name;
  console.log(selectedLabel);

  const seoDataValue = SeoGetter(selectedLabel);
  console.log(seoDataValue);

  return (
    <>
      <DestinationComp label={selectedLabel} />
    </>
  );
};

export default SingleDestination;
