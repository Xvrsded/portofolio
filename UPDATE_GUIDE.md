# Update Guide

## Update Profile Content
- Edit `data/profile.ts`.

## Update Projects
- Edit `data/projects.ts`.
- Add/remove project images in `public/projects`.
- Isi link website project di field `liveDemo` untuk tiap project.
- Isi link repository project di field `github` untuk tiap project.

## Update Experience
- Edit `data/experience.ts`.

## Update Skills
- Edit `data/skills.ts`.

## Update Theme
- Global variables: `styles/theme.css`
- Utility and animations: `tailwind.config.ts`

## Update Real Photos & Logos
- Profile photo folder: `public/images/profile`
	- Replace `profile-photo.svg` with your own file (recommended square image)
	- If filename changes, update `photo` in `data/profile.ts`
- Skill logos folder: `public/images/skills`
	- Replace existing logo files or add new ones
	- Update logo paths in `data/projects.ts` (`techLogos` array)
