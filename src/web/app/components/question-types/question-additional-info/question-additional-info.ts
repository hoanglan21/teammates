import { Input, OnInit, Directive } from '@angular/core';
import { FeedbackQuestionDetails } from '../../../../types/api-output';

/**
 * The abstract question additional info section.
 */
@Directive()
export abstract class QuestionAdditionalInfo<Q extends FeedbackQuestionDetails> implements OnInit {

  @Input()
  questionDetails: Q;

  protected constructor(questionDetails: Q) {
    this.questionDetails = questionDetails;
  }

  ngOnInit(): void {
  }

}
