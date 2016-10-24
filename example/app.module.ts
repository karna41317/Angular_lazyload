import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { LazyLoadImageModule } from '../src/lazyload-image.module';
import { AppComponent } from './app.component';
import { FadeInImageComponent } from './fade-in-image.component';
import { BgImageComponent } from './bg-image.component';
import { DefaultImageComponent } from './default-image.component';
import { PixelatedImageComponent } from './pixelated-image.component';

@NgModule({
    declarations: [
      AppComponent,
      FadeInImageComponent,
      BgImageComponent,
      DefaultImageComponent,
      PixelatedImageComponent
    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot([
        {
          path: '',
          redirectTo: '/fade-in-image',
          pathMatch: 'full'
        },
        { path: 'fade-in-image', component: FadeInImageComponent },
        { path: 'bg-image', component: BgImageComponent },
        { path: 'default-image', component: DefaultImageComponent },
        { path: 'pixelated-image', component: PixelatedImageComponent },
      ]),
      LazyLoadImageModule
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
