import React from "react";
import { SiFlutter, SiDart, SiTypescript, SiJavascript, SiFirebase, SiGooglemaps, SiJson, SiGraphql, SiRazorpay, SiStripe, SiGooglepay, SiSqlite, SiSupabase, SiGit, SiGithub, SiBitbucket, SiAndroidstudio, SiXcode, SiPostman, SiAsana, SiSlack, SiJira, SiTrello, SiFigma, SiFramer, SiAppstore, SiGoogleplay, SiLinux, SiSentry } from "react-icons/si";
import { FaDatabase, FaObjectGroup, FaHive, FaAndroid, FaApple, FaBox, FaCube, FaCubes, FaCode, FaWindows, FaServer, FaCodeBranch, FaPalette } from "react-icons/fa";
import { BsBellFill, BsShop, BsCurrencyDollar, BsBoxArrowInRight } from "react-icons/bs";
import { MdNotifications, MdSocialDistance, MdScience } from "react-icons/md";
import { skillsCategoriesData } from "../store/data";
import "../Styles/TeachSkills.css";

const iconMap = { SiFlutter, SiDart, SiTypescript, SiJavascript, SiFirebase, SiGooglemaps, SiJson, SiGraphql, SiRazorpay, SiStripe, SiGooglepay, SiSqlite, SiSupabase, SiGit, SiGithub, SiBitbucket, SiAndroidstudio, SiXcode, SiPostman, SiAsana, SiSlack, SiJira, SiTrello, SiFigma, SiFramer, SiAppstore, SiGoogleplay, SiLinux, SiSentry, FaDatabase, FaObjectGroup, FaHive, FaAndroid, FaApple, FaBox, FaCube, FaCubes, FaCode, FaWindows, FaServer, FaCodeBranch, FaPalette, BsBellFill, BsShop, BsCurrencyDollar, BsBoxArrowInRight, MdNotifications, MdSocialDistance, MdScience };

function TeachSkills() {
    return (
        <div className="skills-container">
            <div className="skills-header">
                <h1>Mobile Development Skills</h1>
                <p>
                    Comprehensive expertise in mobile app development and related
                    technologies
                </p>
            </div>
            <div className="skills-grid">
                {skillsCategoriesData.map((category, index) => (
                    <div key={index} className="skill-category">
                        <h2 className="category-title">{category.title}</h2>
                        <div className="skills-list">
                            {category.skills.map((skill, skillIndex) => {
                                const IconComponent = iconMap[skill.icon];
                                return (
                                    <div key={skillIndex} className="skill-item">
                                        {IconComponent ? <IconComponent size={40} /> : null}
                                        <span className="skill-name">{skill.name}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TeachSkills;
