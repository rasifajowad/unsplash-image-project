import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./context.jsx";

const url = `https://api.unsplash.com//search/photos/?client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const response = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    },
  });
  console.log(response);
  if (response.isLoading) {
    return <h4>Loading...</h4>;
  }
  if (response.isError) {
    return <h4>There was an Error...</h4>;
  }
  const results = response.data.results;
  if (results < 1) {
    return <h4>No results</h4>;
  }
  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item.urls.regular;
        return (
          <img
            key={item.id}
            src={url}
            alt={item.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
};

export default Gallery;
