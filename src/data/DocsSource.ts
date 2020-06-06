const json = (res: Response) => res.json();

export class DocsSource {

	public id: string;
	public name: string;
	public repo: string;
	public defaultVersion: string;
	public source: string;
	public branchFilter: (branch: string) => boolean;
	public tagFilter: (tag: string) => boolean;
	public tags!: string[];
	public recentVersion: string | null = null;

	public constructor(options: DocsSourceOptions) {
		this.id = options.id;
		this.name = options.name;
		this.repo = options.repo;
		this.defaultVersion = options.defaultVersion || 'master';
		this.source = options.source || `https://github.com/${this.repo}/blob/`;
		this.branchFilter = options.branchFilter || ((branch: string): boolean => branch !== 'master');
		this.tagFilter = options.tagFilter || (() => true);
		if (options.tags) this.tags = options.tags;
	}

	async fetchTags(): Promise<unknown[]> {
		if (this.tags) return this.tags;
		try {
			const [branches, tags] = await Promise.all([
				fetch(`https://api.github.com/repos/${this.repo}/branches`).then(json),
				fetch(`https://api.github.com/repos/${this.repo}/tags`).then(json)
			]);

			this.tags = [this.defaultVersion];
			localStorage.setItem(`source-${this.id}`, JSON.stringify({ branches, tags }));

			for (const branch of branches) {
				if (branch.name !== this.defaultVersion && this.branchFilter(branch.name)) this.tags.push(branch.name);
			}
			for (const tag of tags) {
				if (tag.name !== this.defaultVersion && this.tagFilter(tag.name)) this.tags.push(tag.name);
			}

			return this.tags;
		} catch (err) {
			const data = localStorage.getItem(`source-${this.id}`);
			if (data) {
				console.error(err);
				const cache = JSON.parse(data);
				return [cache.branches, cache.tags];
			}
			throw err;
		}
	}

	fetchDocs(version: string): Promise<unknown> {
		return fetch(`https://raw.githubusercontent.com/${this.repo}/docs/${version}.json`).then(json);
	}


}

export interface DocsSourceOptions {
	id: string;
	name: string;
	repo: string;
	defaultVersion?: string;
	source?: string;
	branchFilter?: (branch: string) => boolean;
	tagFilter?: (tag: string) => boolean;
	tags?: string[];
}
