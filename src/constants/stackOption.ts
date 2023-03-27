export enum StackType {
  FRONT = '프론트엔드',
  BACK = '백엔드',
  DESIGN = '디자인',
  OTHER = '기타',
}

export type StackOption = {
  [key in StackType]: {
    label: string;
    value: string;
    id: number;
  }[];
};

export const stackOption: StackOption = {
  [StackType.FRONT]: [
    { label: 'JavaScript', value: 'javascript', id: 1 },
    { label: 'TypeScript', value: 'typescript', id: 2 },
    { label: 'React', value: 'react', id: 3 },
    { label: 'Vue', value: 'vuejs', id: 4 },
    { label: 'Svelte', value: 'svelte', id: 5 },
    { label: 'Nextjs', value: 'nextjs', id: 6 },
    { label: 'Jest', value: 'jest', id: 7 },
  ],
  [StackType.BACK]: [
    { label: 'Java', value: 'java', id: 8 },
    { label: 'Spring', value: 'spring', id: 9 },
    { label: 'Nodejs', value: 'nodejs', id: 10 },
    { label: 'Nestjs', value: 'nestjs', id: 11 },
    { label: 'Go', value: 'go', id: 12 },
    { label: 'Kotlin', value: 'kotlin', id: 13 },
    { label: 'Python', value: 'python', id: 14 },
    { label: 'MySQL', value: 'mysql', id: 15 },
    { label: 'Django', value: 'django', id: 16 },
    { label: 'Express', value: 'express', id: 17 },
    { label: 'PHP', value: 'php', id: 18 },
    { label: 'MongoDB', value: 'mongodb', id: 19 },
    { label: 'Firebase', value: 'firebase', id: 20 },
    { label: 'GraphQL', value: 'graphql', id: 21 },
  ],
  [StackType.DESIGN]: [
    { label: 'Figma', value: 'figma', id: 22 },
    { label: 'Zeplin', value: 'zeplin', id: 23 },
  ],
  [StackType.OTHER]: [
    { label: 'Flutter', value: 'flutter', id: 24 },
    { label: 'Kubernetes', value: 'kubernetes', id: 25 },
    { label: 'Git', value: 'git', id: 26 },
    { label: 'Swift', value: 'swift', id: 27 },
    { label: 'AWS', value: 'aws', id: 28 },
    { label: 'Docker', value: 'docker', id: 29 },
  ],
};
