import React, { useEffect, useState } from "react";
import Displayrepos from "./Displayrepos";

const Repositories = ({ repos }) => {
  const [data, repodata] = useState([]);
  const finalData = [];
  useEffect(() => {
    repos.forEach((repo, index) => {
      finalData.push({
        key: index,
        name: repo.name,
        url: repo.html_url,
        updated_at:repo.updated_at,
        description:repo.description
      });
    });
    repodata(finalData);
  }, []);
  return data && <Displayrepos repodata={data} />;
};

export default Repositories;
