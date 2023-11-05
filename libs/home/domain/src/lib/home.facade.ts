import { inject, Injectable, signal } from '@angular/core';
import { createPrompt, Langs, PromptTypes } from '@resumefai/home/domain';
import { HomeService } from './home.service';

@Injectable()
export class HomeFacade {
  langs: Langs[] = ['english', 'deutsch', 'russian', 'french'];
  lang = signal<Langs>('english');
  position = signal('Frontend Angular Developer');
  description = signal('Description');
  #service = inject(HomeService);

  generate(type: PromptTypes) {
    ({
      description: () =>
        this.#service.generate(
          createPrompt(type, this.position(), this.lang()),
          this.description,
        ),
    })[type]?.();
  }
}
