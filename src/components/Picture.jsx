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

const apiKey = "YI2hDKwxKEcKWVwcHmrD9lLnnWC3UWHSqUmUcAs9";

export const formatDate = (selectedDay) => {
  return moment(selectedDay).format("YYYY-MM-DD");
};

export const getUrl = (apiKey, formattedDate) => {
  return `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${formattedDate}`;
};

function Picture(props) {
  const formattedDate = formatDate(props.selectedDay);
  const [isLiked, setIsLiked] = useState(false);
  const [fullPictureInfo, setFullPictureInfo] = useState({});
  const [isDoubleClicked, setIsDoubleClicked] = useState(false);
  const url = getUrl(apiKey, formattedDate);

  const handleDoubleClick = () => {
    setIsDoubleClicked(true);
    setTimeout(() => setIsDoubleClicked(false), 1500);
    handleColorChange();
  };

  // Fetching data from NASA API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setFullPictureInfo(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [url]);

  // Checking if Local Storage has data of isLiked.
  // If it does - passing the value to the state of isLiked.
  useEffect(() => {
    const data = localStorage.getItem(formattedDate);
    if (data) {
      setIsLiked(JSON.parse(data));
    } else {
      setIsLiked(false);
    }
  }, [formattedDate]);

  // When state of isLiked changes, rewriting it into Local Storage.
  useEffect(() => {
    localStorage.setItem(formattedDate, JSON.stringify(isLiked));
  }, [isLiked]);

  const handleColorChange = () => {
    setIsLiked(!isLiked);
  };

  return (
    <Card sx={({ maxWidth: 500 }, { boxShadow: 3 })}>
      <div className="like-container">
        <div className={isDoubleClicked ? "like" : "not-display-like"}>
          <FavoriteIcon fontSize="large" />
        </div>

        <CardMedia
          onDoubleClick={handleDoubleClick}
          sx={fullPictureInfo.media_type === "video" ? { height: 450 } : null}
          component={fullPictureInfo.media_type === "image" ? "img" : "iframe"}
          image={fullPictureInfo.url}
          alt={fullPictureInfo.title}
        />
      </div>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontSize: "1.5em" }}
        >
          {fullPictureInfo.title}
        </Typography>
        <Typography gutterBottom variant="h5" sx={{ fontSize: "1.4em" }}>
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
            data-testid="like-button"
            aria-label="like"
            onClick={handleColorChange}
            sx={{ color: isLiked && "#f44336" }}
          >
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default Picture;
