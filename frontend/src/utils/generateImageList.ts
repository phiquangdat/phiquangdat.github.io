const images = import.meta.glob("/src/assets/images/*.jpg", { eager: true });

export const imageList = Object.values(images).map((mod: any) => {
  const url = mod.default;
  return process.env.NODE_ENV === "development"
    ? `http://localhost:8010${url}`
    : url;
});
