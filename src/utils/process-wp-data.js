// Utils for processing WP image size data - filtering for sizes we care about and restructuring the
// data. TODO: make endpoints that expose data in this format, so this file becomes unnecessary.

export const wpImageSizes = [
  { name: "width_200", width: 200 },
  { name: "width_400", width: 400 },
  { name: "width_800", width: 800 },
  { name: "width_1200", width: 1200 },
  { name: "width_1600", width: 1600 },
  { name: "width_2400", width: 2400 }
];

export function processImageData(wpImageData) {
  if (!wpImageData) return null;

  const data = {
    id: wpImageData.id,
    title: wpImageData.title,
    sizes: {}
  };

  const sizeData = [];
  wpImageSizes.forEach(({ name }) => {
    if (wpImageData.sizes[name]) {
      data.sizes[name] = {
        width: wpImageData.sizes[`${name}-width`],
        height: wpImageData.sizes[`${name}-height`],
        url: wpImageData.sizes[name]
      };
    }
  });

  return data;
}
