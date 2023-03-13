import { Component } from '@angular/core';

@Component({
  selector: 'affected-assets',
  templateUrl: './affected-assets.component.html',
  styleUrls: ['./affected-assets.component.scss'],
})
export class AffectedAssetsComponent {
  public assets = [
    {
      opened: false,
    },
    {
      opened: false,
    },
    {
      opened: false,
    },
    {
      opened: false,
    },
    {
      opened: false,
    },
    {
      opened: false,
    },
    {
      opened: false,
    },
    {
      opened: false,
    },
  ];

  public onExpandAsset = (index: number): void =>
    this.assets.forEach(
      (asset, i: number) => (asset.opened = index === i && !asset.opened)
    );
}
