import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'tekigent-avatar',
  templateUrl: './tekigent-avatar.component.html',
  styleUrls: ['./tekigent-avatar.component.scss'],
  standalone: true,
  imports: [CommonModule, AvatarModule, SkeletonModule],
})
export class TekigentAvatarComponent implements OnChanges {
  @Input() imgSrc!: string;

  @Input() shape!: 'square' | 'circle';

  @Input() label = 'user-avt.alt';

  @Input() size: 'normal' | 'large' | 'xlarge' = 'normal';

  @Input() style = '';

  @Input() styleClass = '';

  isLoading = true;

  ngOnChanges(changes: SimpleChanges): void {
    this.imgSrc = changes['imgSrc']?.currentValue;

    this.isLoading = false;
  }
}
