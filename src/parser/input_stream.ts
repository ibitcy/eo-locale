export class InputStream {
	public done = false;
	public index = 0;

	private readonly input: string;

	public constructor(input: string) {
		this.input = input;
	}

	public next(): string {
		const ch = this.input.charAt(this.index++);

		if (this.index >= this.input.length) {
			this.done = true;
		}

		return ch;
	}

	public get value() {
		return this.input.charAt(this.index);
	}

	public croak() {
		throw new Error(`Unexpected character "${this.value}" on position ${this.index}`);
	}
}
