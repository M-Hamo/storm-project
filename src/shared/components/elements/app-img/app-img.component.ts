import { Component, Input } from "@angular/core";
import { AttachmentPlaceHolders } from "src/app/shared/utils/enum/attachment-placeHolders";

@Component({
  selector: "app-img[url]",
  template: `
    <div
      class="overflow-hidden"
      [ngClass]="wrapperClass"
      [style.width]="width"
      [style.height]="height"
      [style.min-width]="minWidth"
      [style.min-height]="minHeight"
      [style.border-radius]="borderRadius"
    >
      <ng-container *ngIf="url; else empty">
        <img
          *ngIf="lazyLoad; else noLazyLoading"
          [lazyLoad]="url"
          [defaultImage]="placeHolders.LOADING"
          [errorImage]="
            isAvatar ? placeHolders.AVATAR : placeHolders.PHARM_IMAGE
          "
          [class]="defaultClass"
          [style]="defaultStyle"
          [ngClass]="imgClass"
          [class.huge]="isHuge"
          [class.rounded-full]="isRounded"
        />
      </ng-container>
    </div>

    <ng-template #noLazyLoading>
      <img
        [src]="url"
        [class]="defaultClass"
        [style]="defaultStyle"
        [ngClass]="imgClass"
        [class.rounded-full]="isRounded"
        [class.huge]="isHuge"
        (error)="
          url = isAvatar ? placeHolders.AVATAR : placeHolders.PHARM_IMAGE
        "
      />
    </ng-template>
    <ng-template #empty>
      <img
        [ngClass]="imgClass"
        [class]="defaultClass"
        [style]="defaultStyle"
        [class.rounded-full]="isRounded"
        [class.huge]="isHuge"
        [lazyLoad]="isAvatar ? placeHolders.AVATAR : placeHolders.PHARM_IMAGE"
    /></ng-template>
  `,
})
export class AppImageComponent {
  @Input() public url?: string;

  @Input() public readonly width?: string;

  @Input() public readonly minWidth?: string;

  @Input() public readonly height?: string;

  @Input() public readonly minHeight?: string;

  @Input() public readonly borderRadius?: string;

  @Input() public readonly imgClass?: string;

  @Input() public readonly wrapperClass: string = "";

  @Input() public readonly isAvatar = false;

  @Input() public readonly isRounded = false;

  @Input() public readonly isHuge = false;

  @Input() public readonly lazyLoad = true;

  public readonly placeHolder = AttachmentPlaceHolders;

  public defaultClass = "w-full h-full";

  public defaultStyle = `position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: contain`;

  public placeHolders = AttachmentPlaceHolders;
}
