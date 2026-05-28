// ─── Types ────────────────────────────────────────────────────────────────────

export interface ResumeLink {
	label: string;
	url: string;
	type: 'primary' | 'secondary';
}

export interface ResumeAbout {
	name: string;
	role: string;
	bio: string;
	facts: string[];
	links: ResumeLink[];
}

export interface ResumeProject {
	name: string;
	desc: string;
	tech: string[];
	url?: string;
}

export interface ResumeSkills {
	frontend: string[];
	backend: string[];
	tools: string[];
}

export interface ResumeContact {
	email: string;
	github: string;
	linkedin: string;
	twitter: string;
	location: string;
	available: boolean;
}

export interface ResumeData {
	about: ResumeAbout;
	projects: ResumeProject[];
	skills: ResumeSkills;
	contact: ResumeContact;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
// Edit this file to update your portfolio content.
// The 3D scene reads from this same source, so changes here update both the
// interactive room labels AND the SEO-friendly HTML fallback pages.

export const resume: ResumeData = {
	about: {
		name: 'Adam Djilani',
		role: 'Full-Stack Web Developer',
		bio: 'Passionate about Website Development and Digital Solutions, building responsive interfaces and robust web applications.',
		facts: ['Self-Taught Developer', 'Passionate Learner', 'Problem Solver', 'Responsive Web Design'],
		links: [
			{ label: 'GitHub', url: 'https://github.com/ademdjilani', type: 'primary' },
			{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/adem-abdeldjaouad-djilani-619990405?utm_source=share_via&utm_content=profile&utm_medium=member_ios', type: 'secondary' },
			{ label: 'Email', url: 'mailto:ademdjilani1@gmail.com', type: 'secondary' }
		]
	},

	projects: [
		// 💡 كيف تضيف مشاريعك هنا مستقبلاً:
		// قم بنسخ هذا الجزء وتغيير الاسم (name)، الوصف (desc)، والتقنيات (tech).
		// How to add your projects here in the future:
		// Copy this block and change the name, desc, and tech.
		{
			name: 'First Project (Placeholder)',
			desc: 'A stunning digital solution and responsive website built to address modern challenges. (You can customize this in config.js and src/lib/data/resume.ts)',
			tech: ['HTML', 'CSS', 'JavaScript']
		}
	],

	skills: {
		frontend: ['HTML5 / CSS3', 'JavaScript', 'Responsive Web Design', 'Web Development'],
		backend: ['Full-Stack Web Development', 'Problem Solving', 'Web APIs / Logic'],
		tools: ['Git / GitHub', 'Teamwork', 'Communication', 'Microsoft Office']
	},

	contact: {
		email: 'ademdjilani1@gmail.com',
		github: 'github.com/ademdjilani',
		linkedin: 'linkedin.com/in/adem-abdeldjaouad-djilani-619990405',
		twitter: '',
		location: 'El Eulma, Setif, Algeria',
		available: true
	}
};
