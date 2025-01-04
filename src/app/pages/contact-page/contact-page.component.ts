import { Component } from '@angular/core';
import {FormlyFieldConfig} from "@ngx-formly/core";
import {FormGroup, UntypedFormGroup} from "@angular/forms";

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {

  form: UntypedFormGroup = new UntypedFormGroup({})
  model: any = {}
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: "columnForm",
      fieldGroup: [
        {
          type: "input",
          id: "email",
          props: {
            label: "Email",
            type: "email",
            required: true
          }
        },
        {
          type: "input",
          id: "name",
          props: {
            label: "Nom",
            type: "text",
            required: true
          }
        },
        {
          type: "textarea",
          id: "message",
          props: {
            label: "Message",
            required: true
          }
        }
      ]
    }
  ]

}
