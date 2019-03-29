export class InputStream {
	public index = 0;
	public done = false;

	public constructor(private readonly input: string) {}

	public next(): string {
		this.index++;

		if (this.index >= this.input.length) {
			this.done = true;
		}

		return this.value;
	}

	public get value() {
		return this.input.charAt(this.index);
	}

	public croak(msg = `Unexpected character "${this.value}" on position ${this.index}`) {
		throw new Error(`Invalid message "${this.input}". ${msg}`);
	}
}
