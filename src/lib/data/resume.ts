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
	status?: string;
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
		{
			name: 'Bougie Creation',
			desc: 'A luxury handcrafted candle shop website featuring an interactive 3D product viewer, full product catalog and order system. Built for a real client.',
			tech: ['HTML', 'CSS', 'JavaScript', 'Three.js'],
			url: 'https://bougiecreation.vercel.app',
			status: '🚧 In Progress'
		},
		{
			name: 'First Project (coming soon)',
			desc: 'A stunning digital solution and responsive website designed for a candle shop.',
			tech: ['HTML', 'CSS', 'JavaScript']
		}
	],

	skills: {
		frontend: ['HTML5 / CSS3', 'JavaScript (ES6+)', 'React', 'SvelteKit', 'Three.js', 'Responsive Web Design'],
		backend: ['Node.js', 'REST APIs', 'Full-Stack Development', 'Problem Solving'],
		tools: ['Git / GitHub', 'Vite', 'VS Code', 'Vercel / Deployment', 'Microsoft Office']
	},

	contact: {
		email: 'ademdjilani1@gmail.com',
		github: 'github.com/ademdjilani',
		linkedin: 'linkedin.com/in/adem-abdeldjaouad-djilani-619990405',
		location: 'El Eulma, Setif, Algeria',
		available: true
	}
};
