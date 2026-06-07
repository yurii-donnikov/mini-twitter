import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-composer',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './post-composer.component.html',
  styleUrl: './post-composer.component.scss',
})
export class PostComposerComponent {
  private fb = inject(FormBuilder);
  readonly maxLength = 280;
  readonly form = this.fb.group({
    content: ['', [Validators.required, Validators.maxLength(this.maxLength)]],
  });

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log(this.form.value);

    this.form.reset();
  }
}
