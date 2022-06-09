import React, { createElement } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../components/notfound/NotFound";

const handleGenratePages = (pageName) => {
  const component = () => require(`./${pageName}`).default;
  try {
    return createElement(component());
  } catch (err) {
    return <NotFound />;
  }
};

const PageRender = () => {
  const { page, id } = useParams();
  let pageName = "";
  if (!id) pageName = page;
  else {
    pageName = `${page}/[id]`;
  }
  return handleGenratePages(pageName);
};

export default PageRender;
