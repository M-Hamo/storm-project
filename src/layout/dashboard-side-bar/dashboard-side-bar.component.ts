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
      title: 'Attack Service Discovery',
      opened: true,
      chields: [
        {
          icon: 'assets/icons/node.svg',
          title: 'Assets graph',
          path: '/layout/dashboard/assets',
        },
        {
          icon: 'assets/icons/shield (1).svg',
          title: 'Vulnerabilities',
          path: '/layout/dashboard/vulnerabilities',
        },
        {
          icon: 'assets/icons/data (1).svg',
          title: 'Disclosed Information',
          path: '/layout/dashboard/affected-assets',
        },
        {
          icon: 'assets/icons/information (1).svg',
          title: 'Github leaks',
          path: '/layout/dashboard/github-leaks',
        },
      ],
    },
    {
      icon: 'assets/icons/Group 18.svg',
      title: 'Web Applications',
      opened: false,
      chields: [
        {
          icon: 'assets/icons/shield (1).svg',
          title: 'Vulnerabilities',
          path: '/',
        },
        {
          icon: 'assets/icons/information (1).svg',
          title: 'Disclosed Information',
          path: '/',
        },
        {
          icon: 'assets/icons/folder-hidden-white.svg',
          title: 'Disclosed Information',
          path: '/',
        },
      ],
    },
    {
      icon: 'assets/icons/Group 12101.svg',
      title: 'Cloud',
      opened: false,
      chields: [
        {
          icon: 'assets/icons/shield (1).svg',
          title: 'Vulnerabilities',
          path: '/',
        },
      ],
    },
    {
      icon: 'assets/icons/Group 12102.svg',
      title: 'Network',
      opened: false,
      chields: [
        {
          icon: 'assets/icons/shield (1).svg',
          title: 'Vulnerabilities',
          path: '/',
        },
      ],
    },
    {
      icon: 'assets/icons/Page-1.svg',
      title: 'Dark Web',
      opened: false,
      chields: [
        {
          icon: 'assets/icons/shield (1).svg',
          title: 'Vulnerabilities',
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
