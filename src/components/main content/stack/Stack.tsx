import TechTag from "../../tags/TechTag";
import style from "./Stack.module.css";

const Stack = () => {
  return (
    <div className={style.stack}>
      <h5>Stack</h5>
      <h6>Frontend</h6>
      <section>
        <TechTag tech="HTML" />
        <TechTag tech="CSS" />
        <TechTag tech="Javascript" />
        <TechTag tech="Typescript" />
        <TechTag tech="React" />
        <TechTag tech="Vite" />
      </section>
      <h6>Backend</h6>
      <section>
        <TechTag tech="Python" />
        <TechTag tech="Flask" />
        <TechTag tech="Java" />
        <TechTag tech="Springboot" />
      </section>
      <h6>Database</h6>
      <section>
        <TechTag tech="MySQL" />
        <TechTag tech="MongoDB" />
        <TechTag tech="AWS" />
      </section>
      <h6>Herramientas</h6>
      <section>
        <TechTag tech="Git" />
        <TechTag tech="Github" />
        <TechTag tech="VSCode" />
        <TechTag tech="IntelliJ" />
        <TechTag tech="PyCharm" />
        <TechTag tech="Render" />
        <TechTag tech="Vercel" />
        <TechTag tech="Postman" />
        <TechTag tech="Insomnia" />
        {/* <TechTag tech="Docker" /> */}
      </section>
    </div>
  );
};

export default Stack;
