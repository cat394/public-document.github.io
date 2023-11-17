import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://cat394.github.io',
	integrations: [
		starlight({
			title: "Guide Doc",
			logo: {
				src: './src/assets/favicon.svg',
			},
			customCss: ['./src/app.css'],
			locales: {
				root: {
					label: '日本語',
					lang: 'ja',
				},
			},
			social: {
				github: 'https://github.com/cat394',
				twitter: 'https://twitter.com/home',
			},
			sidebar: [
				{
					label: 'ご案内',
					items: [
						{
							label: 'はじめに',
							items: [
								{
									label: 'あいさつ',
									link: '/started/greeting/',
								},
								{
									label: '使用する技術',
									link: '/started/tech-stucks/',
								},
							],
						},
						{
							label: 'Webサイトを作成する',
							items: [
								{
									label: 'はじめに',
									link: '/guides/create-website/beginning/',
								},
								{
									label: 'デザインとは',
									link: '/guides/create-website/what-is-design'
								},
								{
									label: '各手順の概要',
									link: '/guides/create-website/overview'
								},
								{
									label: '1. 目的とターゲットの設定',
									link: '/guides/create-website/find-target/',
								},
								{
									label: '2. サイトマップを構築する',
									link: '/guides/create-website/create-site-map/',
								},
								{
									label: '3. コンテンツを計画する',
									link: '/guides/create-website/plan-content/',
								},

								{
									label: '4. レイアウトを決める',
									link: '/guides/create-website/decide-layout/',
								},
								{
									label: '5. 色を決める',
									link: '/guides/create-website/decide-color/',
								},
								{
									label: '6. フォントを決める',
									link: '/guides/create-website/decide-fonts/',
								},
								{
									label: '7. 仕上げ',
									link: '/guides/create-website/do-finishing-touches/',
								},
							],
						},
						{
							label: 'Webサイトを公開する',
							items: [
								{
									label: 'はじめに',
									link: '/guides/deploy/beginning/',
								},
								{
									label: 'Netlifyを使う',
									link: '/guides/deploy/netlify/',
								},
								{
									label: 'ドメインを購入する',
									link: '/guides/deploy/domain/',
								},
							],
						},
						{
							label: '終わりに',
							items: [
								{
									label: '締めくくり',
									link: '/ended/concluded/'
								}
							]
						}
					],
				},
				{
					label: 'エクストラ',
					items: [
						{
							label: 'お問い合わせフォームを設定する',
							link: '/extra/contact/'
						}
					]
				}
			],
		}),
		tailwind({
			applyBaseStyles: false,
		}),
	],
});
