import get from "lodash.get";

// WP valid sizes. TODO: make /projects?slug=XX endpoints that only expose these sizes in a nice way
const wpImageSizes = [
  { name: "width_200", width: 200 },
  { name: "width_400", width: 400 },
  { name: "width_800", width: 800 },
  { name: "width_1200", width: 1200 },
  { name: "width_1600", width: 1600 },
  { name: "width_2400", width: 2400 }
];

const processImageData = wpImageData => {
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
};

export default class ProjectData {
  constructor(wpApiData) {
    this.hasValidData = wpApiData && wpApiData.acf;

    if (wpApiData) {
      this.id = wpApiData.id;
      this.slug = wpApiData.slug;
      this.status = wpApiData.status;
      this.menuOrder = wpApiData.menu_order;

      this.title = get(wpApiData, "acf.title", "");
      this.designQuestion = get(wpApiData, "acf.question", "");
      this.partners = get(wpApiData, "acf.meta.partners", []).map(obj => obj.name);
      this.tags = get(wpApiData, "acf.meta.tags", []).map(obj => obj.name);

      this.coverImageData = processImageData(get(wpApiData, "acf.image"));

      this.challengeSection = get(wpApiData, "acf.challenge", "");

      this.imageBreak = {
        caption: get(wpApiData, "acf.image_break.caption", ""),
        image: processImageData(get(wpApiData, "acf.image_break.image"))
      };

      this.processSection = {
        text: get(wpApiData, "acf.process.text", ""),
        image: processImageData(get(wpApiData, "acf.process.image"))
      };

      this.testimonialBreak = {
        text: get(wpApiData, "acf.testimonial_break.text", ""),
        attribution: get(wpApiData, "acf.testimonial_break.attribution", "")
      };

      this.resultsSection = {
        text: get(wpApiData, "acf.results.text", ""),
        image: processImageData(get(wpApiData, "acf.results.image"))
      };

      this.relatedWork = [];
      const relatedWork = get(wpApiData, "acf.related_work", []).map(obj => ({
        id: obj.ID,
        title: obj.post_title,
        type: obj.post_type
      }));
    }
  }
}
