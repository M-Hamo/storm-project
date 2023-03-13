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
      router: 'router',
      opened: true,
      chields: [
        {
          icon: 'assets/icons/node.svg',
          router: '/layout/dashboard/assets',
        },
        {
          icon: 'assets/icons/shield (1).svg',
          router: '/layout/dashboard/vulnerabilities',
        },
        {
          icon: 'assets/icons/data (1).svg',
          router: '/layout/dashboard/affected-assets',
        },
        {
          icon: 'assets/icons/information (1).svg',
          router: '',
        },
      ],
    },
    {
      icon: 'assets/icons/Group 18.svg',
      router: 'router',
      opened: false,
      chields: [
        {
          icon: 'assets/icons/shield (1).svg',
          router: '',
        },
        {
          icon: 'assets/icons/information (1).svg',
          router: '',
        },
        {
          icon: 'assets/icons/folder-hidden-white.svg',
          router: '',
        },
      ],
    },
    {
      icon: 'assets/icons/Group 12101.svg',
      router: 'router',
      opened: false,
      chields: [
        {
          icon: 'assets/icons/shield (1).svg',
          router: '',
        },
      ],
    },
    {
      icon: 'assets/icons/Group 12102.svg',
      router: 'router',
      opened: false,
      chields: [
        {
          icon: 'assets/icons/shield (1).svg',
          router: '',
        },
      ],
    },
    {
      icon: 'assets/icons/Page-1.svg',
      router: 'router',
      opened: false,
      chields: [
        {
          icon: 'assets/icons/shield (1).svg',
          router: '',
        },
      ],
    },
  ];

  public onToggleTab = (index: number): void =>
    this.sideMenu.forEach(
      (tab, i: number) => (tab.opened = i === index && !tab.opened)
    );
}
