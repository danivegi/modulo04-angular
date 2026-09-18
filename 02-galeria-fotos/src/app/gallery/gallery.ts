import { Component, computed, signal, OnDestroy } from '@angular/core';

interface GalleryImage {
  id: number;
  src: string;
  title: string;
}

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery implements OnDestroy {
  // Lista de imágenes
  readonly images: GalleryImage[] = [
    { id: 1, src: 'img/foto1.jpg', title: 'Huelva' },
    { id: 2, src: 'img/foto2.jpg', title: 'Cádiz' },
    { id: 3, src: 'img/foto3.jpg', title: 'Sevilla' },
    { id: 4, src: 'img/foto4.jpg', title: 'Málaga' },
    { id: 5, src: 'img/foto5.jpg', title: 'Córdoba' },
    { id: 6, src: 'img/foto6.jpg', title: 'Jaén' },
    { id: 7, src: 'img/foto7.jpg', title: 'Granda' },
    { id: 8, src: 'img/foto8.jpg', title: 'Almería' },
  ];

  // Estado
  private readonly selectedIndex = signal(0);
  protected readonly size = signal(400);
  protected readonly isPlaying = signal(false);
  private intervalId?: ReturnType<typeof setInterval>;

  protected readonly pageSize = 3;
  protected readonly page = signal(0);

  protected readonly totalPages = computed(() =>
    Math.ceil(this.images.length / this.pageSize),
  );

  protected readonly pagedImages = computed(() => {
    const start = this.page() * this.pageSize;
    return this.images.slice(start, start + this.pageSize);
  });

  protected readonly isFirstPage = computed(() => this.page() === 0);
  protected readonly isLastPage = computed(() => this.page() >= this.totalPages() - 1);

  prevPage(): void {
    this.page.update(p => Math.max(0, p - 1));
  }

  nextPage(): void {
    this.page.update(p => Math.min(this.totalPages() - 1, p + 1));
  }

  // Estado cambiado
  protected readonly selected = computed(() => this.images[this.selectedIndex()]);
  protected readonly isFirst = computed(() => this.selectedIndex() === 0);
  protected readonly isLast = computed(() => this.selectedIndex() === this.images.length - 1);

  select(img: GalleryImage): void {
    this.selectedIndex.set(this.images.indexOf(img));
    this.syncPage();
  }

  prev(): void {
    this.selectedIndex.update(i => Math.max(0, i - 1));
    this.syncPage();
  }

  next(): void {
    this.selectedIndex.update(i => Math.min(this.images.length - 1, i + 1));
    this.syncPage();
  }

  zoomIn(): void {
    this.size.update(s => s + 50);
  }

  zoomOut(): void {
    this.size.update(s => Math.max(100, s - 50));
  }

  play(): void {
    if (this.isPlaying()) return;
    this.isPlaying.set(true);
    this.intervalId = setInterval(() => {
      // ponemos límite al final
      this.selectedIndex.update(i => (i + 1) % this.images.length);
      this.syncPage();
    }, 2000);
  }

  stop(): void {
    this.isPlaying.set(false);
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  private syncPage(): void {
    this.page.set(Math.floor(this.selectedIndex() / this.pageSize));
  }

  ngOnDestroy(): void {
    this.stop();
  }
}