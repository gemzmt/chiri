import { defineCustomElements as defineChirimoyaElements } from '@chirimoya/chirimoya/loader';
import { defineCustomElements as definePrimariesElements } from '@chirimoya/primaries/loader';

export function initChirimoya() {
  defineChirimoyaElements();
  definePrimariesElements();
}
