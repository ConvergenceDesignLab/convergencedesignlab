import get from "lodash.get";
import { processImageData } from "../../utils/process-wp-data";

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

      this.relatedWork = get(wpApiData, "acf.related_work", null);
    }
  }
}
