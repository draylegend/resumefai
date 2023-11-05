import { Injectable, WritableSignal } from '@angular/core';

@Injectable()
export class HomeService {
  generate(prompt: string, state: WritableSignal<string>) {
    fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      body: JSON.stringify({ model: 'llama2-uncensored', prompt }),
    }).then(async res => {
      state.set('');

      for await (const value of this.#decode(res)) {
        state.update(s => `${s}${value}`);
      }
    });

    return state;
  }

  /** Non-blocking generator. */
  #decode({ body }: Response) {
    if (!body) {
      throw Error('Missing body');
    }

    const reader = body.getReader();
    const decoder = new TextDecoder();

    return {
      async *[Symbol.asyncIterator]() {
        let res = await reader.read();

        while (!res.done) {
          yield JSON.parse(decoder.decode(res.value)).response;

          res = await reader.read();
        }
      },
    };
  }
}
