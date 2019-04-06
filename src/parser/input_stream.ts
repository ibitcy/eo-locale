export class InputStream {
  public index = 0;
  public done = false;
  public value = '';

  public constructor(private readonly input: string) {
    this.value = this.input.charAt(this.index);
  }

  public next(): string {
    this.index++;

    if (this.index >= this.input.length) {
      this.done = true;
    }

    return this.value = this.input.charAt(this.index);
  }

  public croak() {
    throw new Error(`[${this.input}]. Unexpected character "${this.value}" on position ${this.index}.`);
  }
}
