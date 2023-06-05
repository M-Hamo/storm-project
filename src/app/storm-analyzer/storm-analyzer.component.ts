import { Component } from '@angular/core';

@Component({
  selector: 'app-storm-analyzer',
  templateUrl: './storm-analyzer.component.html',
  styleUrls: ['./storm-analyzer.component.scss'],
})
export class StormAnalyzerComponent {
  public selectedRow: number | null = null;
}
