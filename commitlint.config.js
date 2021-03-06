module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'scope-empty': [2, 'never'],
		'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test']],
		'scope-case': [2, 'always', ['lowercase', 'cammelcase']]
	}
};
