import { defineConfig } from 'vitepress';

export default defineConfig({
	title: 'ES Docs',
	description: 'Official documentation for the Eternal Slave Discord bot.',
	cleanUrls: true,
	lastUpdated: true,
	appearance: 'force-dark',
	outDir: './.vitepress/build',
	titleTemplate: ':title • ES Docs',
	themeConfig: {
		logo: '/es-avatar.png',
		search: { provider: 'local' },
		editLink: { pattern: 'https://github.com/TheFallenSpirit/ESDocs/edit/master/:path' },
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Server Setup', link: '/server/permissions' },
			{ text: 'Legal', link: '/terms' }
		],
		footer: {
			message: 'Documentation for a better world, internet, and Discord bot.',
			copyright: 'Copyright © 2024 <a href="https://fallenspirit.dev">Liam Labell (TheFallenSpirit)</a>'
		},
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/TheFallenSpirit/ESDocs' },
			{ icon: 'discord', link: 'https://discord.com/users/738746238874419220' }
		],
		sidebar: [
			{ text: 'Server Setup', collapsed: false, items: [
				{ text: 'Permissions', link: '/server/permissions' },
				{ text: 'General config options', link: '/server/general' },
				{ text: 'Impairments & Hierarchy', link: '/server/impairments' },
				{ text: 'Chastity Config & Modes', link: '/server/chastity' },
				{ text: 'Managing Auto Responses', link: '/server/auto-responses' },
				{ text: 'Confessions & Logs', collapsed: false, items: [
					{ text: 'Setting up Confessions', link: '/server/confessions/' },
					{ text: 'Viewing Confession Logs', link: '/server/confessions/logs' },
				]},
				{ text: 'Safety Alerts & Flagging', collapsed: false, items: [
					{ text: 'Subscribing to Safety Alerts', link: '/server/safety/' },
					{ text: 'Using /safetyctl commands', link: '/server/safety/commands' }
				]}
			]},
			{ text: 'Legal Documents', collapsed: true, items: [
				{ text: 'Terms of Use', link: '/terms' },
				{ text: 'Privacy Policy', link: '/privacy' }
			]}
		]
	}
});
