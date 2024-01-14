import { test, expect } from "vitest";
import { renderToStaticMarkup, renderToString } from "react-dom/server";
import Person from "../src/components/person";

test("renderToString Person", () => {
  const html = renderToString(<Person />);
  expect(html).toBe("<div>This is person</div>");
});

test("renderToStaticMarkup  Person", () => {
  const html = renderToStaticMarkup (<Person />);
  expect(html).toBe("<div>This is person</div>");
});