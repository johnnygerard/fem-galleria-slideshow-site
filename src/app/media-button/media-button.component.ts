import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, booleanAttribute } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-media-button',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './media-button.component.html',
  styleUrl: './media-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaButtonComponent {
  @Input({ transform: booleanAttribute }) left = false;
  @Input() slug?: string;
}
