import { defineConfig } from 'vitepress';

export default defineConfig({
	title: 'ES Docs',
	description: 'Suspicious',
	cleanUrls: true,
	lastUpdated: true,
	appearance: 'force-dark',
	outDir: './.vitepress/build',
	titleTemplate: ':title • ES Docs',
	themeConfig: {
		search: { provider: 'local' },
		nav: [{ text: 'Home', link: '/' }, { text: 'Server Setup', link: '/server/permissions' }],
		sidebar: [
			{
				text: 'Server Setup',
				collapsed: false,
				items: [
					{ text: 'Permissions', link: '/server/permissions' },
					{ text: 'General config options', link: '/server/general' },
					{ text: 'Impairments & Hierarchy', link: '/server/impairments' },
					{ text: 'Confessions & Logs', collapsed: true, items: [
						{ text: 'Setting up Confessions', link: '/server/confessions/' },
						{ text: 'Viewing Confession Logs', link: '/server/confessions/logs' },
					]},
					{ text: 'Safety Alerts & Flagging', collapsed: false, items: [
						{ text: 'Using /safetyctl commands', link: '/safety/commands' },
						{ text: 'Subscribing to safety alerts', link: '/safety/alerts' }
					]}
				]
			},
			{ text: 'Legal Documents', collapsed: true, items: [
				{ text: 'Terms of Use', link: '/terms' },
				{ text: 'Privacy Policy', link: '/privacy' }
			]}
		],
		footer: {
			message: 'Documentation for a better world, and internet.',
			copyright: 'Copyright © 2024 <a href="https://fallenspirit.dev">Liam Labell (TheFallenSpirit)</a>'
		},
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/TheFallenSpirit/ESDocs' },
			{ icon: 'discord', link: 'https://discord.com/users/738746238874419220' }
		]
	}
});
