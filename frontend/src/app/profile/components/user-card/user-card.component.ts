import { Component, Input } from '@angular/core';
import { User } from '../../../store/user/user.models';

@Component({
  selector: 'app-user-card',
  standalone: true,
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  @Input({ required: true })
  user!: User;
}
