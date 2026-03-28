import { fal } from "@/lib/fal";
import { NextResponse } from "next/server";

const YOGA_IMAGE_PROMPT =
  "Ultra cinematic yoga photography, woman in graceful warrior pose, dramatic golden hour light rays through tall studio windows, hardwood floor, minimalist zen interior, bokeh background, shallow depth of field, high fashion editorial, Vogue magazine quality, film grain, warm amber tones, deep shadows, 16:9";

export async function POST() {
  if (!process.env.FAL_KEY) {
    return NextResponse.json({ error: "FAL_KEY not configured" }, { status: 500 });
  }

  try {
    const result = await fal.subscribe("fal-ai/flux/schnell", {
      input: {
        prompt: YOGA_IMAGE_PROMPT,
        image_size: "landscape_16_9",
        num_inference_steps: 4,
        num_images: 1,
        enable_safety_checker: true,
      },
    });

    const data = result.data as { images?: Array<{ url: string }> };
    const imageUrl = data?.images?.[0]?.url;

    if (!imageUrl) {
      return NextResponse.json({ error: "No image URL in response" }, { status: 500 });
    }

    return NextResponse.json({ imageUrl });
  } catch (error) {
    console.error("Fal.ai image error:", error);
    return NextResponse.json({ error: "Image generation failed" }, { status: 500 });
  }
}
