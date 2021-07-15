import express from "express";
import Data from "../../data.js";
import Videos from "../../models/video.js";

// const express = express();
const router = express.Router();

//@Route api/videos/v1
//@desc GET All hardcoded videos
//@Access public
router.get("/v1", (req, res) => {
  res.send(Data);
});

//@Route api/videos/v2
//@desc GET All videos
//@Access public
router.get("/v2", async (req, res) => {
  try {
    const videos = await Videos.find();
    res.json(videos);
  } catch (error) {
    console.log(error);
  }
});

//@Route POST api/videos/v2
//@decs  create a video
//@Access Public
router.post("/v2", async (req, res) => {
  try {
    //   const { name } = req.body;
    const newVideo = await Videos.create(req.body);

    return res.status(201).json({
      success: true,
      data: newVideo,
    });
  } catch (error) {
    if (error.name === "validationError") {
      const messages = Object.values(error.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
});

export default router;
