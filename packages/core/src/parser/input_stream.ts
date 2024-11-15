export class InputStream {
  index = 0;
  done = false;
  value = '';

  constructor(private readonly input: string) {
    this.value = this.input.charAt(0);
  }

  next(): string {
    if (++this.index >= this.input.length) {
      this.done = true;
    }

    return (this.value = this.input.charAt(this.index));
  }

  croak() {
    throw new Error(
      `[${this.input}]. Unexpected character "${this.value}" on position ${this.index}.`,
    );
  }
}
