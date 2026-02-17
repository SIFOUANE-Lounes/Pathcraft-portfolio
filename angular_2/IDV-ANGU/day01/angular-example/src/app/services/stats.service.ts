import { Injectable } from '@angular/core';

@Injectable()
export class StatsService {
  private clicks = 0;
  instanceId = Math.random().toString(16).slice(2, 6);

  addClick() {
    this.clicks++;
  }

  getClicks() {
    return this.clicks;
  }
}
