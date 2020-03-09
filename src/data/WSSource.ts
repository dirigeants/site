import { DocsSource } from './DocsSource';

const branchBlacklist = new Set(['gh-pages', 'docs']);
export default new DocsSource({
	id: 'ws',
	name: 'WebSocket',
	repo: 'dirigeants/ws',
	branchFilter: (branch: string): boolean => !branchBlacklist.has(branch) && !branch.startsWith('dependabot')
});
