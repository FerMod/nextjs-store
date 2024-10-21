import { createElement, HTMLAttributes } from "react";
import sanitizeHtml from "sanitize-html";

type SanitizeHtmlProps = {
  children: string,
  tag: string,
} & HTMLAttributes<HTMLElement>;

export const SanitizeHtml = ({ tag, children, ...rest }: SanitizeHtmlProps) => {
  const sanitizedHtml = sanitizeHtml(children, {
    allowedTags: ["b", "i", "em", "strong"],
  });

  return createElement(
    tag,
    { ...rest },
    sanitizedHtml,
  );
};
