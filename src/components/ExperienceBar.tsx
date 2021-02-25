import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar(){
    const {currentExperience, esperienceToNextLevel} = useContext(ChallengesContext);

    const porcentToNextLevel = Math.round(currentExperience * 100) / esperienceToNextLevel;

    return (
        <header className={styles.experienceBar}>
            <span>0 Xp</span>
            <div>
                <div style={{ width: `${porcentToNextLevel}%` }}/>
                <span className={styles.currentExperience} style={{ left: `${porcentToNextLevel}%` }}>
                    {currentExperience} xp</span>
            </div>
            <span>{esperienceToNextLevel} Xp</span>
        </header>
    );
}