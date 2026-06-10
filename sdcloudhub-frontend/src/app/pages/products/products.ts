import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone:true,
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Products {}
