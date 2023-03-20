import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-side-bar',
  templateUrl: './dashboard-side-bar.component.html',
  styleUrls: ['./dashboard-side-bar.component.scss'],
})
export class DashboardSideBarComponent {
  public sideMenu = [
    {
      icon: 'assets/icons/Group 12099.svg',
      opened: true,
      chields: [
        {
          icon: 'assets/icons/node.svg',
          path: '/layout/dashboard/assets',
        },
        {
          icon: 'assets/icons/shield (1).svg',
          path: '/layout/dashboard/vulnerabilities',
        },
        {
          icon: 'assets/icons/data (1).svg',
          path: '/layout/dashboard/affected-assets',
        },
        {
          icon: 'assets/icons/information (1).svg',
          path: '/',
        },
      ],
    },
    {
      icon: 'assets/icons/Group 18.svg',
      opened: false,
      chields: [
        {
          icon: 'assets/icons/shield (1).svg',
          path: '/',
        },
        {
          icon: 'assets/icons/information (1).svg',
          path: '/',
        },
        {
          icon: 'assets/icons/folder-hidden-white.svg',
          path: '/',
        },
      ],
    },
    {
      icon: 'assets/icons/Group 12101.svg',
      opened: false,
      chields: [
        {
          icon: 'assets/icons/shield (1).svg',
          path: '/',
        },
      ],
    },
    {
      icon: 'assets/icons/Group 12102.svg',
      opened: false,
      chields: [
        {
          icon: 'assets/icons/shield (1).svg',
          path: '/',
        },
      ],
    },
    {
      icon: 'assets/icons/Page-1.svg',
      opened: false,
      chields: [
        {
          icon: 'assets/icons/shield (1).svg',
          path: '/layout/dashboard/dark-web',
        },
      ],
    },
  ];

  public onToggleTab = (index: number): void =>
    this.sideMenu.forEach(
      (tab, i: number) => (tab.opened = i === index && !tab.opened)
    );
}
