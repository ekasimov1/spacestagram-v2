import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import moment from "moment";
import {
  Card,
  CardMedia,
  CardContent,
  IconButton,
  CardActions,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { red } from "@mui/material/colors";

const Picture = (props) => {
  const [color, setColor] = useState(false);

  const [fullPictureInfo, setFullPictureInfo] = useState({});

  const strDay = moment(props.selectedDay).format("YYYY-MM-DD");
  const baseUrl =
    "https://api.nasa.gov/planetary/apod?api_key=YI2hDKwxKEcKWVwcHmrD9lLnnWC3UWHSqUmUcAs9&date=" +
    strDay;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseUrl);
        const json = await response.json();
        console.log(json);
        setFullPictureInfo(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [strDay]);

  useEffect(() => {
    const data = localStorage.getItem(strDay);
    if (data) {
      setColor(JSON.parse(data));
    } else {
      setColor(false);
    }
    console.log("get item" + strDay);
  }, [strDay]);

  useEffect(() => {
    localStorage.setItem(strDay, JSON.stringify(color));
    console.log("set item" + strDay);
  }, [color]);

  function colorChange() {
    setColor(!color);
  }

  return (
    <Card sx={({ maxWidth: 500 }, { boxShadow: 3 })}>
      <CardMedia
        onDoubleClick={colorChange}
        sx={fullPictureInfo.media_type === "video" ? { height: 450 } : null}
        component={fullPictureInfo.media_type === "image" ? "img" : "iframe"}
        image={fullPictureInfo.url}
        alt={fullPictureInfo.title}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontSize: "1.5em" }}
        >
          {fullPictureInfo.title}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontSize: "1.4em" }}
        >
          {fullPictureInfo.date}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontSize: "1.2em" }}
        >
          {fullPictureInfo.explanation}
        </Typography>
        <CardActions sx={{ paddingLeft: 0 }}>
          <IconButton
            aria-label="like"
            onClick={colorChange}
            sx={color === true ? { color: red[500] } : null}
          >
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Picture;
