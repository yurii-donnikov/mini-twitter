import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { createPost } from '../../../store/post';

@Component({
  selector: 'app-post-composer',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './post-composer.component.html',
  styleUrl: './post-composer.component.scss',
})
export class PostComposerComponent {
  private fb = inject(FormBuilder);
  private store = inject(Store);
  readonly maxLength = 280;
  readonly form = this.fb.nonNullable.group({
    content: ['', [Validators.required, Validators.maxLength(280)]],
  });

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.store.dispatch(
      createPost({
        post: this.form.getRawValue(),
      }),
    );
    this.form.reset();
  }
}
