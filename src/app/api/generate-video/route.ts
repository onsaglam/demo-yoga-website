import { fal, YOGA_VIDEO_PROMPT } from "@/lib/fal";
import { NextResponse } from "next/server";

export async function POST() {
  if (!process.env.FAL_KEY) {
    return NextResponse.json({ error: "FAL_KEY not configured" }, { status: 500 });
  }

  try {
    const result = await fal.subscribe("fal-ai/kling-video/v1.6/standard/text-to-video", {
      input: {
        prompt: YOGA_VIDEO_PROMPT,
        duration: "5",
        aspect_ratio: "16:9",
        negative_prompt: "text, watermark, ugly, blur, distorted",
      },
    });

    const data = result.data as { video?: { url?: string } };
    const videoUrl = data?.video?.url;

    if (!videoUrl) {
      return NextResponse.json({ error: "No video URL in response" }, { status: 500 });
    }

    return NextResponse.json({ videoUrl });
  } catch (error) {
    console.error("Fal.ai error:", error);
    return NextResponse.json({ error: "Video generation failed" }, { status: 500 });
  }
}
