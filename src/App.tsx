import React, { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import Filters from "./components/Filters";
import Card from "./components/Card";
import { Container, Grid } from "@mui/material";

export interface JDData {
  jdUid: string;
  jdLink: string;
  jobDetailsFromCompany: string;
  maxJdSalary: number;
  minJdSalary?: number;
  salaryCurrencyCode: string;
  location: string;
  minExp: number;
  maxExp: number;
  jobRole: string;
  companyName: string;
  logoUrl: string;
}

function App() {
  const [listData, setListData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [offset, setOffset] = useState(0);
  const observer = useRef<IntersectionObserver>();
  const lastElementRef = useCallback(
    (ref) => {
      if (isFetching) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entry) => {
        if (entry[0].isIntersecting) {
          setOffset(offset + 1);
        }
      });

      if (ref) observer.current.observe(ref);
    },
    [isFetching, offset]
  );

  const fetchDatafromAPI = useCallback(async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      limit: 12,
      offset: offset,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    setIsFetching(true);
    return fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setListData([...listData, ...result.jdList]);
        setIsFetching(false);
      })
      .catch((error) => console.error(error));
  }, [listData, offset]);

  useEffect(() => {
    fetchDatafromAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  return (
    <React.Fragment>
      <Filters />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          padding: 4,
        }}
      >
        {listData.map((item, index) => {
          if (listData.length === index + 1)
            return (
              <Grid item xs={2} sm={4} md={4} key={index} ref={lastElementRef}>
                <Card data={item} />
              </Grid>
            );

          return (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Card data={item} />
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
}

export default App;
