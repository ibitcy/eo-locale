export class InputStream {
	public index = 0;
	private isDone = false;

	private readonly input: string;

	public constructor(input: string) {
		this.input = input;
	}

	public next(): string {
		this.index++;

		if (this.index >= this.input.length) {
			this.isDone = true;
		}

		return this.value;
	}

	public get done(): boolean {
		return this.isDone;
	}

	public get value() {
		return this.input.charAt(this.index);
	}

	public croak(msg = `Unexpected character "${this.value}" on position ${this.index}`) {
		throw new Error(`Invalid message "${this.input}". ${msg}`);
	}
}
