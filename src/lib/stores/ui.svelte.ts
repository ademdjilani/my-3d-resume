// UI store — panel content, help modal, nav dot hover state.

import type { SceneObjectKey } from './scene.svelte.js';
import { resume } from '$lib/data/resume.js';

// ─── Panel ────────────────────────────────────────────────────────────────────

export type PanelContent = {
	title: string;
	html: string;
} | null;

export const panel = $state({
	open: false,
	content: null as PanelContent
});

/** Generate panel HTML from resume data for a given object key. */
function buildPanelContent(key: SceneObjectKey): PanelContent {
	if (!key) return null;

	switch (key) {
		case 'laptop': {
			const projectCards = resume.projects
				.map(
					(p) => `
					<div class="panel-card">
						<h3>${p.name}${(p as any).status ? ` <span style="font-size:11px;font-weight:400;opacity:0.8">${(p as any).status}</span>` : ''}</h3>
						<p>${p.desc}</p>
						<div class="tech-tags">${p.tech.map((t) => `<span>${t}</span>`).join('')}</div>
						${p.url ? `<a href="${p.url}" target="_blank" rel="noopener" style="display:inline-block;margin-top:10px;font-size:12px;color:#88aaff;text-decoration:none;">View project →</a>` : ''}
					</div>`
				)
				.join('');
			return { title: 'Projects', html: `<div class="panel-cards">${projectCards}</div>` };
		}

		case 'bookshelf': {
			const { frontend, backend, tools } = resume.skills;
			const section = (label: string, items: string[]) => `
				<div class="skill-group">
					<h3>${label}</h3>
					<ul>${items.map((s) => `<li>${s}</li>`).join('')}</ul>
				</div>`;
			return {
				title: 'Skills',
				html: section('Frontend', frontend) + section('Backend', backend) + section('Tools', tools)
			};
		}

		case 'frame': {
			const { name, role, bio, facts } = resume.about;
			return {
				title: 'About Me',
				html: `
					<div class="about-panel">
						<h2>${name}</h2>
						<p class="role">${role}</p>
						<p>${bio}</p>
						<ul class="facts">${facts.map((f) => `<li>${f}</li>`).join('')}</ul>
					</div>`
			};
		}

		case 'character': {
			const { email, github, linkedin, location, available } = resume.contact;
			return {
				title: 'Contact',
				html: `
					<div class="contact-panel">
						${available ? '<p class="available-badge">Open to opportunities</p>' : ''}
						<ul>
							<li><strong>Email</strong> <a href="mailto:${email}">${email}</a></li>
							<li><strong>GitHub</strong> <a href="https://${github}" target="_blank" rel="noopener">${github}</a></li>
							<li><strong>LinkedIn</strong> <a href="https://${linkedin}" target="_blank" rel="noopener">${linkedin}</a></li>
							<li><strong>Location</strong> ${location}</li>
						</ul>
					</div>`
			};
		}

		default:
			return null;
	}
}

export function openPanel(key: SceneObjectKey) {
	panel.content = buildPanelContent(key);
	panel.open = !!panel.content;
}

export function closePanel() {
	panel.open = false;
	// Delay clearing content so close animation can finish
	setTimeout(() => {
		panel.content = null;
	}, 300);
}

// ─── Scene reset request ──────────────────────────────────────────────────────
// Panel's close button sets this to true; Scene.svelte watches it via $effect
// and calls its internal doResetCamera(), then clears this flag.

export const sceneReset = $state({ requested: false });

export function requestSceneReset() {
	sceneReset.requested = true;
}

export function clearSceneReset() {
	sceneReset.requested = false;
}

// ─── Help modal ───────────────────────────────────────────────────────────────

export const help = $state({ open: false });

export function toggleHelp() {
	help.open = !help.open;
}

export function closeHelp() {
	help.open = false;
}

// ─── Mobile notice ────────────────────────────────────────────────────────────

export const mobile = $state({ dismissed: false });

export function dismissMobileNotice() {
	mobile.dismissed = true;
}
