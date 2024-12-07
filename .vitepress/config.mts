import { DefaultTheme, defineConfig, HeadConfig } from 'vitepress';

const headItems: HeadConfig[] = [
	['meta', { name: 'theme-color', content: '#faff6d' }],
	['meta', { property: 'og:image', content: '/es-avatar.png' }],
	['meta', { property: 'og:site_name', content: 'Documentation • Eternal Slave' }]
];

const navConfig: DefaultTheme.NavItem[] = [
	{ text: 'User Guide', link: '/user/impairments' },
	{ text: 'Server Setup', link: '/server/permissions' },
	{ text: 'Legal', link: '/legal/terms' }
];

const sidebarConfig: DefaultTheme.Sidebar = [
	{ text: 'User Guide', collapsed: false, items: [
		{ text: 'Impairments Guide', link: '/user/impairments' },
		{ text: 'Managing Custom Gags', link: '/user/custom-gags' }
	]},
	{ text: 'Server Setup', collapsed: false, items: [
		{ text: 'Bot Permissions', link: '/server/bot-permissions' },
		{ text: 'User Permissions', link: '/server/user-permissions' },
		{ text: 'General Config Options', link: '/server/general' },
		{ text: 'Impairments & Hierarchy', link: '/server/impairments' },
		{ text: 'Chastity Config & Modes', link: '/server/chastity' },
		{ text: 'Managing Auto Responses', link: '/server/auto-responses' },
		{ text: 'Confessions & Logs', collapsed: false, items: [
			{ text: 'Setting up Confessions', link: '/server/confessions/' },
			{ text: 'Viewing Confession Logs', link: '/server/confessions/logs' },
		]},
		{ text: 'Safety Alerts & Flagging', collapsed: false, items: [
			{ text: 'Subscribing to Safety Alerts', link: '/server/safety/' },
			{ text: 'Using /safetyctl Commands', link: '/server/safety/commands' }
		]}
	]},
	{ text: 'Miscellaneous', collapsed: true, items: [
		{ text: 'Useful Info', link: '/misc/useful' },
		{ text: "Fallen's Random Stuff", link: '/misc/fallen' }
	]},
	{ text: 'Legal Documents', collapsed: true, items: [
		{ text: 'Terms of Use', link: '/legal/terms' },
		{ text: 'Privacy Policy', link: '/legal/privacy' },
		{ text: 'Subscription Policy', link: '/legal/subscriptions' }
	]}
];

export default defineConfig({
	title: 'Eternal Slave',
	description: 'User and server documentation for the Eternal Slave Discord bot.',

	head: headItems,
	cleanUrls: true,
	srcDir: './docs',
	lastUpdated: true,
	appearance: 'force-dark',
	outDir: './.vitepress/build',
	titleTemplate: ':title • ES Docs',

	themeConfig: {
		nav: navConfig,
		logo: '/es-avatar.png',
		sidebar: sidebarConfig,
		search: { provider: 'local' },
		editLink: { pattern: 'https://github.com/TheFallenSpirit/ESDocs/edit/master/:path' },
		footer: {
			message: 'Documentation for a better world, internet, and Discord bot.',
			copyright: 'Copyright © 2024 <a href="https://fallenspirit.dev">Liam Labell (TheFallenSpirit)</a>'
		},
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/TheFallenSpirit/ESDocs' },
			{ icon: 'discord', link: 'https://discord.gg/rhe42NjaUr' }
		],
	}
});
