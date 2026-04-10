import NextImage, { type ImageProps } from "next/image";
import { asset } from "@/lib/base-path";

/** Drop-in replacement for next/image that prefixes local paths with basePath. */
export default function Image(props: ImageProps) {
  const src =
    typeof props.src === "string" ? asset(props.src) : props.src;
  return <NextImage {...props} src={src} />;
}
