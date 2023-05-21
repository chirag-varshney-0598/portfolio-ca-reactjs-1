import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Box,
  Container,
  FormControl,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";
import { BsSearch } from "react-icons/bs";
import HorseRacingCard from "./HorseRacingCard";
import { dataPostHandler } from "src/apiConfig/service";
import DataLoader from "./DataLoader";
import InfiniteScroll from "react-infinite-scroll-component";
import NoDataFoundFrame from "./NoDataFoundFrame";

const useStyles = makeStyles((theme) => ({
  MainSeachContainer: {
    padding: "20px 0px",
    "& h5": {
      color: theme.palette.primary.main,
      textTransform: "uppercase",
    },
  },
  root: {
    padding: "20px 0px",
    "& .MuiButton-containedPrimary": {
      padding: "5px 30px",
    },
  },
}));
export default function SearchResultFound({ onClickbtn }) {
  const classes = useStyles();
  const [isloading, setLoader] = useState(false);
  const [search, setsearch] = useState("");
  const [feedsNews, setfeedsNews] = useState([]);
  const [hashMore, sethashMore] = useState(true);
  const [page, setPage] = useState(2);

  const handleFormSubmit = async (values) => {
    setLoader(true);
    try {
      const data =
        search === ""
          ? {
              //  page: "1",
              // limit: "6"
            }
          : {
              search: search,
              // page: "1",
              // limit: "6",
            };
      const response = await dataPostHandler("searchFeed", data);
      if (
        response?.data !== undefined &&
        response?.data?.statusCode !== undefined
      ) {
        if (response.data.statusCode === 200) {
          setfeedsNews(response.data.result.feedBlog.docs);
          setLoader(false);
        } else {
          setLoader(false);
          setfeedsNews([]);
        }
      } else {
        setLoader(false);
        setfeedsNews([]);
      }
    } catch (error) {
      console.log(error);
      setLoader(false);
      setfeedsNews([]);
    }
  };

  useEffect(() => {
    handleFormSubmit();
  }, [search]);

  const fetchData = async () => {
    try {
      const data =
        search === ""
          ? {
              page: page,
              limit: "6",
            }
          : {
              search: search,
              page: page,
              limit: "6",
            };
      const response = await dataPostHandler("searchFeed", data);
      if (response.data.statusCode === 200) {
        setfeedsNews([...feedsNews, ...response.data.result.feedBlog.docs]);
        setPage(page + 1);
        if (
          response.data.result.feedBlog.docs === 0 ||
          response.data.result.feedBlog.docs < 6
        ) {
          sethashMore(false);
        }
      } else {
        setLoader(false);
      }
    } catch (error) {
      console.log(error);
      setfeedsNews([]);
    }
  };

  return (
    <Container maxWidth="md">
      <Box className={classes.root}>
        <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            type="search"
            variant="standard"
            fullWidth
            placeholder="Search for Player, Series, Team, News or Video."
            className="searchBox"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" style={{ marginRight: "0px" }}>
                  {" "}
                  <IconButton
                    style={{ fontSize: "20px", padding: "0px" }}
                    className="iconbtn"
                  >
                    <BsSearch
                      style={{
                        color: "#8d8d8f",
                        fontSize: "16px",
                        padding: " 0px 11px",
                      }}
                    />
                  </IconButton>{" "}
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="start">
                  <Button variant="contained" color="primary">
                    Search
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
        <Box my={2} onClickbtn={onClickbtn}>
          <Typography variant="h5"> News</Typography>
        </Box>
        <Box className="scrollDiv">
          {isloading ? (
            <DataLoader />
          ) : (
            <Grid container spacing={2}>
              {feedsNews?.map((data) => (
                <Grid item xs={12} sm={6} md={4}>
                  {" "}
                  <HorseRacingCard data={data} onClickbtn={onClickbtn} />
                </Grid>
              ))}
            </Grid>
          )}
          {!isloading && feedsNews && feedsNews?.length === 0 && (
            <NoDataFoundFrame data="No data Found !" />
          )}
        </Box>
      </Box>
    </Container>
  );
}
