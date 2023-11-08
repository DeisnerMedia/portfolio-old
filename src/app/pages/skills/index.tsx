// skills.tsx

import React from "react";
import Image, { StaticImageData } from 'next/image';

import ReactLogo from '@/app/assets/images/skills/frontend/react.svg';
import NextLogo from '@/app/assets/images/skills/frontend/nextjs.svg';
import VueLogo from '@/app/assets/images/skills/frontend/vue.svg';
import AngularLogo from '@/app/assets/images/skills/frontend/angular.svg';
import IonicLogo from '@/app/assets/images/skills/frontend/ionic.svg';
import HTMLLogo from '@/app/assets/images/skills/frontend/html.svg';
import CSSLogo from '@/app/assets/images/skills/frontend/css.svg';
import JavaScriptLogo from '@/app/assets/images/skills/frontend/javascript.svg';
import TypeScriptLogo from '@/app/assets/images/skills/frontend/typescript.svg';
import TailwindLogo from '@/app/assets/images/skills/frontend/tailwindcss.svg';
import jQueryLogo from '@/app/assets/images/skills/frontend/jquery.svg';
import PHPLogo from '@/app/assets/images/skills/frontend/php.svg';
import SAPUI5Logo from '@/app/assets/images/skills/frontend/sapui5.png';
import NodeLogo from '@/app/assets/images/skills/backend/nodejs.svg';
import JavaLogo from '@/app/assets/images/skills/backend/java.svg';
import CSharpLogo from '@/app/assets/images/skills/backend/csharp.svg';
import CLogo from '@/app/assets/images/skills/backend/c.svg';
import PythonLogo from '@/app/assets/images/skills/backend/python.svg';
import MySQLLogo from '@/app/assets/images/skills/backend/mysql.svg';
import SAPLogo from '@/app/assets/images/skills/backend/sap.svg';
import SAPHANALogo from '@/app/assets/images/skills/backend/saphana.png';
import DockerLogo from '@/app/assets/images/skills/dev-ops/docker.svg';
import GitLogo from '@/app/assets/images/skills/dev-ops/git.svg';
import GitHubLogo from '@/app/assets/images/skills/dev-ops/github.png';
import GitLabLogo from '@/app/assets/images/skills/dev-ops/gitlab.svg';
import FigmaLogo from '@/app/assets/images/skills/ui-ux/figma.svg';
import AdobeXDLogo from '@/app/assets/images/skills/ui-ux/adobexd.svg';
import PhotoshopLogo from '@/app/assets/images/skills/ui-ux/photoshop.svg';
import IllustratorLogo from '@/app/assets/images/skills/ui-ux/illustrator.svg';
import AfterEffectsLogo from '@/app/assets/images/skills/ui-ux/aftereffects.svg';
import PremiereProLogo from '@/app/assets/images/skills/ui-ux/premierepro.svg';

import styles from './Skills.module.css';

interface SkillCardProps {
    skillName: string;
    logoSrc: StaticImageData;
    logoWidth: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skillName, logoSrc, logoWidth }) => (
    <div className={`max-w-md p-4 border rounded-lg shadow-lg mx-4 my-4 flex flex-col items-center ${styles.skillCard}`}>
        <Image src={logoSrc} alt={skillName} width={logoWidth} className="mb-3"/>
        <span className={`mt-auto font-bold text-xl text-white ${styles.skillText}`}>{skillName}</span>
    </div>
);

interface SkillGroupProps {
    groupName: string;
    skills: { skillName: string; logoSrc: StaticImageData; logoWidth: number; }[];
}

const SkillGroup: React.FC<SkillGroupProps> = ({ groupName, skills }) => (
    <div className={`border-black border-4 p-4 rounded-md mb-8 ${styles.skillGroupCard}`}>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-amber-600 via-orange-400 to-yellow-500 text-transparent bg-clip-text">
            {groupName}
        </h2>
        <div className={`flex flex-wrap justify-center ${styles.skillGroup}`}>
            {skills.map((skill, index) => (
                <SkillCard
                    key={index}
                    skillName={skill.skillName}
                    logoSrc={skill.logoSrc}
                    logoWidth={skill.logoWidth}
                />
            ))}
        </div>
    </div>
);

export default function Skills() {
    const frontendSkills = [
        { skillName: "React", logoSrc: ReactLogo, logoWidth: 80 },
        { skillName: "Next.js", logoSrc: NextLogo, logoWidth: 80 },
        { skillName: "Vue.js", logoSrc: VueLogo, logoWidth: 80 },
        { skillName: "Angular", logoSrc: AngularLogo, logoWidth: 80 },
        { skillName: "Ionic", logoSrc: IonicLogo, logoWidth: 80 },
        { skillName: "HTML", logoSrc: HTMLLogo, logoWidth: 80 },
        { skillName: "CSS", logoSrc: CSSLogo, logoWidth: 80 },
        { skillName: "JavaScript", logoSrc: JavaScriptLogo, logoWidth: 80},
        { skillName: "TypeScript", logoSrc: TypeScriptLogo, logoWidth: 80 },
        { skillName: "Tailwind CSS", logoSrc: TailwindLogo, logoWidth: 120 },
        { skillName: "jQuery", logoSrc: jQueryLogo, logoWidth: 100 },
        { skillName: "PHP", logoSrc: PHPLogo, logoWidth: 200 },
        { skillName: "SAPUI5", logoSrc: SAPUI5Logo, logoWidth: 250 },
    ];

    const backendSkills = [
        { skillName: "Node.js", logoSrc: NodeLogo, logoWidth: 80 },
        { skillName: "Java", logoSrc: JavaLogo, logoWidth: 80 },
        { skillName: "C#", logoSrc: CSharpLogo, logoWidth: 80 },
        { skillName: "C", logoSrc: CLogo, logoWidth: 80 },
        { skillName: "Python", logoSrc: PythonLogo, logoWidth: 80 },
        { skillName: "MySQL", logoSrc: MySQLLogo, logoWidth: 80 },
        { skillName: "ABAP", logoSrc: SAPLogo, logoWidth: 200 },
        { skillName: "SAP HANA", logoSrc: SAPHANALogo, logoWidth: 350 },
        { skillName: "SAP CAP", logoSrc: SAPLogo, logoWidth: 200 },
    ];

    const devOpsSkills = [
        { skillName: "Docker", logoSrc: DockerLogo, logoWidth: 100 },
        { skillName: "Git", logoSrc: GitLogo, logoWidth: 90 },
        { skillName: "GitHub", logoSrc: GitHubLogo, logoWidth: 120 },
        { skillName: "GitLab", logoSrc: GitLabLogo, logoWidth: 90 },
    ];

    const uiUxSkills = [
        { skillName: "Figma", logoSrc: FigmaLogo, logoWidth: 70 },
        { skillName: "Adobe XD", logoSrc: AdobeXDLogo, logoWidth: 80 },
        { skillName: "Adobe Photoshop", logoSrc: PhotoshopLogo, logoWidth: 80 },
        { skillName: "Adobe Illustrator", logoSrc: IllustratorLogo, logoWidth: 80 },
        { skillName: "Adobe After Effects", logoSrc: AfterEffectsLogo, logoWidth: 80 },
        { skillName: "Adobe Premiere Pro", logoSrc: PremiereProLogo, logoWidth: 80 },
    ];

    return (
        <div className="flex flex-col items-center justify-center mt-32">
            <div className="p-8 mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-600 via-orange-400 to-yellow-500 text-transparent bg-clip-text text-center">
                    Skills
                </h1>
                <div className="flex flex-col md:flex-row justify-center items-center mt-8">
                    <SkillGroup groupName="Frontend" skills={frontendSkills} />
                    <SkillGroup groupName="Backend" skills={backendSkills} />
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center mt-8">
                    <SkillGroup groupName="DevOps" skills={devOpsSkills} />
                    <SkillGroup groupName="UI/UX" skills={uiUxSkills} />
                </div>
            </div>
        </div>
    );
}
