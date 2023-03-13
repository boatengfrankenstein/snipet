import { Injectable } from '@angular/core';

type ClassificationType = "UNCLASSIFIED"|"CONFIDENTIAL"|"SECRET"|"TOP SECRET";
@Injectable()
export class ClassificationService {
  classification!:ClassificationType ;



  fetchClassification(classification: ClassificationType) {
    if (!this.classification) {
      this.classification = this.getClassification("SECRET");
    }
    return this.classification;
  }


   // TODO: move to database
   private AllClassification: Array<ClassificationType> = [
    "UNCLASSIFIED","CONFIDENTIAL","SECRET","TOP SECRET"
 ];

  getClassification(cl: ClassificationType): ClassificationType {
    return this.AllClassification.find(c => c === cl)!;
  }
}