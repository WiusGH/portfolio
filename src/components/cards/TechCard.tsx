import style from "./TechCard.module.css";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import js from "../../assets/images/js.png";
import ts from "../../assets/images/ts.png";
import react from "../../assets/images/react.png";
import vite from "../../assets/images/vite.png";
import python from "../../assets/images/python.png";
import flask from "../../assets/images/flask.png";
import java from "../../assets/images/java.png";
import spring from "../../assets/images/spring.png";
import mysql from "../../assets/images/mysql.png";
import postgres from "../../assets/images/postgres.png";
import aws from "../../assets/images/aws.png";
import git from "../../assets/images/git.png";
import github from "../../assets/images/github.png";
import vscode from "../../assets/images/vscode.png";
import pycharm from "../../assets/images/pycharm.png";
import intellij from "../../assets/images/intellij.png";
import mongo from "../../assets/images/mongo.png";
import render from "../../assets/images/render.webp";
import vercel from "../../assets/images/vercel.png";
import postman from "../../assets/images/postman.webp";
import insomnia from "../../assets/images/Insomnia.png";

interface TechCardProps {
  tech: string;
}

const TechCard: React.FC<TechCardProps> = ({ tech }) => {
  const renderIcon = () => {
    switch (tech.toLowerCase()) {
      case "html":
        return <img src={html} alt="html" />;
      case "css":
        return <img src={css} alt="css" />;
      case "javascript":
        return <img src={js} alt="javascript" />;
      case "typescript":
        return <img src={ts} alt="typescript" />;
      case "react":
        return <img src={react} alt="react" />;
      case "vite":
        return <img src={vite} alt="vite" />;
      case "python":
        return <img src={python} alt="python" />;
      case "flask":
        return <img src={flask} alt="flask" />;
      case "java":
        return <img src={java} alt="java" />;
      case "springboot":
        return <img src={spring} alt="springboot" />;
      case "mysql":
        return <img src={mysql} alt="mysql" />;
      case "postgres":
        return <img src={postgres} alt="postgres" />;
      case "mongodb":
        return <img src={mongo} alt="mongodb" />;
      case "aws":
        return <img src={aws} alt="aws" />;
      case "git":
        return <img src={git} alt="git" />;
      case "github":
        return <img src={github} alt="github" />;
      case "vscode":
        return <img src={vscode} alt="vscode" />;
      case "pycharm":
        return <img src={pycharm} alt="pycharm" />;
      case "intellij":
        return <img src={intellij} alt="intellij" />;
      case "render":
        return <img src={render} alt="render" />;
      case "vercel":
        return <img src={vercel} alt="vercel" />;
      case "postman":
        return <img src={postman} alt="postman" />;
      case "insomnia":
        return <img src={insomnia} alt="insomnia" />;
    }
  };

  return (
    <div className={style.techCard}>
      {renderIcon()} <p>{tech}</p>
    </div>
  );
};

export default TechCard;
