import get from "lodash.get";

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
      this.coverImageUrl = get(wpApiData, "acf.image.url", ""); // TODO: srcset
      this.challengeSection = get(wpApiData, "acf.challenge", "");
      this.imageBreakUrl = get(wpApiData, "acf.image_break.image.url", ""); // TODO: srcset
      this.imageBreakCaption = get(wpApiData, "acf.image_break.caption", ""); // TODO: srcset
      this.processSectionText = get(wpApiData, "acf.process.text", "");
      this.processSectionImage = get(wpApiData, "acf.process.image.url", ""); // TODO: srcset
      this.testimonialBreakText = get(wpApiData, "acf.testimonial_break.text", "");
      this.testimonialBreakAttribution = get(wpApiData, "acf.testimonial_break.attribution", "");
      this.resultsSectionText = get(wpApiData, "acf.results.text", "");
      this.resultsSectionImage = get(wpApiData, "acf.results.image.url", ""); // TODO: srcset

      this.relatedWork = [];
      const relatedWork = get(wpApiData, "acf.related_work", []).map(obj => ({
        id: obj.ID,
        title: obj.post_title,
        type: obj.post_type
      }));
    }
  }
}
