import { fal } from "@fal-ai/client";

fal.config({
  credentials: process.env.FAL_KEY,
});

export { fal };

export const YOGA_VIDEO_PROMPT =
  "Ultra cinematic slow-motion yoga, woman in flowing white linen in lotus pose at golden hour sunrise, soft bokeh, misty morning Bremen park, spiritual atmosphere, 4K ultra HD, peaceful, warm golden light";
